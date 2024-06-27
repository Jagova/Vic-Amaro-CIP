import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  sendMail() {
    const subject = encodeURIComponent('Consulta');
    const body = encodeURIComponent(`Hola Victoria,%0A%0A${this.message}%0A%0AAtentamente,%0A${this.name} (${this.email})`);
    const mailtoLink = `mailto:info@cipvictoriamaro.com.mx?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  }
}
