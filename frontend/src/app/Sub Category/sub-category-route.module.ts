import { Routes } from "@angular/router";



export const routes :Routes = [
    {
        path:'create',
        loadComponent:()=>import('./sub-category-create/sub-category-create.component').then(m=>m.SubCategoryCreateComponent)
    },
    {
        path:'lists',
        loadComponent:()=>import('./sub-category-lists/sub-category-lists.component').then(m=>m.SubCategoryListsComponent)
    }
]