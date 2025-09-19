import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
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
    private fb:FormBuilder,
    private http:HttpClient
  ) { }

 

  categoryCreateForm = this.fb.group({
    category_name: [''],
    description: [''],
  })

  onSubmit() {
    this.http.post('http://localhost:5000/api/V1/categories/add', this.categoryCreateForm.value).subscribe({
      next:()=>{
        alert('Category Created Successfully')
        this.categoryCreateForm.reset();
      },error:(err)=>{
        console.error("error from category create",err)
      }
    })
  }




}
