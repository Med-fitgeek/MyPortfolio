# Ndongo Medoune Ndiaye — Portfolio

> Portfolio personnel d'un ingénieur Backend Java/Spring Boot, diplômé de l'ESIEE Paris.  
> Construit avec Angular 18 standalone components, design system dark industrial + electric blue.

---

## Aperçu

![Angular](https://img.shields.io/badge/Angular-18-DD0031?style=flat-square&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?style=flat-square&logo=typescript)
![SCSS](https://img.shields.io/badge/SCSS-Design%20System-CC6699?style=flat-square&logo=sass)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

Portfolio one-page entièrement responsive avec :

- **Hero** — typing effect, terminal animé, stats clés
- **À propos** — bio, grille de compétences par catégorie, formation
- **Expérience** — timeline interactive SLB / Ministère de la Santé
- **Projets** — 6 projets filtrables avec card highlight B-Ready
- **Contact** — infos de contact + viewer PDF du CV intégré

---

## Stack technique

| Couche | Technologie |
|---|---|
| Framework | Angular 18 (standalone components) |
| Langage | TypeScript 5.4 |
| Styles | SCSS avec design tokens CSS |
| Routing | Angular Router avec lazy loading |
| State | Signals Angular (`signal`, `computed`) |
| Fonts | Syne (display) · Space Mono (mono) |
| Icons | SVG inline (zéro dépendance) |

---

## Structure du projet

```
src/
├── index.html                        # Preload fonts + favicon SVG
├── main.ts                           # Bootstrap standalone
├── favicon.svg                       # Logo <NMN/> personnalisé
├── styles/
│   └── global.scss                   # Design system complet
├── assets/
│   └── cv.pdf                        # CV à placer ici
└── app/
    ├── app.component.ts              # Root + texture noise
    ├── app.config.ts                 # Providers + router
    ├── app.routes.ts                 # Lazy load HomeComponent
    ├── shared/
    │   └── site.config.ts            # Source unique de vérité (données)
    └── components/
        ├── nav/                      # Navigation fixe + glassmorphism
        ├── home/                     # Page shell
        ├── hero/                     # Section hero fullscreen
        ├── about/                    # Bio + skills + formation
        ├── experience/               # Timeline interactive
        ├── projects/                 # Grille filtrée de projets
        └── contact/                  # Contacts + viewer CV
```

---

## Installation et démarrage

### Prérequis

- Node.js ≥ 18
- Angular CLI ≥ 18

```bash
npm install -g @angular/cli
```

### Lancer en développement

```bash
# Cloner le projet
git clone https://github.com/Med-fitgeek/portfolio.git
cd portfolio

# Installer les dépendances
npm install

# Démarrer le serveur de développement
ng serve
```

Ouvrir [http://localhost:4200](http://localhost:4200) dans le navigateur.

### Build de production

```bash
ng build
```

Les fichiers compilés sont générés dans `dist/`.

---

## Personnalisation

Toutes les données du portfolio sont centralisées dans un seul fichier :

```
src/app/shared/site.config.ts
```

Il suffit de modifier ce fichier pour mettre à jour :

- Nom, titre, tagline, bio
- Liens sociaux (email, téléphone, LinkedIn, GitHub)
- Liste des compétences par catégorie
- Expériences professionnelles (entreprise, dates, bullets)
- Projets (nom, description, stack, lien GitHub)
- Formation

### Ajouter le CV

Placer le fichier PDF du CV ici :

```
src/assets/cv.pdf
```

Le bouton "Télécharger" et le viewer inline fonctionneront automatiquement.

### Changer les couleurs

Les couleurs sont définies via des tokens CSS dans `src/styles/global.scss` :

```scss
:root {
  --accent:      #3b82f6;   /* Bleu principal */
  --accent-lt:   #60a5fa;   /* Bleu clair */
  --bg:          #060912;   /* Fond principal */
  --green:       #10b981;   /* Accent vert (disponibilité) */
}
```

---

## Design system

### Polices

| Usage | Police | Poids |
|---|---|---|
| Titres, texte courant | Syne | 400 / 600 / 700 / 800 |
| Code, labels, tags | Space Mono | 400 / 700 |

### Tokens principaux

```scss
--bg          : #060912    /* Fond deep */
--bg-card     : #0f1629    /* Fond card */
--accent      : #3b82f6    /* Bleu électrique */
--txt-1       : #e4ecfa    /* Texte primaire */
--txt-2       : #7a90b8    /* Texte secondaire */
--font-d      : 'Syne'     /* Display */
--font-m      : 'Space Mono' /* Mono */
```

### Classes utilitaires globales

| Classe | Usage |
|---|---|
| `.container` | Centrage max 1080px |
| `.section` | Padding vertical 6rem |
| `.s-label` | Label de section (mono uppercase) |
| `.s-title` | Titre de section |
| `.card` | Card avec hover effect |
| `.tag` | Badge mono pour les skills |
| `.btn-primary` | Bouton bleu principal |
| `.btn-ghost` | Bouton outline |
| `.grid-bg` | Grille de points en arrière-plan |

---

## Déploiement

### Vercel (recommandé)

```bash
npm install -g vercel
ng build
vercel dist/portfolio/browser
```

### Netlify

```bash
ng build
# Glisser-déposer le dossier dist/portfolio/browser sur netlify.com/drop
```

### GitHub Pages

```bash
ng add angular-cli-ghpages
ng deploy --base-href=/nom-du-repo/
```

---

## Auteur

**Ndongo Medoune Ndiaye**  
Ingénieur Backend Java · ESIEE Paris 2025

- Email : [ndongo.m.ndiaye@gmail.com](mailto:ndongo.m.ndiaye@gmail.com)
- LinkedIn : [linkedin.com/in/nmndiaye](https://linkedin.com/in/nmndiaye)
- GitHub : [github.com/Med-fitgeek](https://github.com/Med-fitgeek)

---

## Licence

MIT — libre d'utilisation et de modification.
