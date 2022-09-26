import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedListsComponent } from './stacked-lists.component';

describe('StackedListsComponent', () => {
  let component: StackedListsComponent;
  let fixture: ComponentFixture<StackedListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackedListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
