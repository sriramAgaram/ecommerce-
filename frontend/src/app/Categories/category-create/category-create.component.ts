import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
@Component({
  selector: 'app-category-create',
  standalone: true,
  imports: [
    FloatLabelModule,
    InputTextModule,
    InputTextareaModule,
    ReactiveFormsModule
  ],
  templateUrl: './category-create.component.html',
  styleUrl: './category-create.component.css'
})
export class CategoryCreateComponent {
  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  categoryCreateForm = this.fb.group({
    category_name: ['', Validators.required],
    description: [''],
  })


  getAuthtoken = (): HttpHeaders => {
    const token = localStorage.getItem('token');

    if (token) {
      return new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });
    } else {
      return new HttpHeaders({
        'Content-Type': 'application/json'
      });
    }
  }


  onSubmit() {
    const headers = this.getAuthtoken()
    this.http.post('http://localhost:5000/api/V1/categories/add', this.categoryCreateForm.value, { headers }).subscribe({
      next: () => {
        alert('Category Created Successfully')
        this.categoryCreateForm.reset();
      }, error: (err) => {
        console.error("error from category create", err)
      }
    })
  }

}
