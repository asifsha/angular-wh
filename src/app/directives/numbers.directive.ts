import { Directive, HostListener } from "@angular/core";
import { CurrencyPipe } from "@angular/common";



@Directive({
  selector: "[appNumbers]"
})
export class NumbersDirective {
  constructor() {}
  @HostListener("keydown", ["$event"]) onKeyDown(event) {
    let e = <KeyboardEvent>event;

    if (
      [46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
      // Allow: Ctrl+A
      (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
      // Allow: Ctrl+C
      (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
      // Allow: Ctrl+V
      (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
      // Allow: Ctrl+X
      (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
      // Allow: home, end, left, right
      (e.keyCode >= 35 && e.keyCode <= 39)
    ) {
      // let it happen, don't do anything
      // return newValue;
      return;
    }
    // Ensure that it is a number and stop the keypress
    if (
      (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&
      (e.keyCode < 96 || e.keyCode > 105)
    ) {
      e.preventDefault();
    }
  }

  @HostListener("blur", ["$event"]) onblur(event) {
    let e = <KeyboardEvent>event;
    let currencyPipe: CurrencyPipe = new CurrencyPipe("en-US");
    let newValue = currencyPipe.transform((e.target as any).value);
    (e.target as any).value = newValue;    
  }
}
