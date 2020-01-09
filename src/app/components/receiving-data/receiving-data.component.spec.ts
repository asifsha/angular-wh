import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivingDataComponent } from './receiving-data.component';
import { BackButtonComponent } from '../back-button/back-button.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ReceivingDataComponent', () => {
  let component: ReceivingDataComponent;
  let fixture: ComponentFixture<ReceivingDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivingDataComponent, BackButtonComponent ],
      imports:[RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
