import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html'
})
export class EducationComponent {
  readonly data = inject(PortfolioDataService);
}
