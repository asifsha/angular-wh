import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BindingPropertiesComponent } from "./binding-properties.component";
import { BackButtonComponent } from "../back-button/back-button.component";
import { FormsModule } from "@angular/forms";
import { TextInputComponent } from '../text-input/text-input.component';
import { CounterComponent } from '../counter/counter.component';

describe("BindingPropertiesComponent", () => {
  let component: BindingPropertiesComponent;
  let fixture: ComponentFixture<BindingPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BindingPropertiesComponent, BackButtonComponent, TextInputComponent, CounterComponent],
      imports: [FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
