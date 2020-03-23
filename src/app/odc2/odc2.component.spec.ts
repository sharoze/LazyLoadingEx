import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ODC2Component } from './odc2.component';

describe('ODC2Component', () => {
  let component: ODC2Component;
  let fixture: ComponentFixture<ODC2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ODC2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ODC2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
