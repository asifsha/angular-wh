import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangesInputOutputComponent } from './changes-input-output.component';
import { BackButtonComponent } from '../back-button/back-button.component';
import { TextInputComponent } from '../text-input/text-input.component';

describe('ChangesInputOutputComponent', () => {
  let component: ChangesInputOutputComponent;
  let fixture: ComponentFixture<ChangesInputOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangesInputOutputComponent, BackButtonComponent, TextInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangesInputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
