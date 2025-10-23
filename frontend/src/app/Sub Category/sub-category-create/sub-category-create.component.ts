import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonService } from '../../components/common.service';

@Component({
  selector: 'app-sub-category-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sub-category-create.component.html',
  styleUrl: './sub-category-create.component.css'
})
export class SubCategoryCreateComponent {

  constructor(private api: CommonService ,  private fb: FormBuilder){}

  subcategoryForm = this.fb.group({
    subcategory_name : ['',Validators.required],
    description: ['']
  })

  onSubmit(){
   this.api.postCallMethod(this.subcategoryForm.value).subscribe({
      next:(res)=>{
        if(res.status){
          alert('Sub category created successfully')
          this.subcategoryForm.reset()
        } 
      },error(err) {
        console.error('error from subcategory create', err)
      },
    })
  }

}
