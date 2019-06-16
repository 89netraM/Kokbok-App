import { Directive, Input, ElementRef, HostListener } from "@angular/core";

@Directive({
	// tslint:disable-next-line:directive-selector
	selector: "[modalRequired]"
})
export class ModalRequiredDirective {
	private _isValid: boolean = false;

	@HostListener("input")
	private onInput(): void {
		this._isValid = this.host.nativeElement.validity.valid;
	}

	public constructor(private host: ElementRef<HTMLInputElement>) {
		this.host.nativeElement.required = true;
	}

	public isValid(): boolean {
		return this._isValid;
	}
}