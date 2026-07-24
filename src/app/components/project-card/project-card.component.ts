import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../models/portfolio.models';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink],
  templateUrl: './project-card.component.html'
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;
  @Input() compact = false;
}
