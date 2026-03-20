import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { siteConfig } from '../../shared/site.config';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  config = siteConfig;

  private icons: Record<string, string> = {
    'Backend':         '⚙',
    'Architecture':    '🏗',
    'Base de données': '🗄',
    'DevOps & Cloud':  '☁',
    'Frontend':        '◈',
  };

  getCatIcon(cat: string): string {
    return this.icons[cat] ?? '◆';
  }
}