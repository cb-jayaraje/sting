import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithValidationErrorComponent } from './input-with-validation-error.component';

describe('InputWithValidationErrorComponent', () => {
  let component: InputWithValidationErrorComponent;
  let fixture: ComponentFixture<InputWithValidationErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputWithValidationErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputWithValidationErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
