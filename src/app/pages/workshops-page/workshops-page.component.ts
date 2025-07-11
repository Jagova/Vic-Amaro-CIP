import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { workshops } from '../../data/workshops';
import { Workshop } from '../../interfaces/workshop.interface';

@Component({
  selector: 'app-workshops-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workshops-page.component.html',
  styleUrl: './workshops-page.component.css'
})
export class WorkshopsPageComponent {
  workshops: Workshop[] = [];

  extraWorkshopImages: string[] = [
    'assets/images/workshops/1.jpg',
    'assets/images/workshops/2.jpg',
    'assets/images/workshops/3.jpg',
    'assets/images/workshops/4.jpg',
    'assets/images/workshops/5.jpg'
  ];

  constructor() {
    this.workshops = workshops;
  }

  encodeWhatsAppMessage(servicio: string): string {
    const texto = "¡Hola! Quisiera agendar una cita para el servicio de " + servicio;
    return encodeURIComponent(texto);
  }
}
