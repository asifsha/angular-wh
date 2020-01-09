import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { InputValidationComponent } from "./input-validation.component";
import { BackButtonComponent } from "../back-button/back-button.component";
import { By } from '@angular/platform-browser';

describe("InputValidationComponent", () => {
  let component: InputValidationComponent;
  let fixture: ComponentFixture<InputValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputValidationComponent, BackButtonComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should validate email and number", () => {
    const compiled = fixture.debugElement.nativeElement;
    const emailEl = fixture.debugElement.query(By.css('input[type=email]'));
    const numberEl = fixture.debugElement.query(By.css('input[type=number]'));
    emailEl.nativeElement.value="5";   
    numberEl.nativeElement.value=9;

    fixture.componentInstance.validateEmail(emailEl.nativeElement.value);
    fixture.componentInstance.validateNumber(numberEl.nativeElement.value);
    const emailError = fixture.componentInstance.showEmailError;
    const numberError = fixture.componentInstance.showNumberError;
    expect(emailError).toEqual(true);  
    expect(numberError).toEqual(true);  
    

    
  });
});
