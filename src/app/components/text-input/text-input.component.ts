import { Component, OnInit, Input, Output, EventEmitter, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {

  @Input()
  value : number;  

  @Output()
  valueChange : EventEmitter<any> = new EventEmitter();

  
  valueChangeText='';
  //@Output() close: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes : SimpleChange)
  {    
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'value': {
            this.valueChangeText= 'Value updated from ' + changes['value'].previousValue + ' to ' + changes['value'].currentValue;
            console.log(this.valueChangeText);
            break;
          }
        }
      }
    }
  }

  onblur(event){    
    this.valueChange.emit(event.target.value);    
  }

}
