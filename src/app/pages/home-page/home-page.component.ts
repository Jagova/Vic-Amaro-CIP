import { Component, OnInit } from '@angular/core';
import { Service } from '../../interfaces/service.interface';
import { Router } from '@angular/router';
import { services } from '../../data/services';
import { reviews } from '../../data/reviews'; 
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  principalServices: Service[] = [];
  reviews = reviews; 

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.principalServices = services.filter(service => service.isPrincipal);
    this.reviews = reviews
  }

  navigateToService(path: string): void {
    this.router.navigate([`services/${path}`]);
  }

  navigateToAllServices(): void {
    this.router.navigate(['/services']);
  }
}
