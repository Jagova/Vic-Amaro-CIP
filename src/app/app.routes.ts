import { Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';


export const routes: Routes = [

    { path: 'home', component: HomePageComponent, title: 'Victoria Amaro' },
    {
        path: 'services',
        loadChildren: () => import('./pages/services-page/services-routing').then(m => m.servicesRoutes)
    },
    { path: 'about', component: AboutPageComponent, title: 'Conóceme' },
    { path: 'contact', component: ContactPageComponent, title: 'Contacto' },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
];