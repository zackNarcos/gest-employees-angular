
# Gestion des Employés

Ce projet est une application Angular pour la gestion des employés, des services et des congés. Il utilise JSON Server pour simuler un backend RESTful.

## Prérequis

Avant de commencer, assurez-vous d'avoir Node.js et npm installés sur votre machine.

## Installation

1. Clonez ce dépôt sur votre machine :
   ```bash
   git clone https://github.com/zackNarcos/gest-employees-angular.git
   ```

2. Accédez au répertoire du projet :
   ```bash
   cd gest-employees-angular
   ```

3. Installez les dépendances du projet :
   ```bash
   npm install
   ```

## Démarrage du serveur JSON

1. Lancez le serveur JSON simulé avec JSON Server :
   ```bash
   npm run json-server
   ```

   Cela démarrera le serveur JSON sur `http://localhost:3000`.

## Démarrage de l'application Angular

1. Dans un autre terminal, démarrez l'application Angular :
   ```bash
   npm start
   ```

   Cela démarrera l'application Angular sur `http://localhost:4200`.

## Utilisation de l'application

- Accédez à `http://localhost:4200` dans votre navigateur pour utiliser l'application.

## Fonctionnalités

- **Enregistrer un employé :** Utilisez le formulaire pour ajouter un nouvel employé à la liste.
- **Enregistrer un service :** Utilisez le formulaire pour ajouter un nouveau service à la liste.
- **Enregistrer un congé pour un employé :** Utilisez le formulaire pour enregistrer un congé pour un employé spécifique.
- **Virer le salaire :** Utilisez le formulaire pour effectuer le paiement du salaire à un employé.
- NB: pour virer le salaire uniquement le service est implémenté. Le composant de paiement de salaire est en cours de développement.


## Auteur

Réalisé par Zakarie ABESSOLO EKOUMA

