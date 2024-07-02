import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {

  form!: FormGroup;

  @Output() onCodeSent = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {}
  
  ngOnInit(): void {
    this.form = this.fb.group({
      value1: ['', [
        Validators.required,
        Validators.maxLength(1),
        Validators.max(9),
        Validators.min(0),
        Validators.pattern('^[0-9]$')
      ]],
      value2: ['', [
        Validators.required,
        Validators.maxLength(1),
        Validators.max(9),
        Validators.min(0),
        Validators.pattern('^[0-9]$')
      ]],
      value3: ['', [
        Validators.required,
        Validators.maxLength(1),
        Validators.max(9),
        Validators.min(0),
        Validators.pattern('^[0-9]$')
      ]],
      value4: ['', [
        Validators.required,
        Validators.maxLength(1),
        Validators.max(9),
        Validators.min(0),
        Validators.pattern('^[0-9]$')
      ]]
    })
  }

  get value1() {
    return this.form.get('value1');
  }

  get value2() {
    return this.form.get('value2');
  }

  get value3() {
    return this.form.get('value3');
  }

  get value4() {
    return this.form.get('value4');
  }

  submitForm() {
    if (this.form.valid) {
      const formValue = this.form.value;
      const concatValues = `${formValue.value1}${formValue.value2}${formValue.value3}${formValue.value4}`;
      this.onCodeSent.emit(concatValues);
    }
  }

  onlyAllowNumbers(event: KeyboardEvent): void {
    const allowedKeys = /[0-9]/;
    if (!allowedKeys.test(event.key)) {
      event.preventDefault();
    }
  }

  moveFocus(value: string, nextInput: HTMLInputElement): void {
    if (value.length === 1) {
      nextInput.value = '';
      nextInput.focus();
    }
  }

  checkBackspace(event: KeyboardEvent, prevInput: HTMLInputElement | null): void {
    if (event.key === 'Backspace' && prevInput) {
      prevInput.focus();
    }
  }

}
