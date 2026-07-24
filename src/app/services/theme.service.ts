import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  readonly theme = signal<ThemeMode>('dark');

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject(PLATFORM_ID) private readonly platformId: object
  ) {
    this.initializeTheme();
  }

  toggleTheme(): void {
    const nextTheme: ThemeMode = this.theme() === 'light' ? 'dark' : 'light';
    this.setTheme(nextTheme);
  }

  setTheme(theme: ThemeMode): void {
    this.theme.set(theme);
    this.document.documentElement.setAttribute('data-theme', theme);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('portfolio-theme', theme);
    }
  }

  private initializeTheme(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.setTheme('dark');
      return;
    }

    const savedTheme = localStorage.getItem('portfolio-theme') as ThemeMode | null;
    this.setTheme(savedTheme ?? 'dark');
  }
}
