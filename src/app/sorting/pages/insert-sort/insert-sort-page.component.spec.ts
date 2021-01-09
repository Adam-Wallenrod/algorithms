import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertSortPageComponent } from './insert-sort-page.component';

describe('InsertSortComponent', () => {
  let component: InsertSortPageComponent;
  let fixture: ComponentFixture<InsertSortPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertSortPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertSortPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
