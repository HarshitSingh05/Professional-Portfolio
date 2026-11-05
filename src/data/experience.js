export const experiences = [
  {
    id: 'appfoster',
    role: 'Associate Software Engineer',
    company: 'Appfoster',
    location: 'Noida, Uttar Pradesh',
    duration: 'April 2026 – Present',
    badge: 'Current Role',
    type: 'Full-time',
    summary:
      'Core contributor to a high-scale, production multi-tenant HRMS SaaS platform serving diverse enterprise organizations, delivering full-stack features from requirement analysis to production release.',
    keyPoints: [
      'Engineered and maintain a production multi-tenant HRMS SaaS platform (Nuxt 3, Vue 3, Pinia, React, Next.js, Laravel, JSON:API, MySQL/MariaDB) spanning employee management, leave, holidays, attendance, time tracking, and payroll.',
      'Architected an organization-wide data completeness report featuring dynamic missing-field detection, multi-column sorting, granular filtering, server-side pagination, PDF/Excel export, and automated reminder workflows with dispatch tracking.',
      'Developed tenant management modules in the HRMS operations dashboard using React, Next.js, and Laravel JSON:API, enabling tenant provisioning, detail administration, and per-tenant workforce metrics.',
      'Implemented an automated subscription lifecycle: auto-assigns "Due" badge nearing expiration, "Overdue" grace period for 3 days, followed by automated tenant account suspension.',
      'Engineered a complete support ticketing pipeline: tenant issue submission with severity levels (Critical/High/Medium/Low), connected to the Ops dashboard for triaging, threaded replies, and acknowledgment.',
      'Pioneered a localized AI content-generation module integrating Vue/Nuxt, Laravel, and Gemini API LLM using key-based prompt templating that auto-populates localized form fields in users\' preferred languages.',
      'Standardized reusable Vue component libraries eliminating code duplication and optimized complex database queries, slashing API latency by 90% on the Employee Working Day Report.',
      'Enforced strict tenant-scoped data isolation and validation rules, effectively preventing cross-tenant leakage and securing organizational data.',
      'Owned complete feature lifecycles: requirement decomposition, frontend and backend implementation, debugging, PR reviews, and coordinated production deployments.'
    ],
    technologies: [
      'Vue 3',
      'Nuxt 3',
      'Pinia',
      'React',
      'Next.js',
      'Laravel',
      'JSON:API',
      'MySQL',
      'MariaDB',
      'Gemini API',
      'Git'
    ]
  },
  {
    id: 'anyintech',
    role: 'Backend Developer Intern',
    company: 'Anyintech',
    location: 'Bengaluru, Karnataka',
    duration: 'Jan 2025 – Jul 2025',
    badge: 'Internship',
    type: 'Internship',
    summary:
      'Built layered backend services, enterprise REST APIs, and automated CI/CD deployments using Java and Spring Boot ecosystem.',
    keyPoints: [
      'Designed and developed enterprise backend modules in Java, Spring Boot, Spring MVC, Hibernate/JPA, and MySQL using clean layered architecture (Controller, Service, Repository).',
      'Engineered core business features including multi-attribute product category filtering, full-text search, and multi-file image upload handling.',
      'Established automated GitHub-to-Render continuous integration and continuous deployment (CI/CD) pipelines for seamless builds and zero-downtime releases.',
      'Wrote comprehensive REST API endpoint tests and performed rigorous validation using Postman.'
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'Spring MVC',
      'Hibernate',
      'MySQL',
      'REST APIs',
      'Render',
      'Git'
    ]
  }
]
