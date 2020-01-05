import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivingDataComponent } from './receiving-data.component';

describe('ReceivingDataComponent', () => {
  let component: ReceivingDataComponent;
  let fixture: ComponentFixture<ReceivingDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivingDataComponent ]
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
