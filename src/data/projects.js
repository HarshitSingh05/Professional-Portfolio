export const projects = [
  {
    id: 'multi-tenant-hrms',
    title: 'Multi-Tenant HRMS SaaS Platform',
    category: 'Enterprise SaaS',
    featured: true,
    tagline: 'Enterprise-grade Human Resource Management System featuring employee management, data completeness audit reporting, and automated subscriptions.',
    description:
      'A comprehensive production multi-tenant HRMS SaaS platform engineered at Appfoster to manage the complete employee lifecycle across diverse organizations. Delivers end-to-end features spanning employee records, leave administration, holiday calendars, automated time tracking, payroll workflows, and organization-wide data completeness reporting.',
    features: [
      'Built an organization-wide data completeness report: missing-field detection, filtering, sorting, pagination, Excel/PDF export, and bulk reminder notifications with dispatch tracking',
      'Strict multi-tenant architecture with tenant-scoped validation to block unauthorized cross-tenant operations and protect organizational data',
      'HRMS Operations Dashboard: enables editing tenant details, plan allocation, and monitoring per-tenant employee metrics',
      'Automated subscription lifecycle: assigns "Due" badge nearing plan expiry, "Overdue" 3-day grace period, followed by automatic tenant suspension',
      'Support ticketing pipeline: tenants submit issues with severity levels (Critical/High/Medium/Low) triaged directly in the Ops dashboard',
      'Localized AI content-generation feature using Vue/Nuxt, Laravel, and Gemini API LLM with key-based prompt templating auto-populating fields in preferred languages',
      'Built reusable Vue components and optimized database queries, reducing response time by 90% on Employee Working Day Reports'
    ],
    technologies: ['Nuxt 3', 'Vue 3', 'Pinia', 'React', 'Next.js', 'Laravel', 'JSON:API', 'MySQL', 'Gemini API'],
    icon: 'fa-solid fa-building-user',
    accent: 'purple',
    githubUrl: null,
    liveUrl: null,
    isConfidential: true,
    confidentialNotice: 'Enterprise production codebase for Appfoster multi-tenant HRMS. Direct source code is proprietary.',
    metrics: [
      { label: 'Latency Reduction', value: '90%' },
      { label: 'Completeness Audit', value: 'Excel & PDF' },
      { label: 'Architecture', value: 'Multi-Tenant' }
    ]
  },
  {
    id: 'ecommerce-management-system',
    title: 'E-Commerce Management System',
    category: 'Backend Architecture',
    featured: true,
    tagline: 'Scalable e-commerce backend platform built with Java, Spring Boot, Spring Security, and Render CI/CD auto-deployment.',
    description:
      'A robust, modular e-commerce backend built with Java and Spring Boot ecosystem. Implements role-based access control, product CRUD with multi-image upload handling, administrative user management, transactional order processing, automated email notifications, and secure password reset workflows.',
    features: [
      'Role-based authentication and authorization (RBAC) using Spring Security for shoppers and administrators',
      'Product catalog CRUD management with secure multi-part image upload handling',
      'Transactional order placement, order status lifecycle tracking, and automated email order confirmations',
      'Secure password hashing, token validation, and automated password reset workflows',
      'Layered architecture (Controller, Service, Repository) with Hibernate/JPA ORM persistence',
      'Automated CI/CD pipeline triggering instant build and deployment to Render on GitHub commits'
    ],
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate/JPA', 'MySQL', 'Render'],
    icon: 'fa-solid fa-cart-shopping',
    accent: 'mint',
    githubUrl: 'https://github.com/HarshitSingh05',
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
    title: 'REST-Based Job Portal Backend System',
    category: 'REST API & Services',
    featured: true,
    tagline: 'High-throughput recruitment REST API engine facilitating job listings, candidate tracking, and multi-criteria search.',
    description:
      'A clean, highly structured RESTful backend service engineered with Java, Spring Boot, and MySQL. Features comprehensive endpoints for job-listing CRUD, multi-parameter search, and candidate application workflows tested rigorously with Postman.',
    features: [
      'Developed REST APIs for job-listing CRUD and search operations using layered architecture',
      'Multi-parameter search filters across location, experience levels, and technology tags',
      'Strict layered separation of concerns ensuring testability, maintainability, and loose coupling',
      'Comprehensive Postman test collection with assertions for edge cases and input validation',
      'Optimized MySQL relational schema with indexing on frequently queried search columns'
    ],
    technologies: ['Java', 'Spring Boot', 'Hibernate/JPA', 'MySQL', 'Postman'],
    icon: 'fa-solid fa-briefcase',
    accent: 'purple',
    githubUrl: 'https://github.com/HarshitSingh05',
    liveUrl: null,
    isConfidential: false,
    metrics: [
      { label: 'API Architecture', value: 'Layered REST' },
      { label: 'Test Suite', value: 'Postman Verified' },
      { label: 'DB Engine', value: 'MySQL' }
    ]
  },
  {
    id: 'developer-portfolio',
    title: 'Personal Developer Portfolio',
    category: 'Frontend Engineering',
    featured: false,
    tagline: 'Modern, high-performance developer portfolio built with React 19, Tailwind CSS 4, and Motion animations.',
    description:
      'The modern single-page portfolio you are viewing right now, engineered with React 19 and modern JavaScript. Features dark/light theme persistence, custom obsidian and purple/mint design tokens, scroll reveals, validated contact form, and direct resume downloads.',
    features: [
      'Built with React 19 and modern JavaScript ES6+ without unnecessary bloated libraries',
      'Tailwind CSS 4 styling featuring a bespoke charcoal, obsidian, purple, and mint palette',
      'Smooth scroll reveals and subtle micro-interactions powered by Motion',
      'Dark and light mode system persisted in localStorage with zero flicker',
      'Production-ready EmailJS form validation with automated fallback to direct email',
      'Direct resume download integrated into the Vite asset bundle pipeline'
    ],
    technologies: ['React 19', 'JavaScript', 'Vite', 'Tailwind CSS 4', 'Motion', 'EmailJS'],
    icon: 'fa-solid fa-laptop-code',
    accent: 'mint',
    githubUrl: 'https://github.com/HarshitSingh05/harshit-kumar-portfolio',
    liveUrl: '#',
    isConfidential: false,
    metrics: [
      { label: 'React Version', value: 'React 19' },
      { label: 'Performance', value: '60 FPS' },
      { label: 'Accessibility', value: 'WCAG Compliant' }
    ]
  }
]
