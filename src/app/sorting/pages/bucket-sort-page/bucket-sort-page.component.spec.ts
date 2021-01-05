import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketSortPageComponent } from './bucket-sort-page.component';

describe('BucketSortPageComponent', () => {
  let component: BucketSortPageComponent;
  let fixture: ComponentFixture<BucketSortPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BucketSortPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketSortPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
