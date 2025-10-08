import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink , RouterModule, TabViewModule , ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    constructor(private fb: FormBuilder , private http:HttpClient){}

    authForm = this.fb.group({
      email:['' , Validators.required],
      password:['', Validators.required]
    })

    
    onSubmit() {
     const obj ={
        email : this.authForm.value.email,
        password:this.authForm.value.password
      }

      const response  = this.http.post('http://localhost:5000/auth/signup' , obj).subscribe({
        next:(res) =>{
          console.log(res)
        },error:(err)=>{
          console.error(err)
        }
      })
    }
}
