import { Component } from '@angular/core';
import { FormBuilder, RequiredValidator, Validators } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink,RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
    constructor(private fb:FormBuilder){ }

    signupForm = this.fb.group({
      email:['',Validators.required],
      password:['', Validators.required],
    })

    
}
