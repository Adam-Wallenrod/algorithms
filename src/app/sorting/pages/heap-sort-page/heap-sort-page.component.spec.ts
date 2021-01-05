import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeapSortPageComponent } from './heap-sort-page.component';

describe('HeapSortPageComponent', () => {
  let component: HeapSortPageComponent;
  let fixture: ComponentFixture<HeapSortPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeapSortPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeapSortPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
