import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { siteConfig } from '../../shared/site.config';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  config   = siteConfig;
  cvOpen   = signal(false);
  copied   = signal(false);

  toggleCv()  { this.cvOpen.update(v => !v); }

  async copyEmail() {
    await navigator.clipboard.writeText(this.config.social.email);
    this.copied.set(true);
    setTimeout(() => this.copied.set(false), 2000);
  }
}