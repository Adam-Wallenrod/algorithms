import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeSortPageComponent } from './merge-sort-page.component';

describe('MergeSortPageComponent', () => {
  let component: MergeSortPageComponent;
  let fixture: ComponentFixture<MergeSortPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergeSortPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeSortPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
