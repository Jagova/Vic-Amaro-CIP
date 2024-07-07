import { Component, AfterViewInit, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  private navbarNav: HTMLElement | null = null;
  private navbarToggler: HTMLElement | null = null;

  ngAfterViewInit() {
    this.navbarNav = document.getElementById('navbarNav');
    this.navbarToggler = document.querySelector('.navbar-toggler');
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(navLink => {
      navLink.addEventListener('click', () => this.closeNavbar());
    });
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.navbarNav && this.navbarToggler && this.navbarNav.classList.contains('show')) {
      const targetElement = event.target as HTMLElement;
      if (!this.navbarNav.contains(targetElement) && !this.navbarToggler.contains(targetElement)) {
        this.closeNavbar();
      }
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.navbarNav && this.navbarToggler && this.navbarNav.classList.contains('show')) {
      this.closeNavbar();
    }
  }

  private closeNavbar(): void {
    if (this.navbarNav && this.navbarNav.classList.contains('show') && this.navbarToggler) {
      this.navbarToggler.click();
    }
  }
}
