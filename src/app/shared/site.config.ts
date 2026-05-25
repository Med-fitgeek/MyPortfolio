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
    { category: 'Backend', items: ['Java 8+', 'Spring Boot', 'Spring Security', 'SPring Batch', 'JPA/Hibernate', 'J2EE', 'jUnit', 'Mockito'] },
    { category: 'Architecture', items: ['Microservices', 'APIs REST', 'Clean Architecture', 'SOLID', 'TDD', 'Design Patterns'] },
    { category: 'Data', items: ['SQL Avancé', 'PostgreSQL', 'SQL Server', 'MySQL', 'Redis'] },
    { category: 'DevOps & Cloud', items: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'GitHub Actions', 'SonarQube'] },
    { category: 'Frontend', items: ['Angular', 'TypeScript', 'HTML', 'CSS'] },
  ],

  experience: [
    {
      company: 'SLB ',
      logo: 'SLB',
      title: 'Ingénieur Logiciel — Stage Fin d\'Études',
      dateRange: 'Fév 2025 — Juil 2025',
      location: 'Clamart, France',
      type: 'Stage',
      color: '#3b82f6',
      bullets: [
        'Conception et développement d\'une API d\'automatisation de tests fonctionnels (.NET/MS Test) pour MAC, logiciel critique déployé dans 26+ pays',
        'Définition des spécifications techniques et architecture modulaire basée sur le Facade Pattern',
        'Développement de mécanismes synchronisés avec des simulateurs et outils métier',
        'Couverture de tests portée de 20 % à 85 % ; refactorisation réduisant la duplication de code de 40 %',
        'Écriture de tests unitaires (JUnit 5 / Mockito) garantissant la fiabilité des fonctionnalités livrées',
        'Participation aux sprints Agile (Scrum) et aux pratiques d\'intégration continue'
      ],
    },
    {
      company: 'Orange',
      logo: 'Or',
      title: 'Ingénieur Backend Java — Stage',
      dateRange: 'Avr 2024 — Août 2024',
      location: 'Dakar, Sénégal',
      type: 'Stage',
      color: '#10b981',
      bullets: [
        'Développement de services backend (Spring Boot / Spring Security) pour la plateforme Orange Money : 8M transactions/mois',
        'Conception d\'APIs REST sécurisées avec authentification OAuth/JWT',
        'Intégration d\'un système de notifications temps réel avec WebSockets ; 0 régression en production sur 12 semaines',
        'Écriture de tests unitaires (JUnit 5 / Mockito) garantissant la fiabilité des fonctionnalités livrées',
        'Participé aux cycles Agile (Scrum) et à l\'intégration continue avec l\'équipe produit',
      ],
    },
  ],

  projects: [
    {
      name: 'Memorix',
      tagline: 'Plateforme SaaS de révision intelligente',
      description:
        'Plateforme de génération de quiz intelligents à partir de contenus (cours, notes, PDF). Backend Spring Boot sécurisé (JWT) avec traitements asynchrones, monitoring SonarQube et déploiement Railway via GitHub Actions.',
      link: 'https://github.com/Med-fitgeek/ia-generated-quiz-app-for-test-preparation',
      year: '2026',
      highlight: true,
      skills: ['Java', 'Spring Boot', 'JWT', 'Angular', 'PostgreSQL', 'GitHub Actions', 'SonarQube'],
    },
    {
      name: 'Votely',
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

  education: [
    {
      school: 'ESIEE Paris',
      abbr: 'ESIEE',
      degree: 'Diplôme d\'Ingénieur Informatique',
      dateRange: '2022 — 2025',
      location: 'Noisy-le-Grand, France',
      specialization: 'Génie Logiciel & Systèmes d\'Information',
      toeic: 'TOEIC 835 — Niveau professionnel',
    },
    {
      school: 'Università Di Roma \'Tor Vergata\'',
      abbr: 'Uni Roma',
      degree: 'Semestre d\'échange',
      dateRange: 'Automne 2023',
      location: 'Rome, Italie',
      specialization: 'Cours en anglais : Advanced Algorithms, Distributed Systems, Cloud Computing',
    },
    {
      school: 'Excellence Universitaire Africaine',
      abbr: 'EUA',
      degree: 'Classes Préparatoires aux Grandes Ecoles',
      dateRange: '2019 - 2020',
      location: 'Dakar, Sénégal',
      specialization: 'Math, Physique, Informatique',
    }
  ]
  
};