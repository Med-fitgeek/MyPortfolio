import {
  SiPython,
  SiDotnet,
  SiSpringboot,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiAngular,
  SiGit,
  SiPostgresql,
  SiIntellijidea,
  SiPostman,
  SiSlack,
  SiVercel,
} from 'react-icons/si'

import { FaJava, FaDocker  } from 'react-icons/fa' 

import { TbBrandCSharp } from "react-icons/tb";
import { DiVisualstudio } from "react-icons/di";
import { VscVscode, VscAzureDevops  } from "react-icons/vsc";




const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'NMN.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ndongo Medoune Ndiaye',
  role: 'jeune ingénieur logiciel',
  description:
    'J’ai découvert la programmation un peu par curiosité... et j’y suis resté par passion. Depuis, je construis, j’apprends, je corrige des bugs (parfois les miens 😅) et je m’améliore chaque jour. J’ai une vraie affinité pour les univers typés comme Java, C# et TypeScript, avec une expérience solide sur des frameworks tels que Spring Boot, .NET et Angular. J’aime développer des projets qui ont du sens : plateforme de vote en ligne sécurisée, compilateur, API d’automatisation... Je prends plaisir à concevoir des solutions robustes, testées, utiles. J’apprends vite. Durant mes stages, j’ai manipulé des technos commeWPF & MVVM ou Azure DevOps, en autonomie complète. J’aime comprendre en profondeur, aller au bout des choses, sans jamais perdre le goût d’apprendre. Aujourd’hui encore, je ressens une petite joie chaque fois que mon code compile du premier coup... (Bon, pas toujours hein 😉).',
  resume: 'https://cvdesignr.com/p/b4y5VZEM9Yg3oxn',
  social: {
    linkedin: 'https://linkedin.com/in/nmndiaye',
    github: 'https://github.com/Med-fitgeek',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Application de vote en ligne',
    description:
      'VoteSphere est une plateforme web moderne de vote électronique permettant à un administrateur de créer des élections, inviter des votants via des tokens uniques, et consulter les résultats en toute sécurité.',
    image : '/assets/img/evote.png',
    stack: ['Spring Boot', 'Angular', 'OAUTH2', 'PostgreSQL'],
    sourceCode: 'https://github.com/Med-fitgeek/online-voting-app',
    livePreview: 'https://github.com/Med-fitgeek/online-voting-app',
  },
  {
    name: 'Application de quiz sur le theme de la F1',
    description:
      'Une application web interactive permettant aux passionnés de Formule 1 de tester leurs connaissances à travers un quiz dynamique et ludique.',
    image : '/assets/img/formule1.png',
    stack: ['Flask', 'Vue.js', 'PostgreSQL'],
    sourceCode: 'https://github.com/Med-fitgeek/formula1-quiz-app',
    livePreview: 'https://github.comMed-fitgeekformula1-quiz-app',
  },
  {
    name: 'Interpreteur de Langage',
    description:
      'Fitgeek Compilator est un projet pédagogique de construction d’un interpréteur et pretty-printer pour un langage simplifié. Il utilise ANTLR4 pour générer le parseur et le lexer, construit un AST, puis interprète les expressions du langage.',
    image : '/assets/img/interpreter.png',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/Med-fitgeek/My_language_compilator',
  },
  {
    name: 'Application de gestion de ferme',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    image : '/assets/img/ferme.png',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/Med-fitgeek/livestock',
    livePreview: 'https://github.com/Med-fitgeek',
  },
  {
    name: 'Application de chat a temps réel',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    image : '/assets/img/chatapp.png',
    stack: ['.NET', 'Angular', 'SignalR'],
    sourceCode: 'https://github.com/Med-fitgeek/real-time-chat-app',
    livePreview: 'https://github.comMed-fitgeek/real-time-chat-app',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Java',
  'C#',
  'Python',
  'TypeScript',
  'Spring Boot',
  '.NET',
  'Angular',
  'Docker',
  'Git',
  'Postgres',
  'HTML',
  'CSS',
  
  ]


  export const skillIcons = {
  'Java': <FaJava />,
  'C#': <TbBrandCSharp />,
  'Python': <SiPython />,
  '.NET': <SiDotnet />,
  'Spring Boot': <SiSpringboot />,
  'HTML': <SiHtml5 />,
  'CSS': <SiCss3 />,
  'JavaScript': <SiJavascript />,
  'TypeScript': <SiTypescript />,
  'Angular': <SiAngular />,
  'Git': <SiGit />,
  'Docker': <FaDocker />,
  'Postgres': <SiPostgresql />
}

export const tools = [
  'IntelliJ IDEA',
  'Visual Studio',
  'VS Code',
  'Postman',
  'Azure DevOps',
  'Slack',
  'Vercel',
]

export const toolIcons = {
  'IntelliJ IDEA': <SiIntellijidea />,
  'Visual Studio': <DiVisualstudio />,
  'VS Code': <VscVscode />,
  'Postman': <SiPostman />,
  'Azure DevOps': <VscAzureDevops />,
  'Slack': <SiSlack />,
  'Vercel': <SiVercel />,
}

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'ndongomedoune.ndiaye@mail.com',
}

export { header, about, projects, skills, contact }
