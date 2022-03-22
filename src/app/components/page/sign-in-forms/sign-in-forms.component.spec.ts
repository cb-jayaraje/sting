import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInFormsComponent } from './sign-in-forms.component';

describe('SignInFormsComponent', () => {
  let component: SignInFormsComponent;
  let fixture: ComponentFixture<SignInFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
