import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'categories',
        loadChildren:()=>import('./Categories/category-route.module').then(m=>m.routes)
    },
    {
        path:'sub-categories',
        loadChildren:()=>import('./Sub Category/sub-category-route.module').then(m=>m.routes)
    },
    {
        path:'login',
        loadComponent:()=>import('./components/login/login.component').then(c=>c.LoginComponent)
    },
    {
        path:'signup',
        loadComponent:()=>import('./components/signup/signup.component').then(c=>c.SignupComponent)
    },
    {
        path:'',
        loadComponent:()=>import('./components/homepage/homepage.component').then(c=>c.HomepageComponent)
    },
    {
        path:'**',
        loadComponent:()=>import('./components/homepage/homepage.component').then(c=>c.HomepageComponent)
    }
];
