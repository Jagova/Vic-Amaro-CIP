import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./pages/home-page/home-page.component').then(m => m.HomePageComponent),
        title: 'Victoria Amaro'
    },
    {
        path: 'services',
        loadChildren: () => import('./pages/services-page/services-routing').then(m => m.servicesRoutes)
    },
    {
        path: 'about',
        loadComponent: () => import('./pages/about-page/about-page.component').then(m => m.AboutPageComponent),
        title: 'Conóceme'
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contact-page/contact-page.component').then(m => m.ContactPageComponent),
        title: 'Contacto'
    },
    {
        path: 'ebooks',
        loadChildren: () => import('./pages/ebooks-page/ebooks-routing').then(m => m.ebooksRoutes),
        title: 'Ebooks'
    },
    {
        path: 'workshops',
        loadComponent: () => import('./pages/workshops-page/workshops-page.component').then(m => m.WorkshopsPageComponent),
        title: 'Talleres'
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/home'
    }
];
