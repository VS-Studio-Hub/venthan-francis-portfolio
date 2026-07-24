import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { Project } from '../../models/portfolio.models';

@Component({
  selector: 'app-project-details',
  imports: [RouterLink],
  templateUrl: './project-details.component.html'
})
export class ProjectDetailsComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  readonly data = inject(PortfolioDataService);
  project?: Project;

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.project = this.data.getProjectBySlug(slug);

    if (this.project) {
      this.title.setTitle(`${this.project.name} | Venthan Francis`);
      this.meta.updateTag({
        name: 'description',
        content: `${this.project.name}: ${this.project.overview}`
      });
    }
  }
}
