import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyFormatComponent } from './currency-format.component';
import { BackButtonComponent } from '../back-button/back-button.component';

describe('CurrencyFormatComponent', () => {
  let component: CurrencyFormatComponent;
  let fixture: ComponentFixture<CurrencyFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyFormatComponent, BackButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
