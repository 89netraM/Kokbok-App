import { ResponseItem } from "./response";
import { Category } from "./category";

export class Item extends Category {
	public static async ExtractFromData(data: ResponseItem): Promise<Item> {
		if (data.hasOwnProperty("file") &&
			data.hasOwnProperty("@microsoft.graph.downloadUrl")) {
			return new Item(data.id, data.createdDateTime, data.name, data["@microsoft.graph.downloadUrl"]);
		}
		else {
			return null;
		}
	}

	public readonly type: string;
	public readonly link: string;

	public constructor(id: string, created: string, name: string, link?: string) {
		super(id, created, name.substring(0, name.lastIndexOf(".")));
		this.type = name.substring(name.lastIndexOf(".") + 1);
		this.link = link || this.name;
	}
}