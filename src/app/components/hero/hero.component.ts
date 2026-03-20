import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { siteConfig } from '../../shared/site.config';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit, OnDestroy {
  config = siteConfig;

  typed   = signal('');
  blink   = signal(true);

  private roles   = ['Backend Engineer', 'Java Developer', 'API Architect', 'Spring Boot Expert'];
  private rIdx    = 0;
  private cIdx    = 0;
  private deleting = false;
  private timer: ReturnType<typeof setTimeout> | null = null;

  ngOnInit()    { this.type(); }
  ngOnDestroy() { if (this.timer) clearTimeout(this.timer); }

  private type() {
    const word = this.roles[this.rIdx];

    if (!this.deleting) {
      this.typed.set(word.slice(0, ++this.cIdx));
      if (this.cIdx === word.length) {
        this.deleting = true;
        this.timer = setTimeout(() => this.type(), 1800);
        return;
      }
    } else {
      this.typed.set(word.slice(0, --this.cIdx));
      if (this.cIdx === 0) {
        this.deleting = false;
        this.rIdx = (this.rIdx + 1) % this.roles.length;
      }
    }
    this.timer = setTimeout(() => this.type(), this.deleting ? 55 : 95);
  }
}