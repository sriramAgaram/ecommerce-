import { Routes } from "@angular/router";

export const routes:Routes =[
    {
        path:'create',
        loadComponent:()=>import('./category-create/category-create.component').then(m=>m.CategoryCreateComponent)
    },
    {
        path:'lists',
        loadComponent:()=>import('./category-lists/category-lists.component').then(m=>m.CategoryListsComponent)
    }
]