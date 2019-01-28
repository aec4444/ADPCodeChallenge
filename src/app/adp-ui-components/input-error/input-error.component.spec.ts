import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputErrorComponent } from './input-error.component';
import { FormControl, AbstractControl, NgForm } from '@angular/forms';


class FormControlMock extends FormControl {
  get errors() {
    return {
      'test': 'error'
    };
  }
  set errors(value) {
    // do nothing
  }

  get touched(): boolean {
    return true;
  }
  set touched(value: boolean) {
    // do nothing
  }
}

class NgFormMock extends NgForm {
  get controls(): {[key: string]: AbstractControl} {
    return {
      'test': new FormControlMock(),
      'testNoError': new FormControl(),
      'testError': new FormControlMock()
    };
  }

  set controls(value: {[key: string]: AbstractControl}) {
    // no op
  }

  private _submitted = false;
  get submitted(): boolean {
    return this._submitted;
  }

  set submitted(value: boolean) {
    this._submitted = value;
  }
}

describe('InputErrorComponent', () => {
  let component: InputErrorComponent;
  let fixture: ComponentFixture<InputErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not show the error based on control', () => {
    component.message = 'Test';
    component.for = 'testNoError';
    component.errorType = 'test';
    const frm = new NgFormMock(undefined, undefined);
    frm.submitted = true;
    component.form = frm;
    expect(component.showErrorMessage()).toBeFalsy();
  });

  it('should not show the error based on wrong error type', () => {
    component.message = 'Test';
    component.for = 'test';
    component.errorType = 'testBadError';
    const frm = new NgFormMock(undefined, undefined);
    frm.submitted = true;
    component.form = frm;
    expect(component.showErrorMessage()).toBeFalsy();
  });

  it('should show the error', () => {
    component.message = 'Test';
    component.for = 'test';
    component.errorType = 'test';
    const frm = new NgFormMock(undefined, undefined);
    frm.submitted = true;
    component.form = frm;
    expect(component.showErrorMessage()).toBeTruthy();
  });

  it('should show the error based on touched', () => {
    component.message = 'Test';
    component.for = 'test';
    component.errorType = 'test';
    const frm = new NgFormMock(undefined, undefined);
    component.form = frm;
    expect(component.showErrorMessage()).toBeTruthy();
  });
});
