import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingPropertiesComponent } from './binding-properties.component';

describe('BindingPropertiesComponent', () => {
  let component: BindingPropertiesComponent;
  let fixture: ComponentFixture<BindingPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
