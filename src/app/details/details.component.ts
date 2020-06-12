import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Converter } from "showdown";
import { StorageService } from "../storage/storage.service";
import { Item } from "../storage/item";
import { ModalComponent } from "../modal/modal.component";

@Component({
	selector: "bok-details",
	templateUrl: "./details.component.html",
	styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit {
	private readonly converter: Converter = new Converter();

	private _loading: boolean = true;
	public get loading(): string {
		return this._loading ? "visible" : "hidden";
	}

	private category: string;
	private name: string;
	private item: Item;

	private markdown: string;

	@ViewChild("article")
	private article: ElementRef<HTMLElement>;

	public isEditing: boolean = false;
	
	//#region Add Image
	@ViewChild("addImage")
	public addImage: ModalComponent;
	private selectedFile: File;

	private selectionNode: Node;
	private selectionOffset: number;
	//#endregion

	public constructor(private storage: StorageService, private route: ActivatedRoute) { }

	public async ngOnInit(): Promise<void> {
		this.category = this.route.snapshot.params["category"];
		this.name = this.route.snapshot.params["name"];
		this.item = await this.storage.getItem(this.category, this.name);

		this.markdown = await this.storage.downloadItemText(this.item);
		this.article.nativeElement.innerHTML = this.converter.makeHtml(this.markdown);

		this._loading = false;
	}

	public async toggleEditing(): Promise<void> {
		if (this.isEditing) {
			this._loading = true;

			const markdown: string = this.converter.makeMarkdown(this.article.nativeElement.innerHTML);
			if (this.markdown !== markdown) {
				const success: boolean = await this.storage.updateDocument(this.item, markdown);
			}

			this._loading = false;
		}
		else {
			document.execCommand("defaultParagraphSeparator", false, "p");
		}

		this.isEditing = !this.isEditing;
	}

	public makeHeader(): void {
		const selection: Selection = getSelection();

		let last: Node;
		let current: Node = selection.anchorNode.parentNode;
		while (current !== this.article.nativeElement) {
			last = current;
			current = current.parentNode;
		}

		switch (last.nodeName) {
			case "P":
			default:
				document.execCommand("formatBlock", false, "h1");
				break;
			case "H1":
				document.execCommand("formatBlock", false, "h2");
				break;
			case "H2":
				document.execCommand("formatBlock", false, "h3");
				break;
			case "H3":
				document.execCommand("formatBlock", false, "p");
				break;
		}
	}
	public makeBold(): void {
		document.execCommand("bold");
	}
	public makeItalic(): void {
		document.execCommand("italic");
	}
	public makeList(): void {
		document.execCommand("insertOrderedList");
	}
	public makeBullets(): void {
		document.execCommand("insertUnorderedList");
	}
	public makeImage(): void {
		const selection: Selection = getSelection();
		this.selectionNode = selection.anchorNode;
		this.selectionOffset = selection.anchorOffset;

		this.addImage.show();
	}

	public imageFileChange(files: FileList): void {
		if (files.length > 0) {
			this.selectedFile = files[0];
		}
	}
	public addImageDone(status: boolean): void {
		if (status) {
			const reader: FileReader = new FileReader();
			reader.addEventListener(
				"load",
				() => {
					this.article.nativeElement.focus();
					document.getSelection().setPosition(this.selectionNode, this.selectionOffset);
					document.execCommand("insertImage", false, reader.result as string);
				},
				false
			);
			reader.readAsDataURL(this.selectedFile);
		}
	}
}