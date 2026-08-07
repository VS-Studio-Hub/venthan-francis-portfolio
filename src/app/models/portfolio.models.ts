export interface SocialLink {
  label: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export interface Experience {
  role: string;
  organization: string;
  dates: string;
  priority: 'primary' | 'supporting';
  technologies: string[];
  responsibilities: string[];
}

export interface ProjectFeature {
  label: string;
  status: 'Completed' | 'In Progress' | 'Planned' | 'Confirm';
}

export interface Project {
  slug: string;
  name: string;
  category: 'Full-Stack' | 'Web' | 'Software and Game Development';
  status: string;
  featured: boolean;
  overview: string;
  problemSolved: string;
  role: string;
  features: ProjectFeature[];
  technologies: string[];
  githubUrl: string;
  liveDemoUrl: string;
  screenshot: string;
  screenshotAlt: string;
  details: {
    businessProblem: string;
    goals: string[];
    frontendImplementation: string;
    backendImplementation: string;
    databaseDesign: string;
    authenticationSecurity: string;
    deployment: string;
    challenges: string[];
    solutions: string[];
    whatILearned: string[];
    futureImprovements: string[];
    screenshots: string[];
  };
}

export interface Education {
  school: string;
  program: string;
  result: string;
  dates?: string;
  summary?: string;
  topics?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  completionDate: string;
  credentialUrl: string;
}
