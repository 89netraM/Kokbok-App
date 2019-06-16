import { Component, OnInit, ViewChild } from "@angular/core";
import { StorageService } from "../storage/storage.service";
import { Category } from "../storage/category";
import { ModalComponent } from "../modal/modal.component";

@Component({
	selector: "bok-start",
	templateUrl: "./start.component.html",
	styleUrls: ["./start.component.scss"]
})
export class StartComponent implements OnInit {
	public categories: Array<Category>;

	//#region Edit Modal
	@ViewChild("editModal")
	public editModal: ModalComponent;

	private editingCategory: Category;
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

	private isLoading: boolean = false;
	public get loading(): string {
		return (this.categories === undefined || this.isLoading) ? "visible" : "hidden";
	}

	public constructor(private storage: StorageService) { }

	public async ngOnInit() {
		this.categories = await this.storage.getCategories();
	}

	public edit(category: Category): void {
		this.editingCategory = category;
		this.editingTitle = category.name;
		this.editModal.show();
	}
	public async editDelete(): Promise<void> {
		// Delete this.editingID
		this.editModal.hide(false);

		this.isLoading = true;

		const success: boolean = await this.storage.categoryDelete(this.editingCategory.id);
		if (success) {
			this.categories = this.categories.filter(x => x.id !== this.editingCategory.id);
		}

		this.isLoading = false;
	}
	public async editDone(status: boolean): Promise<void> {
		if (status) {
			this.isLoading = true;

			const success: boolean = await this.storage.categoryRename(this.editingCategory.id, this.editingTitle);
			if (success) {
				this.editingCategory.name = this.editingTitle;
			}

			this.isLoading = false;
		}
	}

	public addNew(): void {
		this.addingName = "";

		this.addModal.show();
	}
	public async addNewDone(status: boolean): Promise<void> {
		if (status) {
			this.isLoading = true;

			try {
				const newCategory: Category = await this.storage.addCategory(this.addingName);
				this.categories.push(newCategory);
				this.categories = this.categories.sort(
					(a, b) => {
						const aName = a.name.toLowerCase();
						const bName = b.name.toLowerCase();

						if (aName < bName) {
							return -1;
						}
						else if (aName > bName) {
							return 1;
						}
						else {
							return 0;
						}
					}
				);
			}
			catch (error) {
				console.error("Could not add URL:", error);
			}

			this.isLoading = false;
		}
	}
}