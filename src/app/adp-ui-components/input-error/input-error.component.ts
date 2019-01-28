import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input-error',
  templateUrl: './input-error.component.html',
  styleUrls: ['./input-error.component.scss']
})
export class InputErrorComponent implements OnInit {
  @Input() message: string;
  @Input() form: NgForm;
  @Input() for: string;
  @Input() errorType: string;

  constructor() { }

  ngOnInit() {
  }

  showErrorMessage(): boolean {
    if (this.form === undefined || this.form === null) {
      return false; // no form object, don't show validator
    }

    const ctl = this.form.controls[this.for];
    if (ctl !== undefined && ctl !== null) {
      const err = ctl.errors !== undefined && ctl.errors !== null && ctl.errors[this.errorType] !== undefined;

      // only show the validator under these conditions
      return !ctl.valid && err && (this.form.submitted || ctl.touched);
    }

    return false; // could not find the control
  }
}
