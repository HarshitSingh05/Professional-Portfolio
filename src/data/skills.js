export const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Modern, reactive user interfaces built with performance, reusability, and accessibility in mind.',
    icon: 'fa-solid fa-code',
    accent: 'purple',
    skills: [
      { name: 'React 19 / Next.js', icon: 'fa-brands fa-react', color: '#61DAFB' },
      { name: 'Vue 3 / Nuxt 3', icon: 'fa-brands fa-vuejs', color: '#42B883' },
      { name: 'JavaScript (ES6+)', icon: 'fa-brands fa-js', color: '#F7DF1E' },
      { name: 'Tailwind CSS', icon: 'fa-solid fa-wind', color: '#38BDF8' },
      { name: 'Pinia / State Mgmt', icon: 'fa-solid fa-diagram-project', color: '#FCD34D' },
      { name: 'HTML5 & Semantic UI', icon: 'fa-brands fa-html5', color: '#E34F26' },
      { name: 'CSS3 & Responsive Design', icon: 'fa-brands fa-css3-alt', color: '#1572B6' },
    ]
  },
  {
    id: 'backend',
    title: 'Backend Engineering',
    description: 'Robust server architecture, RESTful/JSON:API microservices, authentication, and enterprise business logic.',
    icon: 'fa-solid fa-server',
    accent: 'mint',
    skills: [
      { name: 'Laravel / PHP', icon: 'fa-brands fa-laravel', color: '#FF2D20' },
      { name: 'REST & JSON:API', icon: 'fa-solid fa-network-wired', color: '#10B981' },
      { name: 'Java / Spring Boot', icon: 'fa-brands fa-java', color: '#007396' },
      { name: 'Spring MVC & Security', icon: 'fa-solid fa-shield-halved', color: '#6DB33F' },
      { name: 'Hibernate / JPA', icon: 'fa-solid fa-database', color: '#59666C' },
      { name: 'Multi-Tenant Logic', icon: 'fa-solid fa-building-user', color: '#A855F7' }
    ]
  },
  {
    id: 'database',
    title: 'Database & Architecture',
    description: 'Relational data modeling, query optimization, data isolation, and transactional integrity.',
    icon: 'fa-solid fa-database',
    accent: 'purple',
    skills: [
      { name: 'MySQL', icon: 'fa-solid fa-database', color: '#4479A1' },
      { name: 'MariaDB', icon: 'fa-solid fa-server', color: '#C0765A' },
      { name: 'Query Optimization (90% cut)', icon: 'fa-solid fa-bolt', color: '#F59E0B' },
      { name: 'Database Migrations', icon: 'fa-solid fa-arrow-right-arrow-left', color: '#8B5CF6' },
      { name: 'Multi-Tenant Isolation', icon: 'fa-solid fa-lock', color: '#10B981' }
    ]
  },
  {
    id: 'ai-tools',
    title: 'AI Integration & Tools',
    description: 'Generative AI workflows, developer tooling, testing, and modern deployment environments.',
    icon: 'fa-solid fa-wand-magic-sparkles',
    accent: 'mint',
    skills: [
      { name: 'Google Gemini API / LLM', icon: 'fa-solid fa-brain', color: '#8B5CF6' },
      { name: 'Prompt Engineering', icon: 'fa-solid fa-terminal', color: '#10B981' },
      { name: 'Git & GitHub', icon: 'fa-brands fa-github', color: '#FFFFFF' },
      { name: 'Postman API Testing', icon: 'fa-solid fa-paper-plane', color: '#FF6C37' },
      { name: 'VS Code & Tooling', icon: 'fa-solid fa-laptop-code', color: '#007ACC' },
      { name: 'CI/CD & Render', icon: 'fa-solid fa-cloud-arrow-up', color: '#46E3B7' }
    ]
  }
]
