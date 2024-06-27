import { Component, OnInit } from '@angular/core';
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
  service: Service | undefined = undefined;
  selectedPrice: 'online' | 'presencial' = 'online';

  constructor(private route: ActivatedRoute, private router: Router, private title: Title) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const servicePath = params['path'];
      this.service = services.find(service => service.path === servicePath);
      if (this.service) {
        this.initializePrice();
        this.title.setTitle(this.service.title);
      }
      else {
        this.router.navigate(['/services']); // Redirige a la página de error
      }
    });
  }

  initializePrice(): void {
    if (!this.service?.priceOnline || !this.service?.onlineDescription) {
      this.selectedPrice = 'presencial';
    } else if (!this.service?.pricePresencial || !this.service?.presencialDescription) {
      this.selectedPrice = 'online';
    }
  }

  getPrice(): string {
    if (!this.service) return '';
    return this.selectedPrice === 'online' ? this.service?.priceOnline : this.service?.pricePresencial;
  }

  getDescription(): string {
    if (!this.service) return '';
    return this.selectedPrice === 'online' ? this.service?.onlineDescription : this.service?.presencialDescription;
  }

  hasMultipleModalities(): boolean {
    return !!(this.service?.priceOnline && this.service?.onlineDescription) && !!(this.service?.pricePresencial && this.service?.presencialDescription);
  }

  onPriceChange(): void {
    // This method will be triggered on price select change
  }
}
