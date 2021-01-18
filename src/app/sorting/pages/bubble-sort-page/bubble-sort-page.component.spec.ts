import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleSortPageComponent } from './bubble-sort-page.component';

describe('BubbleSortPageComponent', () => {
  let component: BubbleSortPageComponent;
  let fixture: ComponentFixture<BubbleSortPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BubbleSortPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BubbleSortPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
