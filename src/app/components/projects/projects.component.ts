import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { siteConfig } from '../../shared/site.config';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  config = siteConfig;

  filters = ['Tous', 'Java', 'Spring Boot', 'Docker', 'Angular', '.NET', 'Python'];
  active  = signal('Tous');

  filtered = computed(() => {
    const f = this.active();
    if (f === 'Tous') return this.config.projects;
    return this.config.projects.filter(p => p.skills.includes(f));
  });

  setFilter(f: string) { this.active.set(f); }
}