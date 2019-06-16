import { ResponseItem } from "./response";

export class Category {
	public static async ExtractFromData(data: ResponseItem): Promise<Category> {
		if (data.hasOwnProperty("folder")) {
			return new Category(data.id, data.createdDateTime, data.name);
		}
		else {
			return null;
		}
	}

	public readonly id: string;
	public readonly created: Date;
	public name: string;

	public constructor(id: string, created: string, name: string) {
		this.id = id;
		this.created = new Date(created);
		this.name = name;
	}
}