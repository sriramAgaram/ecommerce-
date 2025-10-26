import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { CommonService } from '../common.service';
import { ImageUploadComponent } from '../shared/image-upload/image-upload.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    MultiSelectModule,
    ReactiveFormsModule,
    ImageUploadComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private api: CommonService
  ) { }
  categoryLists = [];
  subCategoryLists =[];
  id = ''

  ngOnInit(): void {
    this.fetchCategory();
    this.fetchSubCategory();
  }

  productForm = this.fb.group({
    product_name: ['', Validators.required],
    description: ['', Validators.required],
    price: [0, Validators.required],
    stock: [0, Validators.required],
    image_url: [[], Validators.required],
    category_id: [0, Validators.required],
    sub_category_id: [0, Validators.required]
  })

  fetchCategory() {
    this.api.getCallMethod(`/categories/lists`).subscribe({
      next: (res) => {
        if (res.status) {
          this.categoryLists = res.data || [];
        }
      }, error: (err) => {
        console.error(`error from product component ${err}`)
      }
    })
  }

  fetchSubCategory(){
    this.api.getCallMethod(`/subcategories/lists`).subscribe({
      next:(res)=>{
        if(res.status){
          this.subCategoryLists = res.data || [];
        }
      },error :(err)=>{
        console.error('error from subcategories fetching ....', err);
        
      }
    })
  }

  onSubmit(){
    this.api.postCallMethod(this.productForm.value , '/product/add').subscribe({
      next:(res)=>{
        if(res.status){
          alert('Product Added successfully .....')
        }
      },error:(err)=> {
        console.error('error from product add ...', err)
      },
    })
  }

}
