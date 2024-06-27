import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { services } from '../../data/services';
import { Service } from '../../interfaces/service.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-service-page',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.css'
})
export class ServicesPageComponent {
  services: Service[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.services = services.sort((a, b) => a.priority - b.priority);
  }

  navigateToService(path: string): void {
    this.router.navigate([`/services/${path}`]);
  }
}
