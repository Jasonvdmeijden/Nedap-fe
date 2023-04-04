import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpResultFormComponent } from './sign-up-result-form.component';

describe('SignUpResultFormComponent', () => {
  let component: SignUpResultFormComponent;
  let fixture: ComponentFixture<SignUpResultFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpResultFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpResultFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
