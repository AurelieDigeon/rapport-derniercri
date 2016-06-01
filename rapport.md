# Rapport de stage

+ Étudiant : Jean-Serge Monbailly
+ Entreprise : Dernier Cri
+ Tuteur Universitaire : Julien Iguchi-Cartigny
+ Tuteurs professionnels : Robin Komiwes & Benjamin Tierny

Année scolaire : 2015-2016

## Introduction

Dernier Cri est une Start-Up crée en 2011 axée vers l'innovation digitale. L'équipe est en charge du développement, du déploiement et de la maintenance d'applications pour le compte de plusieurs clients. Ces applications sont hébergées chez des fournisseurs de plateforme (PaaS) ou d'infrastructure (IaaS).

L'entreprise ne disposant pas d'administrateur système, ma mission en son sein consiste à maintenir l'infrastructure utilisée ainsi qu'à être force de proposition pour améliorer celle-ci. Dans ce but, je suis amené à prendre en main et à gérer les différents services souscrit par l'entreprise ainsi qu'à répondre aux demandes des clients au sujet de l'infrastructure.

Mon stage chez Dernier Cri vise également à proposer différents mécanismes d'automatisation de tâches d'administration de façon à restreindre les interventions de développeur au niveau du système. Cela permet de gagner en maintenabilité et en vitesse de déploiement. Dans cette optique, je suis amené à déveloper un *Chatops*, un outil d'administration d'infrastructure par la discussion. Intégré au Slack de l'enterprise, il s'agit d'une application capable d'effectuer des tâches communes d'administration système par le biais de commandes saisies à même le chat.

## Contexte

### L'entreprise

*[Dernier Cri](http://derniercri.io)*, initialement *Nectify*, est une société d'innovation digitale fondée en 2011 par Benjamin Tierny et Robin Komiwes.

À ses débuts, *Nectify* s'est concentré sur le développement de *[Fresc](http://fre.sc)*, un outil de partage d'avis sur des visuels. Par la suite l'activité de l'entreprise s'est étendu à la prestation de services centrée sur l'innovation.

### L'équipe

L'équipe de Dernier Cri est actuellement découpée de la manière suivante :

+ 1 CEO
+ 1 CTO
+ 2 chefs de projet
+ 1 assitante de direction
+ 8 développeurs
+ 1 devops

### Pile technologique

+ Ruby on Rails
+ NodeJS
+ Go
+ Docker
+ Erlang
+ Redis

### Analyse de l'existant

Dernier Cri développe des applications pour ses clients et en assure le déploiement continu ainsi que la maintenance. Pour cela, l'entreprise fait appel à plusieurs services externes :

+ *Digital Ocean* et *Rackspace* comme IaaS (*Infrastructure as a Service*)
+ *Heroku* comme PaaS (*Platform as a Service*)
+ *Newrelic* pour le monitoring d'applications et de serveurs
+ *Papertrail* et *Sentry* pour la gestion des logs d'applications

Cette variété de services permet à l'entreprise de faciliter la mise en place et la maintenance de projet en délégant certaines tâches à ces fournisseurs.

### Objectif du stage

L'objectf de mon stage est d'apporter à l'entreprise un soutien en administration système et automatisation de tâches. Il s'agit ici d'asurer la gestion des différents services et infrastructures utilisés de manière efficace afin d'alléger la charge de travail des développeurs.

#### Gestion de l'infrastructure

Mon premier rôle est de gérer l'infrastructure et les services de l'entreprise, notamment en maintenant les serveurs et services existant et d'apporter mon expérience pour optimiser leur utilisation. Il s'agit ici de configurer les machines destinées au déploiement d'applications et de garantir leur intégrité et leur sécurité.

De plus, je suis en charge d'assurer la maintenance des machines afin d'éviter autant que faire se peut l'indisponibilité de nos applications.

## Contribution

### Chatops

Le principal objectif de mon stage est la création d'un Chatops pour l'entreprise. Il s'agit d'un robot (*bot*) intégré à [Slack](https://slack.com/), un chat externalisé disposant de nombreuses intégrations externes. Ce chatops a pour but de faciliter l'administration de l'infrastructure en permettant aux utilisateurs de gérer les machines à distance en conversant avec le bot. Par exemple, celui-ci est capable de redémarrer des machines ou de les *monitorer* sans nécessiter l'accès à celles-ci.

Cette solution offre principalement 2 avantages :

+ Il n'est pas nécessaire de connaitre les commandes à exécuter donc n'importe qui peut effectuer ces actions
+ Cela accroit la sécurité de l'infrastructure en réduisant le nombre d'utilisateur accédant à la machine et en limitant leurs droits

### Révision de l'infrastructure

## Conclusion

## Bibliographie
