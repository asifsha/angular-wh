import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChange
} from "@angular/core";

@Component({
  selector: "app-text-input",
  templateUrl: "./text-input.component.html",
  styleUrls: ["./text-input.component.css"]
})
export class TextInputComponent implements OnInit {
  @Input()
  value: number;

  @Output()
  valueChange: EventEmitter<any> = new EventEmitter();

  valueChangeText = "";

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChange) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case "value": {
            this.valueChangeText =
              "Value updated from " +
              changes["value"].previousValue +
              " to " +
              changes["value"].currentValue;
            break;
          }
        }
      }
    }
  }

  onblur(event) {
    this.valueChange.emit(event.target.value);
  }
}
