import { Component, computed, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../../../interfaces/service.interface';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { services } from '../../../data/services';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {

  service = signal<Service | null>(null);
  selectedPrice = signal<'online' | 'presencial'>('online');

  price = computed(() => {
    const serviceValue = this.service();
    if (!serviceValue) return '';
    return this.selectedPrice() === 'online' ? serviceValue.priceOnline : serviceValue.pricePresencial;
  });

  description = computed(() => {
    if (!this.service()) return '';
    return this.selectedPrice() === 'online' ? this.service()?.onlineDescription! : this.service()?.presencialDescription!;
  })

  constructor(private route: ActivatedRoute, private router: Router, private title: Title) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const servicePath = params['path'];
      const foundService = services.find(service => service.path === servicePath);

      if (foundService) {
        this.service.set(foundService);
        this.selectedPrice.set('online');
        this.title.setTitle(foundService.title);
      } else {
        this.router.navigate(['/services']);
      }
    });
  }

  initializePrice(): void {
    if (!this.service()?.priceOnline || this.service()?.pricePresencial) {
      this.selectedPrice.set('presencial');
    } else if (!this.service()?.pricePresencial) {
      this.selectedPrice.set('online');
    }
  }

  hasMultipleModalities(): boolean {
    return !!(this.service()?.priceOnline && this.service()?.pricePresencial);
  }

  hasAnyDescription(): boolean {
    return !!(this.service()?.onlineDescription || this.service()?.presencialDescription);
  }

  onPriceChange(): void {
    // This method will be triggered on price select change
  }

  navigateToAllServices(): void {
    this.router.navigate(['/services']);
  }

  encodeWhatsAppMessage(servicio: string): string {
    const texto = "¡Hola! Quisiera agendar una cita para el servicio de " + servicio;
    return encodeURIComponent(texto);
  }
}
