import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountingSortPageComponent } from './counting-sort-page.component';

describe('CountingSortPageComponent', () => {
  let component: CountingSortPageComponent;
  let fixture: ComponentFixture<CountingSortPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountingSortPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountingSortPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
