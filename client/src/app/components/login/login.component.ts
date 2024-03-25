import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IEmployee } from '../../interfaces/employee.interface';
import { LoginApiService } from '../../services/login-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
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
}
