import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-category-lists',
  standalone: true,
  imports: [TableModule, ButtonModule ,CommonModule],
  templateUrl: './category-lists.component.html',
  styleUrl: './category-lists.component.css'
})
export class CategoryListsComponent {

  categories = [
    {
      "name": "Electronics",
      "description": "Devices, gadgets, and accessories"
    },
    {
      "name": "Furniture",
      "description": "Home and office furniture items"
    },
    {
      "name": "Clothing",
      "description": "Apparel and fashion wear"
    },
    {
      "name": "Sports Equipment",
      "description": "Gear and accessories for sports"
    },
    {
      "name": "Books",
      "description": "Printed and digital reading material"
    },
    {
      "name": "Home & Garden",
      "description": "Tools and items for home improvement"
    },
    {
      "name": "Automotive",
      "description": "Car parts and accessories"
    },
    {
      "name": "Health & Beauty",
      "description": "Personal care and wellness products"
    },
    {
      "name": "Toys & Games",
      "description": "Entertainment and educational items"
    },
    {
      "name": "Jewelry",
      "description": "Accessories and precious items"
    }
  ]


  first = 0;

  rows = 5;

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isFirstPage(): boolean {
    return this.first === 0;
  }

  pageChange(event: any) {
    this.first = event.first;
  }

  isLastPage(): boolean {
    return this.categories ? this.first + this.rows >= this.categories.length : true;
  }

}
