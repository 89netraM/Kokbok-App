import { Component, Input, HostBinding, Output, EventEmitter, ContentChildren, QueryList } from "@angular/core";
import { ModalRequiredDirective } from "./modal-required.directive";

@Component({
	selector: "bok-modal",
	templateUrl: "./modal.component.html",
	styleUrls: ["./modal.component.scss"]
})
export class ModalComponent {
	@Input()
	public title: string;
	@Input()
	public positive: string;
	@Input()
	public negative: string;

	@Output()
	public close: EventEmitter<boolean> = new EventEmitter<boolean>();

	@HostBinding("style.display")
	private styleDisplay: string = "none";
	private get visible(): boolean {
		return this.styleDisplay !== "none";
	}
	private set visible(value: boolean) {
		this.styleDisplay = value ? "" : "none";
	}

	@ContentChildren(ModalRequiredDirective)
	private required: QueryList<ModalRequiredDirective>;

	public constructor() { }

	public isAllValid(): boolean {
		return this.required.toArray().every(x => x.isValid());
	}

	public show(): void {
		this.visible = true;
	}

	public hide(status: boolean): void {
		this.visible = false;
		this.close.emit(status);
	}
}