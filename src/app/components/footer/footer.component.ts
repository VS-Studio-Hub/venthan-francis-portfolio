import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  readonly data = inject(PortfolioDataService);
  readonly year = new Date().getFullYear();

  backToTop(): void {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  }
}
