import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { AboutComponent } from '../../components/about/about.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { EducationComponent } from '../../components/education/education.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { SkillsComponent } from '../../components/skills/skills.component';

@Component({
  selector: 'app-home-page',
  imports: [
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent,
    ContactComponent
  ],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Venthan Francis | Full-Stack Developer in Toronto');
    this.meta.updateTag({
      name: 'description',
      content:
        'Venthan Francis is a Full-Stack Developer in Toronto, Canada focused on Java, Spring Boot, Angular, REST APIs, SQL, Docker, and AWS.'
    });
  }
}
