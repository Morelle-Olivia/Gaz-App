import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signupForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(256)])],
        role: ['', Validators.required]
      }
    );
  }
  get f(): {[key: string]: AbstractControl} {
    return this.signupForm.controls;
  }

  onSubmit(): void{
    this.submitted = true;
    if (this.signupForm.invalid){
      return;
    }
  }

}
