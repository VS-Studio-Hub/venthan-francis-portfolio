import { Injectable } from '@angular/core';
import { certifications, education, experiences, profilePhotoPath, projects, resumePath, skillCategories, socialLinks } from '../data/portfolio.data';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {
  readonly resumePath = resumePath;
  readonly profilePhotoPath = profilePhotoPath;
  readonly socialLinks = socialLinks;
  readonly skillCategories = skillCategories;
  readonly experiences = experiences;
  readonly projects = projects;
  readonly education = education;
  readonly certifications = certifications;

  getProjectBySlug(slug: string) {
    return this.projects.find((project) => project.slug === slug);
  }
}
