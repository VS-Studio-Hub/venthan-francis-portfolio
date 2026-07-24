import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html'
})
export class CertificationsComponent {
  readonly data = inject(PortfolioDataService);
}
