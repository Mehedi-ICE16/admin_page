import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators,NonNullableFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { IEmployee } from '../../interfaces/employee.interface';
import { LoginApiService } from '../../services/login-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,private api:LoginApiService,private router:Router) {  }

ngOnInit(): void {
  this.loginForm = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })
}

onSubmit() {
  const { email, password } = this.loginForm.value;
  if (email && password)
    this.api.login(email!, password!).subscribe({
      next: data => {
        this.loginForm.reset();
        if(data.token){
          this.router.navigate(['dashboard']);
        }
      },
      error: err => {
        console.error(err);
      }
    })
  }

// constructor(private fb: NonNullableFormBuilder,private api:LoginApiService,private router:Router) {}

// validateForm: FormGroup<{
//   email: FormControl<string>;
//   password: FormControl<string>;
//   remember: FormControl<boolean>;
// }> = this.fb.group({
//   email: ['', [Validators.required,Validators.email]],
//   password: ['', [Validators.required]],
//   remember: [true]
// });

// onSubmit(): void {
//   if (this.validateForm.valid) {
//     console.log('submit', this.validateForm.value);
//   const { email, password } = this.validateForm.value;
//   if (email && password)
//     this.api.login(email!, password!).subscribe({
//       next: data => {
//         this.validateForm.reset();
//         if(data.token){
//           this.router.navigate(['dashboard']);
//         }
//       },
//       error: err => {
//         console.error(err);
//       }
//     })
//   } else {
//     Object.values(this.validateForm.controls).forEach(control => {
//       if (control.invalid) {
//         control.markAsDirty();
//         control.updateValueAndValidity({ onlySelf: true });
//       }
//     });
//   }
// }
}
