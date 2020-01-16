import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassingDataComponent } from './passing-data.component';
import { BackButtonComponent } from '../back-button/back-button.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('PassingDataComponent', () => {
  let component: PassingDataComponent;
  let fixture: ComponentFixture<PassingDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassingDataComponent, BackButtonComponent ],
      imports:[FormsModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
