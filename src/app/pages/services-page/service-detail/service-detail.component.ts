import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../../../interfaces/service.interface';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {
  service: Service = {
    image: '',
    title: '',
    description: '',
    path: '',
    isPrincipal: false,
    priceOnline: '',
    pricePresencial: '',
    onlineDescription: '',
    presencialDescription: ''
  };
  selectedPrice: 'online' | 'presencial' = 'online';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.service = data['service'];
      this.initializePrice();
    });
  }

  initializePrice(): void {
    if (!this.service.priceOnline || !this.service.onlineDescription) {
      this.selectedPrice = 'presencial';
    } else if (!this.service.pricePresencial || !this.service.presencialDescription) {
      this.selectedPrice = 'online';
    }
  }

  getPrice(): string {
    if (!this.service) return '';
    return this.selectedPrice === 'online' ? this.service.priceOnline : this.service.pricePresencial;
  }

  getDescription(): string {
    if (!this.service) return '';
    return this.selectedPrice === 'online' ? this.service.onlineDescription : this.service.presencialDescription;
  }

  hasMultipleModalities(): boolean {
    return (this.service.priceOnline != "" && this.service.onlineDescription != "") && (this.service.pricePresencial != "" && this.service.presencialDescription != "");
  }

  onPriceChange(): void {
    // This method will be triggered on price select change
  }
}
