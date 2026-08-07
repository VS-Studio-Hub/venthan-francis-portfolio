import {
  Certification,
  Education,
  Experience,
  Project,
  SkillCategory,
  SocialLink
} from '../models/portfolio.models';

export const resumePath = 'assets/resume/venthan-francis-resume.pdf';
export const profilePhotoPath = 'assets/images/venthan-francis-profile.png?v=2';

export const socialLinks: SocialLink[] = [
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/venthan-francis',
    icon: 'bi-linkedin',
    ariaLabel: 'Visit Venthan Francis on LinkedIn'
  },
  {
    label: 'GitHub',
    url: 'https://github.com/VS-Studio-Hub',
    icon: 'bi-github',
    ariaLabel: 'Visit Venthan Francis on GitHub'
  },
  {
    label: 'Email',
    url: 'mailto:venthanf@gmail.com',
    icon: 'bi-envelope-at',
    ariaLabel: 'Email Venthan Francis'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    name: 'Programming Languages',
    icon: 'bi-code-slash',
    skills: ['Java', 'Python', 'TypeScript', 'JavaScript', 'SQL', 'C++', 'C#']
  },
  {
    name: 'Frontend',
    icon: 'bi-window-sidebar',
    skills: ['Angular', 'HTML', 'CSS', 'Bootstrap', 'Responsive Web Design']
  },
  {
    name: 'Backend',
    icon: 'bi-hdd-network',
    skills: ['Spring Boot', 'REST APIs', 'Maven', 'Node.js']
  },
  {
    name: 'Databases',
    icon: 'bi-database',
    skills: ['MySQL', 'PostgreSQL', 'SQLite']
  },
  {
    name: 'Cloud and DevOps',
    icon: 'bi-cloud-check',
    skills: ['AWS', 'Docker', 'GitHub Actions', 'Jenkins', 'CI/CD']
  },
  {
    name: 'Testing and Tools',
    icon: 'bi-tools',
    skills: ['JUnit', 'Mockito', 'Postman', 'Git', 'GitHub', 'Jira', 'Agile', 'Scrum']
  }
];

export const experiences: Experience[] = [
  {
    role: 'Full Stack Engineer',
    organization: 'MJAV Traders - Freelance - Remote',
    dates: 'May 2025 - Present',
    priority: 'primary',
    technologies: ['Angular', 'Bootstrap', 'Spring Boot', 'Spring Security', 'MySQL', 'AWS', 'GitHub Actions'],
    responsibilities: [
      'Built and deployed a B2B wholesale platform with customer and admin portals.',
      'Developed secure Spring Boot APIs for products, enquiries, quotations, orders, invoices, and users.',
      'Implemented JWT authentication, BCrypt password hashing, and role-based access control.',
      'Deployed the frontend, backend, database, and automated delivery workflow on AWS.'
    ]
  },
  {
    role: 'Full Stack Engineer',
    organization: 'Grace Rubber Bands and Eco Products and Exports - In-person',
    dates: 'Jun 2022 - Jul 2024',
    priority: 'primary',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Git'],
    responsibilities: [
      'Built and maintained a B2B wholesale platform for product, customer, and enquiry workflows.',
      'Created responsive pages, backend CRUD operations, and SQL workflows for business records.',
      'Supported authentication, role-based access, testing, deployment, and ongoing updates.',
      'Worked in person with the business team to improve daily workflows.'
    ]
  },
  {
    role: 'Interface Programmer',
    organization: 'Crystallized Games Inc.',
    dates: 'Mar 2026 - Apr 2026',
    priority: 'supporting',
    technologies: ['Unreal Engine 5', 'C++', 'Blueprints', 'Perforce', 'Agile'],
    responsibilities: [
      'Developed modular Unreal Engine UI systems using C++, Blueprints, and OOP principles.',
      'Built documented gameplay interface code within Agile sprint cycles.',
      'Collaborated with designers and technical leads during sprint planning, stand-ups, reviews, and implementation discussions.',
      'Used Perforce branch workflows to support team development.'
    ]
  }
];

export const projects: Project[] = [
  {
    slug: 'mjav-rubber-band-b2b-wholesale-platform',
    name: 'MJAV B2B Wholesale Platform',
    category: 'Full-Stack',
    status: 'Completed full-stack platform',
    featured: true,
    overview:
      'A B2B wholesale platform with product catalogue, enquiry flow, customer portal, and admin panel.',
    problemSolved:
      'Helps the business manage wholesale product discovery, customer enquiries, quotations, orders, invoices, support messages, and role-based customer/admin workflows from one platform.',
    role: 'Freelance Full Stack Engineer responsible for frontend implementation, backend REST APIs, security, database workflows, deployment, and automated delivery.',
    features: [
      { label: 'Product catalogue', status: 'Completed' },
      { label: 'Enquiry and quotation flow', status: 'Completed' },
      { label: 'Customer portal', status: 'Completed' },
      { label: 'Admin panel', status: 'Completed' },
      { label: 'Orders and invoices', status: 'Completed' },
      { label: 'Support messages', status: 'Completed' },
      { label: 'Spring Security and JWT authentication', status: 'Completed' },
      { label: 'Role-based access control', status: 'Completed' },
      { label: 'Customer registration approval', status: 'Completed' },
      { label: 'Automated deployment with GitHub Actions', status: 'Completed' }
    ],
    technologies: ['Angular', 'Bootstrap', 'Spring Boot', 'Spring Security', 'Java', 'MySQL', 'AWS', 'GitHub Actions'],
    githubUrl: 'https://github.com/VS-Studio-Hub/mjav-rubber-band-company',
    liveDemoUrl: 'https://mjavrubberbands.com',
    screenshot: 'assets/images/project-mjav-b2b-home.png',
    screenshotAlt: 'Home page of the MJAV B2B Wholesale Platform showing the hero section and product catalogue preview',
    details: {
      businessProblem:
        'A rubber band manufacturing company needed a professional wholesale platform where public visitors could discover products and approved customers could manage quotations, orders, invoices, and support requests securely.',
      goals: [
        'Create a production-ready B2B wholesale platform, not just a simple website.',
        'Separate public product discovery from authenticated customer workflows.',
        'Give administrators secure tools for products, enquiries, quotations, orders, invoices, support messages, and user management.',
        'Deploy the frontend and backend on AWS with automated deployment support.'
      ],
      frontendImplementation:
        'Built Angular and Bootstrap pages for public content, product catalogue, enquiry flow, customer portal, and admin panel with responsive layouts for desktop and mobile users.',
      backendImplementation:
        'Developed Spring Boot REST APIs using Java, JPA, and MySQL for products, enquiries, quotations, orders, invoices, support messages, and user management.',
      databaseDesign:
        'Used MySQL through Amazon RDS to support customer accounts, products, enquiries, quotations, orders, invoices, support messages, and role-based user data.',
      authenticationSecurity:
        'Implemented Spring Security, JWT authentication, BCrypt password hashing, role-based access control, customer registration approval, forgot-password reset flow, and customer data isolation.',
      deployment:
        'Deployed the frontend on AWS S3 and CloudFront with a custom domain, and deployed the backend on AWS Elastic Beanstalk connected to Amazon RDS MySQL. Configured GitHub Actions for automated deployment.',
      challenges: [
        'Separating public website flows from authenticated admin and customer workflows.',
        'Keeping customer quotations, orders, invoices, and support history isolated by role.',
        'Coordinating frontend, backend, database, and AWS deployment configuration.'
      ],
      solutions: [
        'Built separate Admin and Customer portals with role-aware access controls.',
        'Used Spring Security, JWT, and BCrypt to protect authentication and authorization workflows.',
        'Configured AWS S3, CloudFront, Elastic Beanstalk, Amazon RDS MySQL, and GitHub Actions for deployment.'
      ],
      whatILearned: [
        'Spring Security and JWT authentication',
        'Role-based access control',
        'Customer data isolation',
        'AWS frontend and backend deployment',
        'GitHub Actions deployment workflows'
      ],
      futureImprovements: ['Reporting dashboard', 'Advanced quotation analytics', 'Improved notification workflows', 'Expanded admin audit history'],
      screenshots: [
        'assets/images/project-mjav-b2b-products.png',
        'assets/images/project-mjav-b2b-enquiry.png',
        'assets/images/project-mjav-b2b-admin.png',
        'assets/images/project-mjav-b2b-customer-portal.png'
      ]
    }
  },
  {
    slug: 'mjav-traders-business-application',
    name: 'MJAV Traders Business Application',
    category: 'Full-Stack',
    status: 'Freelance full-stack project',
    featured: false,
    overview:
      'A business web application focused on product, customer, inventory, and transaction workflows.',
    problemSolved:
      'Improves day-to-day business operations by organizing product records, customer information, stock movement, and transaction data.',
    role: 'Freelance full-stack developer responsible for backend workflows, database operations, responsive UI, and deployment support.',
    features: [
      { label: 'Product management', status: 'Completed' },
      { label: 'Customer management', status: 'Completed' },
      { label: 'Inventory management', status: 'Completed' },
      { label: 'Transaction workflows', status: 'Completed' },
      { label: 'REST API integration', status: 'Completed' },
      { label: 'Cloud deployment', status: 'Confirm' }
    ],
    technologies: ['Spring Boot', 'MySQL', 'REST APIs', 'HTML', 'CSS', 'JavaScript', 'AWS'],
    githubUrl: '[Add GitHub URL]',
    liveDemoUrl: '[Add live demo URL]',
    screenshot: 'assets/images/project-mjav.svg',
    screenshotAlt: 'Placeholder screenshot for the MJAV Traders Business Application project',
    details: {
      businessProblem:
        'The business needed structured workflows for products, customers, inventory, and transactions.',
      goals: [
        'Create reliable CRUD workflows.',
        'Build responsive screens for everyday business use.',
        'Connect frontend workflows to REST APIs and SQL database operations.'
      ],
      frontendImplementation:
        'Responsive HTML, CSS, and JavaScript screens for business workflows and data entry.',
      backendImplementation:
        'Spring Boot REST APIs for product, customer, inventory, and transaction operations.',
      databaseDesign:
        'MySQL tables for business entities and transaction records. [Add database diagram]',
      authenticationSecurity:
        '[Confirm whether authentication and role-based access were included]',
      deployment: 'AWS deployment and cloud configuration support. [Add hosting details]',
      challenges: ['[Add challenge]', '[Add challenge]'],
      solutions: ['[Add solution]', '[Add solution]'],
      whatILearned: ['REST workflow design', 'SQL CRUD operations', 'Deployment preparation'],
      futureImprovements: ['Reporting dashboard', 'Role permissions', 'Automated deployment pipeline'],
      screenshots: ['[Add project screenshot]', '[Add API screenshot]', '[Add database diagram]']
    }
  },
  {
    slug: 'wedding-invitation-website',
    name: 'Wedding Invitation Website',
    category: 'Web',
    status: 'Freelance web project',
    featured: true,
    overview:
      'A responsive static wedding invitation site with a countdown timer, couple profiles, love story timeline, photo gallery, and venue details on Google Maps.',
    problemSolved:
      'Gives guests a single mobile-friendly place for event details, venue directions, a countdown to the big day, and the couple\'s story, with no backend or database required.',
    role: 'Freelance web developer responsible for responsive pages, UI behavior, and guest-facing features.',
    features: [
      { label: 'Hero with save-the-date', status: 'Completed' },
      { label: 'Wedding countdown timer', status: 'Completed' },
      { label: 'Bride and groom profiles', status: 'Completed' },
      { label: 'Love story timeline', status: 'Completed' },
      { label: 'Photo gallery slider', status: 'Completed' },
      { label: 'Wedding details with Google Maps', status: 'Completed' }
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    githubUrl: 'https://github.com/VS-Studio-Hub/wedding-invitation-01',
    liveDemoUrl: 'https://vs-studio-hub.github.io/wedding-invitation-01/',
    screenshot: 'assets/images/project-wedding-home.png',
    screenshotAlt: 'Home page of the wedding invitation website showing the hero section, couple names, and save-the-date button',
    details: {
      businessProblem:
        'Guests needed quick access to event, venue, countdown, and gallery information on mobile devices, without the couple needing to manage a backend or CMS.',
      goals: [
        'Create a warm but usable event website.',
        'Make venue and event-day information easy to find.',
        'Keep the experience responsive across phones, tablets, and desktops.'
      ],
      frontendImplementation:
        'Built with HTML, CSS, and Bootstrap 5, with vanilla JavaScript powering the countdown timer, photo gallery slider, and save-the-date calendar action, styled with Google Fonts (Cormorant Garamond, Great Vibes).',
      backendImplementation:
        'Fully static site with no backend; all wedding and event details are defined directly in the HTML and JavaScript.',
      databaseDesign: 'No database is used; content is hardcoded in the static site.',
      authenticationSecurity: 'No user login required for the public invitation site.',
      deployment: 'Deployed as a static site on GitHub Pages.',
      challenges: [
        'Building a countdown timer and photo gallery slider without a JavaScript framework.',
        'Keeping decorative imagery and fonts lightweight for fast mobile loading.'
      ],
      solutions: [
        'Used vanilla JavaScript for the countdown and carousel logic.',
        'Sized and optimized background and gallery images for mobile performance.'
      ],
      whatILearned: ['Responsive event UI design', 'Vanilla JavaScript interactivity', 'User-friendly mobile workflows'],
      futureImprovements: ['RSVP form', 'Optimized gallery images', 'Custom domain'],
      screenshots: [
        'assets/images/project-wedding-couple.png',
        'assets/images/project-wedding-story.png',
        'assets/images/project-wedding-photos.png'
      ]
    }
  },
  {
    slug: 'galactic-rush',
    name: 'Galactic Rush',
    category: 'Software and Game Development',
    status: '[Add project status]',
    featured: false,
    overview: 'Additional software and game development project. [Add short overview]',
    problemSolved: '[Add problem solved]',
    role: '[Add role]',
    features: [{ label: '[Add main feature]', status: 'Confirm' }],
    technologies: ['[Add technologies]'],
    githubUrl: '[Add GitHub URL]',
    liveDemoUrl: '[Add live demo URL]',
    screenshot: 'assets/images/project-game.svg',
    screenshotAlt: 'Placeholder screenshot for Galactic Rush',
    details: createAdditionalProjectDetails()
  },
  {
    slug: 'nebula-the-space-symphony',
    name: 'Nebula - The Space Symphony',
    category: 'Software and Game Development',
    status: '[Add project status]',
    featured: false,
    overview: 'Additional software and game development project. [Add short overview]',
    problemSolved: '[Add problem solved]',
    role: '[Add role]',
    features: [{ label: '[Add main feature]', status: 'Confirm' }],
    technologies: ['[Add technologies]'],
    githubUrl: '[Add GitHub URL]',
    liveDemoUrl: '[Add live demo URL]',
    screenshot: 'assets/images/project-game.svg',
    screenshotAlt: 'Placeholder screenshot for Nebula - The Space Symphony',
    details: createAdditionalProjectDetails()
  },
  {
    slug: 'day-and-night-the-last-signal',
    name: 'Day and Night - The Last Signal',
    category: 'Software and Game Development',
    status: '[Add project status]',
    featured: false,
    overview: 'Additional software and game development project. [Add short overview]',
    problemSolved: '[Add problem solved]',
    role: '[Add role]',
    features: [{ label: '[Add main feature]', status: 'Confirm' }],
    technologies: ['[Add technologies]'],
    githubUrl: '[Add GitHub URL]',
    liveDemoUrl: '[Add live demo URL]',
    screenshot: 'assets/images/project-game.svg',
    screenshotAlt: 'Placeholder screenshot for Day and Night - The Last Signal',
    details: createAdditionalProjectDetails()
  },
  {
    slug: 'zombie-wave-editor',
    name: 'Zombie Wave Editor',
    category: 'Software and Game Development',
    status: '[Add project status]',
    featured: false,
    overview: 'Additional software and game development project. [Add short overview]',
    problemSolved: '[Add problem solved]',
    role: '[Add role]',
    features: [{ label: '[Add main feature]', status: 'Confirm' }],
    technologies: ['Unreal Engine 5', 'Blueprint programming', 'Data-driven systems'],
    githubUrl: '[Add GitHub URL]',
    liveDemoUrl: '[Add live demo URL]',
    screenshot: 'assets/images/project-game.svg',
    screenshotAlt: 'Placeholder screenshot for Zombie Wave Editor',
    details: createAdditionalProjectDetails()
  },
  {
    slug: 'hidden-village-of-the-peaks',
    name: 'Hidden Village of the Peaks',
    category: 'Software and Game Development',
    status: '[Add project status]',
    featured: false,
    overview: 'Additional software and game development project. [Add short overview]',
    problemSolved: '[Add problem solved]',
    role: '[Add role]',
    features: [{ label: '[Add main feature]', status: 'Confirm' }],
    technologies: ['[Add technologies]'],
    githubUrl: '[Add GitHub URL]',
    liveDemoUrl: '[Add live demo URL]',
    screenshot: 'assets/images/project-game.svg',
    screenshotAlt: 'Placeholder screenshot for Hidden Village of the Peaks',
    details: createAdditionalProjectDetails()
  }
];

export const education: Education[] = [
  {
    school: 'Conestoga College',
    program: 'Game Design',
    result: 'Graduated with Distinction',
    summary:
      'The program strengthened practical programming, game systems, user-interface development, debugging, project delivery, version control, and team collaboration skills.',
    topics: ['Programming', 'Game systems', 'User-interface development', 'Debugging', 'Project development', 'Version control', 'Teamwork']
  },
  {
    school: 'Subbalakshmi Lakshmipathy College of Science',
    program: 'Graphic Design',
    result: "Bachelor's Degree",
    dates: 'Jun 2019 - Mar 2022'
  }
];

export const certifications: Certification[] = [
  {
    name: 'The Ultimate Java Mastery',
    issuer: '[Add issuing organization]',
    completionDate: '[Add completion date]',
    credentialUrl: '[Add credential link]'
  },
  {
    name: 'Complete SQL Mastery',
    issuer: '[Add issuing organization]',
    completionDate: '[Add completion date]',
    credentialUrl: '[Add credential link]'
  },
  {
    name: 'The Ultimate Docker Course',
    issuer: '[Add issuing organization]',
    completionDate: '[Add completion date]',
    credentialUrl: '[Add credential link]'
  },
  {
    name: 'PLC, HMI, and SCADA Automation Training',
    issuer: '[Add issuing organization]',
    completionDate: '[Add completion date]',
    credentialUrl: '[Add credential link]'
  }
];

function createAdditionalProjectDetails(): Project['details'] {
  return {
    businessProblem: '[Add business or technical problem]',
    goals: ['[Add goal]', '[Add goal]'],
    frontendImplementation: '[Add UI or gameplay interface details]',
    backendImplementation: '[Add system implementation details]',
    databaseDesign: '[Add data structure details]',
    authenticationSecurity: '[Confirm whether security features apply]',
    deployment: '[Add deployment or packaging details]',
    challenges: ['[Add challenge]', '[Add challenge]'],
    solutions: ['[Add solution]', '[Add solution]'],
    whatILearned: ['Programming', 'Debugging', 'Problem-solving', 'Team collaboration', 'Version control'],
    futureImprovements: ['[Add future improvement]'],
    screenshots: ['[Add project screenshot]', '[Add demo video]', '[Add project result]']
  };
}
