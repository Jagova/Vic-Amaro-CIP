import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Ebook } from '../../../interfaces/ebooks.interface';
import { ebooks } from '../../../data/ebooks';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ebook-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ebook-detail.component.html',
  styleUrl: './ebook-detail.component.css'
})
export class EbookDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private titleService = inject(Title);

  ebook!: Ebook;

  ngOnInit(): void {
    const path = this.route.snapshot.paramMap.get('path');
    const found = ebooks.find(e => e.path === path);
    if (!found) {
      this.router.navigate(['/ebooks']);
      return;
    }

    this.ebook = found;
    this.titleService.setTitle(this.ebook.title);
  }
}