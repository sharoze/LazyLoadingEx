import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ODC3Component } from './odc3.component';

describe('ODC3Component', () => {
  let component: ODC3Component;
  let fixture: ComponentFixture<ODC3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ODC3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ODC3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
