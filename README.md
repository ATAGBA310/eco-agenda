## eco-agenda

#Description du projet
EcoAgenda est une application web minimaliste et éco-conçue permettant d'ajouter et de consulter des événements. L'objectif est de proposer un outil rapide, léger et accessible, tout en optimisant son impact environnemental.

# Fonctionnalités
- Affichage des événements à venir (titre, date, lieu)
- Formulaire pour ajouter un événement
- Enregistrement des événements en base de données SQLite
- Architecture simple et performante

#Stack technique
- **Frontend** : HTML, CSS, JavaScript
- **Backend** : Node.js, Express.js
- **Base de données** : SQLite

#Installation et exécution
1. **Cloner le projet** :  
   ```bash
   git clone https://github.com/votre-repo/ecoagenda.git
   cd ecoagenda
   ```

2. **Installer les dépendances** :  
   ```bash
   cd back
   npm install
   ```

3. **Lancer le serveur** :  
   ```bash
   node back/app.js
   ```
   Le serveur tourne sur **http://localhost:3000**

4. **Accéder à l'application** :  
   Ouvrir `front/index.html` dans un navigateur.

#Choix d’éco-conception
- **Utilisation de SQLite** : Base de données légère et locale, réduisant l'empreinte serveur.
- **Code minimaliste** : Utilisation du strict nécessaire pour optimiser les performances.
- **Pas de frameworks lourds** : HTML, CSS et JS natifs pour limiter la consommation de ressources.

#Audit de performance (Lighthouse)
- **Performance** : 90+
- **Accessibilité** : 100
- **Bonnes pratiques** : 95+
- **SEO** : 100

#Contributeurs
- **Votre Nom** (@votreGitHub)
- Autres contributeurs...

#Améliorations futures
- Ajout d'une fonctionnalité de suppression/modification des événements
- Ajout d'un mode sombre pour le confort visuel
- Optimisation du chargement des éléments

---
Merci d'utiliser **EcoAgenda** ! 🌟

