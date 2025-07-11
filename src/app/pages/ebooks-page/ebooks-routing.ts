import { Routes } from '@angular/router';
import { EbooksPageComponent } from './ebooks-page.component';
import { EbookDetailComponent } from './ebook-detail/ebook-detail.component';

export const ebooksRoutes: Routes = [
    { path: '', component: EbooksPageComponent, title: 'Ebooks' },
    { path: ':path', component: EbookDetailComponent, title: 'Detalle de Ebook' }
];
