import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { siteConfig } from '../../shared/site.config';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavComponent {
  config   = siteConfig;
  scrolled = signal(false);
  open     = signal(false);

  @HostListener('window:scroll')
  onScroll() { this.scrolled.set(window.scrollY > 50); }

  toggle() { this.open.update(v => !v); }
  close()  { this.open.set(false); }
}