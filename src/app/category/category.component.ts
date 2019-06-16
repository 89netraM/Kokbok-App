import { Component, OnInit, ViewChild } from "@angular/core";
import { Item } from "../storage/item";
import { StorageService } from "../storage/storage.service";
import { ActivatedRoute } from "@angular/router";
import { ModalComponent } from "../modal/modal.component";

@Component({
	selector: "bok-category",
	templateUrl: "./category.component.html",
	styleUrls: ["./category.component.scss"]
})
export class CategoryComponent implements OnInit {
	public items: Array<Item>;

	private isLoading: boolean = false;
	public get loading(): string {
		return (this.items === undefined || this.isLoading) ? "visible" : "hidden";
	}

	private category: string;

	//#region Edit Modal
	@ViewChild("editModal")
	public editModal: ModalComponent;

	private editingItem: Item;
	public _editingTitle: string;
	public _editingTitleBox: string;
	private set editingTitle(value: string) {
		this._editingTitle = value;
		this._editingTitleBox = value;
	}
	private get editingTitle(): string {
		return this._editingTitleBox;
	}
	//#endregion

	//#region Add Modal
	@ViewChild("addModal")
	public addModal: ModalComponent;

	public addingName: string;
	public addingType: number = 0;
	public addingURL: string;
	//#endregion

	public constructor(private storage: StorageService, private route: ActivatedRoute) { }

	public async ngOnInit() {
		this.category = this.route.snapshot.params["category"];
		this.items = await this.storage.getItems(this.category);
	}

	public edit(item: Item): void {
		this.editingItem = item;
		this.editingTitle = item.name;
		this.editModal.show();
	}
	public async editDelete(): Promise<void> {
		// Delete this.editingID
		this.editModal.hide(false);

		this.isLoading = true;

		const success: boolean = await this.storage.itemDelete(this.editingItem.id);
		if (success) {
			this.items = this.items.filter(x => x.id !== this.editingItem.id);
		}

		this.isLoading = false;
	}
	public async editDone(status: boolean): Promise<void> {
		if (status) {
			this.isLoading = true;

			const success: boolean = await this.storage.itemRename(this.editingItem.id, this.editingTitle + "." + this.editingItem.type);
			if (success) {
				this.editingItem.name = this.editingTitle;
			}

			this.isLoading = false;
		}
	}

	public addNew(): void {
		this.addingName = "";
		this.addingType = 0;
		this.addingURL = "";

		this.addModal.show();
	}
	public async addNewDone(status: boolean): Promise<void> {
		if (status) {
			this.isLoading = true;

			if (this.addingType === 0) {
				try {
					const newItem: Item = await this.storage.addItemDocument(this.category, this.addingName);
					this.items.push(newItem);
				}
				catch (error) {
					console.error("Could not add URL:", error);
				}
			}
			else if (this.addingType === 1) {
				try {
					const newItem: Item = await this.storage.addItemURL(this.category, this.addingName, this.addingURL);
					this.items.push(newItem);
				}
				catch (error) {
					console.error("Could not add URL:", error);
				}
			}

			this.isLoading = false;
		}
	}
}