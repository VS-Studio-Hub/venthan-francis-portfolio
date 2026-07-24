import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'Venthan Francis | Full-Stack Developer in Toronto'
  },
  {
    path: 'projects/:slug',
    component: ProjectDetailsComponent,
    title: 'Project Details | Venthan Francis'
  },
  {
    path: '**',
    component: NotFoundPageComponent,
    title: 'Page Not Found | Venthan Francis'
  }
];
