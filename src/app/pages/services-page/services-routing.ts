import { Router, Routes } from '@angular/router';
import { ServicesPageComponent } from './services-page.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';

export const servicesRoutes: Routes = [
    { path: '', component: ServicesPageComponent, title: 'Servicios' },
    { path: ':path', component: ServiceDetailComponent, title: 'Detalle del Servicio' }
];
