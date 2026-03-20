import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { AboutComponent } from "../about/about.component";
import { ExperienceComponent } from "../experience/experience.component";
import { ContactComponent } from "../contact/contact.component";
import { ProjectsComponent } from "../projects/projects.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, AboutComponent, ExperienceComponent, ContactComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}