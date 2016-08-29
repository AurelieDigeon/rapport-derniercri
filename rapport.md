# Introduction

Dernier Cri est une Start-Up crée en 2011 axée vers l'innovation digitale. L'équipe est en charge du développement, du déploiement et de la maintenance d'applications pour le compte de plusieurs clients. Ces applications sont hébergées chez des fournisseurs de plateforme (PaaS) ou d'infrastructure (IaaS).

L'entreprise ne disposant pas d'administrateur système, ma mission en son sein consiste à maintenir l'infrastructure utilisée ainsi qu'à être force de proposition pour améliorer celle-ci. Dans ce but, je suis amené à prendre en main et à gérer les différents services souscrit par l'entreprise ainsi qu'à répondre aux demandes des clients au sujet de l'infrastructure.

Mon stage chez Dernier Cri vise également à proposer différents mécanismes d'automatisation de tâches d'administration de façon à restreindre les interventions de développeur au niveau du système. Cela permet de gagner en maintenabilité et en vitesse de déploiement. Dans cette optique, je suis amené à déveloper un *Chatops*, un outil d'administration d'infrastructure par la discussion. Intégré au Slack de l'enterprise, il s'agit d'une application capable d'effectuer des tâches communes d'administration système par le biais de commandes saisies à même le chat.

# Contexte du stage

## Dernier Cri

*[Dernier Cri](http://derniercri.io)*, anciennement *Nectify*, est une société d'innovation digitale fondée en 2011 par Benjamin Tierny et Robin Komiwes.

À ses débuts, *Nectify* s'est concentré sur le développement de *[Fresc](http://fre.sc)*, un outil de partage d'avis sur des visuels. Par la suite l'activité de l'entreprise s'est étendu à la prestation de services centrée sur l'innovation.

## Analyse de l'existant
Dernier Cri développe des applications pour ses clients et en assure le déploiement continu ainsi que la maintenance. Pour cela, l'entreprise fait appel à plusieurs services externes :

+ *Digital Ocean* et *Rackspace* comme IaaS (*Infrastructure as a Service*)
+ *Heroku* comme PaaS (*Platform as a Service*)
+ *Newrelic* pour le monitoring d'applications et de serveurs
+ *Papertrail* et *Sentry* pour la gestion des logs d'applications

Cette variété de services permet à l'entreprise de faciliter la mise en place et la maintenance de projet en délégant certaines tâches à ces fournisseurs.

## Objectifs du stage

L'objectf de mon stage est d'apporter à l'entreprise un soutien en administration système et automatisation de tâches. Il s'agit ici d'asurer la gestion des différents services et infrastructures utilisés de manière efficace afin d'alléger la charge de travail des développeurs.

AZJIOEJZIOJASIDJZ


AZOEJPDJSIO

AEAZEAD


A3EDZEAZE

AZAZESD

AZDQDQSdza

# Ansible

![](http://uploads.lightcode.fr/articles/31-ansible/ansible-logo.png)

## Présentation

<!-- > Ansible is a radically simple IT automation engine that automates cloud provisioning, configuration management, application deployment, intra-service orchestration, and many other IT needs. *([source](https://www.ansible.com/how-ansible-works))* -->


Ansible est un outil d'automatisation et d'administration très puissant. Il s'agit d'un serveur léger permettant d'aggréger plusieurs machines (*noeuds*) et d'exécuter sur celles-ci des programmes (*modules*). Le seul prérequis est de disposer d'un point d'accès à ces noeuds.

Il s'agit d'un client léger, il n'est pas nécessaire de l'installer sur un serveur, un simple poste client suffit car l'ensemble des commandes sont exécutées via un protocole de communication, le plus souvent *SSH*. Le résultat d'une commande est également très lisible.

Voici un exemple d'utilisation d'ansible pour vérifier qu'une machine répond :

```bash
$ ansible -i hosts -m ping ssh-test
ssh-test | SUCCESS => {
    "changed": false,
    "ping": "pong"
}
```

## Configuration

Ansible permet de gérer une infrastructure hétéroclite de manière transparente en s'appuyant sur la puissance de protocoles de communication tels que *SSH*.

Il est très facile de configurer *Ansible* pour qu'il ait accès à un grand nombre de machines. Du côté serveur il suffit d'ajouter la clé d'accès du serveur *Ansible*.

Du côté client, il s'agit d'un fichier de configuration qui permet de regrouper les machines disposant de caractéristiques communes. Ainsi il est possible de créer un groupe *cassandra* qui vous permettra d'exécuter les tâches de maintenance et de mise à jour liées à l'ensemble de vos noeuds.

## Modules

Il existe beaucoup de modules pour Ansible. Ceux-ci permettent de gérer tout les aspects d'administration système et il existe également des modules correspondant à un grand de nombre de services tels qu'*AWS* ou *Digital Ocean*.

Il est par exemple possible d'écrire un script générique pour créer une machine chez *Digital Ocean* et la configurer afin qu'elle soit prête à l'utilisation le plus vite possible. L'utilisation des groupes évoqués précédemment permettront ensuite d'y installer les dépendances nécessaires.

Ces modules sont très bien documentés et offrent une couche d'abstraction supplémentaires sur la gestion d'arguments pour éviter les problèmes de compréhension. Il est de plus possible, si nécessaire, d'écrire soi-même un module correspondant à un besoin spécifique.

## Playbooks

La véritable puissance d'Ansible réside dans la possibilité d'écrire des scripts (*playbooks*) permettant d'exécuter une série de tâches sur un ou plusieurs noeuds de votre architecture, chaque tâche correspondant à un module.

Ci-dessous, un exemple de playbook ansible installant git via *apt*.

```yml
# ping.yml

- hosts: ssh-test
  tasks:
    - name: Install Git
      become: yes
      apt: name=git update_cache=yes
```

And the return of *ansible-playbook* command

```bash
PLAY ***********************************************************************

TASK [setup] ***************************************************************
ok: [ssh-test]

TASK [Ping the given hosts] ************************************************
changed: [ssh-test]

PLAY RECAP *****************************************************************
ssh-test               : ok=2    changed=1    unreachable=0    failed=0   
```

Les playbboks disposent de multiples fonctionnalités permettant d'automatiser toute sorte de traitement. Il est par exemple possible de définir des variables dans un playbook ou directement dans la définition d'un noeud pour pouvoir utiliser des scripts génériques.


## Ansible chez Dernier Cri

L'utilisation d'Ansible au sein de Dernier Cri permet une gestion de l'infrastructure plus claire et plus efficace. La gestion des serveurs et des applications est presque intégralement reléguée à Ansible, ce qui facilite les tâches d'administration système. L'écriture de playbooks génériques rend très facile la création de nouvelles machines, leur configuration et l'installation des dépendances spécifiques pour le déploiement. D'autre playbooks permettront ensuite de maintenir ces machines et d'y déployer une nouvelle version d'une application.

Un autre avantage d'Ansible a été de réduire les accès sur chacune des machines. En effet il était auparavant nécessaire d'ajouter manuellement les clé d'accès *SSH* sur chacune des machines nouvellement créées. Ce processus a amené des problèmes de sécurité, il devenait compliqué de savoir qui disposait d'accès sur quelle machine et certaines anciennes clés était toujours présente dans l'infrastructure.

Grâce à ansible, il est devenu possible de créer une machine supervisant les autres. Ce superviseur gérant l'ensemble des machines de l'infrastructure, celles-ci ne devant disposer que de la clé d'accès du superviseur pour être configurées. La gestion des droits d'accès des différents utilisateurs a donc été réduite à la configuration d'une seule machine, assurant ainsi la scalabilité de l'infrastructure

Pour complèter l'usage d'Ansible, nous mettons également en place un ChatBot qui permet d'appeler ces scripts directement via le Slack de l'entreprise. Cela nous permet non seulement de pouvoir gérer l'infrastructure directement depuis un smartphone mais cela garantit aussi une certaine sécurité en réduisant les accès directs aux serveurs qui seront uniquement effectuées par le Bot.
