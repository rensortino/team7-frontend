import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetsPage } from './tweets.page';

describe('TweetsPage', () => {
  let component: TweetsPage;
  let fixture: ComponentFixture<TweetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
