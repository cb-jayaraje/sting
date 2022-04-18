import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContainersComponent } from './list-containers.component';

describe('ListContainersComponent', () => {
  let component: ListContainersComponent;
  let fixture: ComponentFixture<ListContainersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListContainersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
