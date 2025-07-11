import { Component } from '@angular/core';
import { ebooks } from '../../data/ebooks';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ebooks-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ebooks-page.component.html',
  styleUrl: './ebooks-page.component.css'
})
export class EbooksPageComponent {
  ebooks = ebooks;

}
