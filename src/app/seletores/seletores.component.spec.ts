import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Item01Component } from './item01.component';

describe('Item01Component', () => {
  let component: Item01Component;
  let fixture: ComponentFixture<Item01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Item01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Item01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
