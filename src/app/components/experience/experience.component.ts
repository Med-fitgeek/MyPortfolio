import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { siteConfig } from '../../shared/site.config';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  config = siteConfig;
  active = 0;

  setActive(i: number) { this.active = i; }
}