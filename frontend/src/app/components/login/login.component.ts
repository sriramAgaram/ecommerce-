import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { TabViewModule } from 'primeng/tabview';


interface signupResponse {
  status: boolean,
  message: string
}

interface loginResponse {
  status : boolean,
  msg : string,
  data : string
}
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterModule, TabViewModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private fb: FormBuilder, private http: HttpClient, private route: Router) { }

  isLogin = signal<boolean>(false);
  activeTabIndex: number = 1;

  authForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })



  onSubmit() {
    const obj = {
      email: this.authForm.value.email,
      password: this.authForm.value.password
    }

    const response = this.http.post<signupResponse>('http://localhost:5000/auth/signup', obj).subscribe({
      next: (res) => {
        if (res.status) {
          this.activeTabIndex = 0
        }
      }, error: (err) => {
        console.error(err)
      }
    })
  }


  onLogin() {
    const obj = {
      email: this.authForm.value.email,
      password: this.authForm.value.password
    }

    const response = this.http.post <loginResponse>('http://localhost:5000/auth/login', obj).subscribe({
      next: (res) => {
        if(res.status){
          localStorage.setItem('token', res.data);
          this.route.navigate(['/'])
        }else {
          this.route.navigate(['/login'])
        }      
      }, error: (err) => {
        console.error(err)
      }
    })
  }
}
