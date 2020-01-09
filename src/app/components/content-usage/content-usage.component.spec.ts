import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentUsageComponent } from './content-usage.component';
import { BackButtonComponent } from '../back-button/back-button.component';
import { AddButtonComponent } from '../add-button/add-button.component';

describe('ContentUsageComponent', () => {
  let component: ContentUsageComponent;
  let fixture: ComponentFixture<ContentUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentUsageComponent, BackButtonComponent, AddButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
