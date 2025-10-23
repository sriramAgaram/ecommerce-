import { Routes } from '@angular/router';
import { authGaurd } from './auth.gaurd';

export const routes: Routes = [
    {
        path:'categories',
        canActivate:[authGaurd],
        loadChildren:()=>import('./Categories/category-route.module').then(m=>m.routes)
    },
    {
        path:'sub-categories',
        canActivate:[authGaurd],
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
        path:'products',
        canActivate:[authGaurd],
        loadComponent:()=> import('./components/products/products.component').then(c=> c.ProductsComponent)
    },
    {
        path:'',
        canActivate:[authGaurd],
        loadComponent:()=>import('./components/homepage/homepage.component').then(c=>c.HomepageComponent)
    },
    {
        path:'cart',
        canActivate:[authGaurd],
        loadComponent:()=>import('./components/cart/cart.component').then(c=>c.CartComponent)
    },
    {
        path:'**',
        loadComponent:()=>import('./components/homepage/homepage.component').then(c=>c.HomepageComponent)
    }
];
