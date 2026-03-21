// src/app/shared/site.config.ts

export const siteConfig = {
  name: 'Ndongo Medoune Ndiaye',
  title: 'Backend Engineer',
  initials: 'NMN',
  subtitle: 'Java · Spring Boot · Cloud',
  tagline: 'Je conçois des systèmes backend robustes, scalables et prêts pour la production.',
  description:
    'Ingénieur Backend Java/Spring Boot diplômé de l\'ESIEE Paris, spécialisé en conception d\'API REST, architecture microservices et CI/CD. Expérience en environnement industriel (SLB) et projets à fort impact (50k+ utilisateurs). Focus qualité, performance et maintenabilité.',

  location: 'Champs-Sur-Marne, France',
  available: true,
  availableText: 'Disponible dès à présent pour une collaboration en CDI',

  social: {
    email: 'ndongo.m.ndiaye@gmail.com',
    phone: '07 58 64 27 71',
    linkedin: 'https://linkedin.com/in/nmndiaye',
    github: 'https://github.com/Med-fitgeek',
    portfolio: '#',
  },

  skills: [
    { category: 'Backend', items: ['Java 11/21', 'Spring Boot', 'Spring Security', 'REST API', 'JPA/Hibernate', 'J2EE'] },
    { category: 'Architecture', items: ['Clean Architecture', 'Microservices', 'SOLID', 'Design Patterns', 'API Gateway', 'RabbitMQ'] },
    { category: 'Base de données', items: ['PostgreSQL', 'SQL avancé', 'Indexation', 'Redis'] },
    { category: 'DevOps & Cloud', items: ['Docker', 'CI/CD', 'GitHub Actions', 'Azure DevOps', 'SonarQube', 'Railway'] },
    { category: 'Frontend', items: ['Angular', 'TypeScript', 'C# / .NET'] },
  ],

  experience: [
    {
      company: 'SLB (Schlumberger)',
      logo: 'SLB',
      title: 'Ingénieur Logiciel — Stage Fin d\'Études',
      dateRange: 'Fév 2025 — Juil 2025',
      location: 'Clamart, France',
      type: 'Stage',
      color: '#3b82f6',
      bullets: [
        'Conçu une API d\'orchestration pour workflows métiers critiques (.NET / Azure) déployée dans +40 pays',
        'Structuré l\'architecture via Design Patterns (Facade, Factory) — -40% de duplication de code',
        'Automatisé la qualité via tests unitaires & fonctionnels intégrés au pipeline CI/CD Azure DevOps',
        'Travaillé dans un environnement industriel avec exigences élevées de fiabilité et de sécurité',
      ],
    },
    {
      company: 'Ministère de la Santé du Sénégal',
      logo: 'MSS',
      title: 'Ingénieur Backend Java — Stage',
      dateRange: 'Avr 2024 — Août 2024',
      location: 'Dakar, Sénégal',
      type: 'Stage',
      color: '#10b981',
      bullets: [
        'Développé des modules backend Spring Boot pour une plateforme nationale (50 000+ utilisateurs actifs)',
        'Optimisé PostgreSQL (indexation, Hibernate) → +30% de performance sur les requêtes critiques',
        'Conçu un système de stockage multimédia hiérarchisé réduisant le temps d\'accès de 40%',
        'Participé aux cycles Agile (Scrum) et à l\'intégration continue avec l\'équipe produit',
      ],
    },
  ],

  projects: [
    {
      name: 'B-Ready',
      tagline: 'Plateforme SaaS de révision intelligente',
      description:
        'Plateforme de génération de quiz intelligents à partir de contenus (cours, notes, PDF). Backend Spring Boot sécurisé (JWT) avec traitements asynchrones, monitoring SonarQube et déploiement Railway via GitHub Actions.',
      link: 'https://github.com/Med-fitgeek/ia-generated-quiz-app-for-test-preparation',
      year: '2026',
      highlight: true,
      skills: ['Java', 'Spring Boot', 'JWT', 'Angular', 'PostgreSQL', 'GitHub Actions', 'SonarQube'],
    },
    {
      name: 'Votify',
      tagline: 'Système de vote électronique sécurisé',
      description:
        'API Spring Boot garantissant intégrité transactionnelle et cohérence des votes. Authentification via Keycloak (OAuth2/JWT), interface Angular et pipeline CI/CD complet.',
      link: 'https://github.com/Med-fitgeek/springboot-secure-voting-app',
      year: '2025',
      highlight: false,
      skills: ['Java', 'Spring Boot', 'Keycloak', 'OAuth2', 'Angular', 'PostgreSQL', 'Jenkins'],
    },
    {
      name: 'Banking Platform',
      tagline: 'Architecture microservices bancaire',
      description:
        'Architecture microservices complète : API Gateway, communication asynchrone via RabbitMQ, gestion de la résilience et scalabilité, infrastructure conteneurisée avec Docker.',
      link: 'https://github.com/Med-fitgeek',
      year: '2025',
      highlight: false,
      skills: ['Java', 'Spring Boot', 'Microservices', 'RabbitMQ', 'Docker', 'API Gateway'],
    },
    {
      name: 'Interpréteur ANTLR',
      tagline: 'Compilateur pour langage sur-mesure',
      description:
        'Interpréteur complet pour un langage imaginé, avec parseur modulaire ANTLR et couverture de tests à 100%. Analyse lexicale, syntaxique et sémantique.',
      link: 'https://github.com/Med-fitgeek/Java-antlr-interpretor',
      year: '2024',
      highlight: false,
      skills: ['Java', 'ANTLR', 'Analyse Lexicale', 'Parsing', 'TDD'],
    },
    {
      name: 'Messagerie Temps Réel',
      tagline: 'Chat instantané .NET + Angular',
      description:
        'Application de messagerie instantanée avec WebSockets (SignalR), interface Angular réactive et persistance SQL Server.',
      link: 'https://github.com/Med-fitgeek/dotnet-angular-realtime-chat',
      year: '2024',
      highlight: false,
      skills: ['C#', '.NET', 'Angular', 'SignalR', 'SQL Server'],
    },
    {
      name: 'Quiz App TDD',
      tagline: 'Application de quiz en Test-Driven Development',
      description:
        'Application de quiz co-développée en approche TDD exhaustive. API REST Flask, interface Vue.js, gestion des rôles et déploiement Docker.',
      link: 'https://github.com/Med-fitgeek/flask-vuejs-quiz-app',
      year: '2023',
      highlight: false,
      skills: ['Python', 'Flask', 'Vue.js', 'Docker', 'TDD'],
    },
  ],

  education: {
    school: 'ESIEE Paris',
    degree: 'Diplôme d\'Ingénieur Informatique',
    dateRange: '2020 — 2025',
    location: 'Noisy-le-Grand, France',
    specialization: 'Génie Logiciel & Systèmes d\'Information',
    toeic: 'TOEIC 835 — Niveau professionnel',
  },
};