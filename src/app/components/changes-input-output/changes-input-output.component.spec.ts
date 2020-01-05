import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangesInputOutputComponent } from './changes-input-output.component';

describe('ChangesInputOutputComponent', () => {
  let component: ChangesInputOutputComponent;
  let fixture: ComponentFixture<ChangesInputOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangesInputOutputComponent ]
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
