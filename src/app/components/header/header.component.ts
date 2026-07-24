import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnDestroy, OnInit, PLATFORM_ID, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { ThemeService } from '../../services/theme.service';

interface NavItem {
  label: string;
  sectionId: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);
  readonly data = inject(PortfolioDataService);
  readonly themeService = inject(ThemeService);

  readonly isMenuOpen = signal(false);
  readonly activeSection = signal('home');

  readonly navItems: NavItem[] = [
    { label: 'Home', sectionId: 'home' },
    { label: 'About', sectionId: 'about' },
    { label: 'Skills', sectionId: 'skills' },
    { label: 'Experience', sectionId: 'experience' },
    { label: 'Projects', sectionId: 'projects' },
    { label: 'Contact', sectionId: 'contact' }
  ];

  private observer?: IntersectionObserver;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId) || typeof IntersectionObserver === 'undefined') {
      return;
    }

    setTimeout(() => this.observeSections());
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  @HostListener('window:scroll')
  closeMenuOnScroll(): void {
    if (this.isMenuOpen()) {
      this.isMenuOpen.set(false);
    }
  }

  navigateToSection(sectionId: string): void {
    this.isMenuOpen.set(false);

    if (this.router.url.split('#')[0] !== '/') {
      void this.router.navigate(['/']).then(() => this.scrollToSection(sectionId));
      return;
    }

    this.scrollToSection(sectionId);
  }

  private scrollToSection(sectionId: string): void {
    const target = document.getElementById(sectionId);
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  private observeSections(): void {
    const sections = this.navItems
      .map((item) => document.getElementById(item.sectionId))
      .filter((section): section is HTMLElement => Boolean(section));

    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          this.activeSection.set(visible.target.id);
        }
      },
      {
        rootMargin: '-35% 0px -55% 0px',
        threshold: [0.15, 0.3, 0.6]
      }
    );

    sections.forEach((section) => this.observer?.observe(section));
  }
}
