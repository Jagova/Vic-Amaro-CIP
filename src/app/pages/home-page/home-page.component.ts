import { Component } from '@angular/core';
import { Service } from '../../interfaces/service.interface';
import { Router } from '@angular/router';
import { services } from '../../data/services';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  principalServices: Service[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.principalServices = services.filter(service => service.isPrincipal);
  }

  navigateToService(path: string): void {
    this.router.navigate([`services/${path}`]);
  }
}
