import { Router, Routes } from '@angular/router';
import { ServicesPageComponent } from './services-page.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { services } from '../../data/services';

export const servicesRoutes: Routes = [
    { path: '', component: ServicesPageComponent, title: 'Servicios' },
    ...services.map(service => ({ path: service.path, data: { service }, component: ServiceDetailComponent, title: service.title }))
];
