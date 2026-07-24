import { Component, inject } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  readonly data = inject(PortfolioDataService);
  readonly featuredProjects = this.data.projects.filter((project) => project.featured);
}
