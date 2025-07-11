import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { services } from '../../data/services';
import { reviews } from '../../data/reviews';
import { CommonModule } from '@angular/common';
import { Review } from '../../interfaces/review.interface';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  services = services.filter(s => s.isPrincipal);
  reviews = reviews;
  currentIndex = 0;
  autoSlideInterval: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); 
  }

  ngOnDestroy(): void {
    clearInterval(this.autoSlideInterval);
  }

  get visibleReviews(): Review[] {
    const total = this.reviews.length;
    const prevIndex = (this.currentIndex - 1 + total) % total;
    const nextIndex = (this.currentIndex + 1) % total;

    return [this.reviews[prevIndex], this.reviews[this.currentIndex], this.reviews[nextIndex]];
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.reviews.length) % this.reviews.length;
  }

  navigateToService(path: string): void {
    this.router.navigate([`services/${path}`]);
  }

  navigateToAllServices(): void {
    this.router.navigate(['/services']);
  }

  navigateTo(path: string): void {
    this.router.navigate([`/${path}`]);
  }
}
