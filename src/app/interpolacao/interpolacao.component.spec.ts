import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Item03Component } from './item03.component';

describe('Item03Component', () => {
  let component: Item03Component;
  let fixture: ComponentFixture<Item03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Item03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Item03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
