export const projects = [
  {
    id: 'multi-tenant-hrms',
    title: 'Multi-Tenant HRMS SaaS Platform',
    category: 'Enterprise SaaS',
    featured: true,
    tagline: 'Enterprise-grade Human Resource Management System with multi-tenant data isolation and scalable modular architecture.',
    description:
      'A comprehensive production HRMS SaaS platform engineered to manage the complete employee lifecycle across diverse organizations. Features employee records, leave administration, holiday calendars, automated time tracking, and multi-tier payroll workflows.',
    features: [
      'Strict multi-tenant architecture with tenant-scoped validation to eliminate cross-tenant data leakage',
      'Ops Dashboard enabling tenant onboarding, plan configuration, and live per-tenant workforce metrics',
      'Automated subscription lifecycle ("Due" status before expiry, 3-day grace period, automated tenant suspension)',
      'Severity-tiered ticketing workflow (Critical, High, Medium, Low) with direct admin response threads',
      'Localized AI content generation module powered by Google Gemini API and custom prompt templates'
    ],
    technologies: ['Nuxt 3', 'Vue 3', 'Pinia', 'React', 'Next.js', 'Laravel', 'JSON:API', 'MySQL'],
    icon: 'fa-solid fa-building-user',
    accent: 'purple',
    githubUrl: null, // Private / Enterprise production codebase
    liveUrl: null,
    isConfidential: true,
    confidentialNotice: 'Enterprise production codebase for Appfoster multi-tenant HRMS. Direct source code is proprietary.',
    metrics: [
      { label: 'Latency Reduction', value: '90%' },
      { label: 'Architecture', value: 'Multi-Tenant' },
      { label: 'Role', value: 'Core Developer' }
    ]
  },
  {
    id: 'profile-completeness-system',
    title: 'Employee Profile Completeness & Analytics System',
    category: 'HR Tech & Analytics',
    featured: true,
    tagline: 'Organization-wide intelligence engine tracking profile integrity, missing fields, and automated reminder dispatch.',
    description:
      'An enterprise reporting and auditing subsystem developed for HR administrators to identify missing employee information across departments, visualize completion percentages, and execute automated compliance workflows.',
    features: [
      'Dynamic field audit algorithm detecting incomplete contact, identification, and compliance records',
      'Organization-wide data completeness reporting with department and role-based filtering',
      'High-performance multi-column sorting and server-side pagination with sub-second response times',
      'Export engines generating formatted Excel spreadsheets and PDF audit summaries',
      'Automated bulk email notification system with dispatch tracking and "last reminder sent" timestamps',
      'Database query optimization slashing response times by 90% on high-volume employee datasets'
    ],
    technologies: ['Nuxt 3', 'Vue 3', 'Pinia', 'Laravel', 'MySQL', 'JSON:API'],
    icon: 'fa-solid fa-chart-pie',
    accent: 'mint',
    githubUrl: null,
    liveUrl: null,
    isConfidential: true,
    confidentialNotice: 'Enterprise production module within the Appfoster HRMS suite.',
    metrics: [
      { label: 'Query Speedup', value: '10x Faster' },
      { label: 'Export Formats', value: 'PDF & Excel' },
      { label: 'Automated Reminders', value: 'Built-in' }
    ]
  },
  {
    id: 'ecommerce-management-system',
    title: 'E-Commerce Management System',
    category: 'Backend Architecture',
    featured: false,
    tagline: 'Production-ready e-commerce backend platform built with Java, Spring Boot, and robust role-based security.',
    description:
      'A modular e-commerce backend handling product catalogs, secure role-based customer and administrator authentication, multi-file image uploads, transactional order workflows, and automated email dispatches.',
    features: [
      'Role-based access control (RBAC) with Spring Security for administrators and shoppers',
      'Product catalog CRUD management with secure multi-part image upload handling',
      'Transactional order placement, order status lifecycle, and automated invoice email delivery',
      'Secure password hashing, token validation, and automated password reset workflows',
      'Layered architecture (Controller, Service, Repository) with Hibernate/JPA ORM persistence',
      'Automated CI/CD pipeline triggering instant build and deployment to Render on GitHub commits'
    ],
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate/JPA', 'MySQL', 'Render'],
    icon: 'fa-solid fa-cart-shopping',
    accent: 'purple',
    githubUrl: 'https://github.com/harshitkumar', // Configurable
    liveUrl: null,
    isConfidential: false,
    metrics: [
      { label: 'Architecture', value: 'Layered MVC' },
      { label: 'Security', value: 'Spring RBAC' },
      { label: 'Deployment', value: 'Render CI/CD' }
    ]
  },
  {
    id: 'rest-job-portal',
    title: 'REST-Based Job Portal Backend Engine',
    category: 'REST API',
    featured: false,
    tagline: 'High-throughput recruitment API engine facilitating job listings, candidate tracking, and search indexing.',
    description:
      'A clean, highly structured RESTful backend service engineered for fast job searching, application processing, and recruiter management with strict input validation and relational database design.',
    features: [
      'Comprehensive RESTful API endpoints for job posting, modification, deletion, and candidate retrieval',
      'Multi-parameter search filters across location, experience levels, and technology tags',
      'Strict layered architectural separation ensuring testability and loose coupling',
      'Extensive Postman test collection with assertions for edge cases and input validation',
      'Optimized MySQL relational schema with indexing on frequently queried search columns'
    ],
    technologies: ['Java', 'Spring Boot', 'Spring MVC', 'Hibernate/JPA', 'MySQL', 'Postman'],
    icon: 'fa-solid fa-briefcase',
    accent: 'mint',
    githubUrl: 'https://github.com/harshitkumar',
    liveUrl: null,
    isConfidential: false,
    metrics: [
      { label: 'API Format', value: 'RESTful' },
      { label: 'Test Suite', value: 'Postman Verified' },
      { label: 'DB Engine', value: 'MySQL' }
    ]
  },
  {
    id: 'developer-portfolio',
    title: 'Personal Developer Portfolio',
    category: 'Frontend Engineering',
    featured: true,
    tagline: 'Modern, high-performance developer portfolio built with React 19, Tailwind CSS 4, and Motion animations.',
    description:
      'The modern single-page portfolio you are viewing right now, engineered from scratch without templates. Demonstrates clean UI architecture, dark/light theme persistence, scroll-linked animations, and integrated contact workflows.',
    features: [
      'Built with React 19 and modern JavaScript ES6+ without unnecessary bloated libraries',
      'Tailwind CSS 4 styling featuring a bespoke charcoal, obsidian, purple, and mint palette',
      'Smooth scroll reveals and subtle micro-interactions powered by Framer Motion',
      'Dark and light mode system persisted in localStorage with zero flicker',
      'Production-ready EmailJS form validation with automated fallback to direct email',
      '100% responsive across mobile, tablet, and ultra-wide screens with accessible semantics'
    ],
    technologies: ['React 19', 'JavaScript', 'Vite', 'Tailwind CSS 4', 'Motion', 'EmailJS'],
    icon: 'fa-solid fa-laptop-code',
    accent: 'purple',
    githubUrl: 'https://github.com/harshitkumar/harshit-kumar-portfolio',
    liveUrl: '#',
    isConfidential: false,
    metrics: [
      { label: 'React Version', value: 'React 19' },
      { label: 'Performance', value: '60 FPS' },
      { label: 'Accessibility', value: 'WCAG Compliant' }
    ]
  }
]
