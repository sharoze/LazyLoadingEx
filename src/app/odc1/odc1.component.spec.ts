import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ODC1Component } from './odc1.component';

describe('ODC1Component', () => {
  let component: ODC1Component;
  let fixture: ComponentFixture<ODC1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ODC1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ODC1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
