import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCommonComponent } from './input-common.component';

describe('InputCommonComponent', () => {
  let component: InputCommonComponent;
  let fixture: ComponentFixture<InputCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCommonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
