\newpage

# Introduction

Dernier Cri est une Start-Up crée en 2011 axée vers l'innovation digitale. L'équipe est en charge du développement, du déploiement et de la maintenance d'applications pour le compte de plusieurs clients. Ces applications sont hébergées chez des fournisseurs de plateforme (PaaS) ou d'infrastructure (IaaS).

L'entreprise ne disposant pas d'administrateur système, ma mission en son sein consiste à maintenir l'infrastructure utilisée ainsi qu'à être force de proposition pour améliorer celle-ci. Dans ce but, je suis amené à prendre en main et à gérer les différents services souscrit par l'entreprise ainsi qu'à répondre aux demandes des clients au sujet de l'infrastructure.

Mon stage chez Dernier Cri vise donc à proposer différents mécanismes d'automatisation de tâches d'administration de façon à restreindre les interventions de développeur au niveau du système. Cela permet de gagner en maintenabilité et en vitesse de déploiement. Dans cette optique, je suis amené à déveloper un *Chatops*, un outil d'administration d'infrastructure par la discussion qui associé à *Ansible*, un programme d'orchestration de machines, offre une très grande réactivité en cas de panne et une gestion efficace de l'infrastructure.

\newpage

# Contexte du stage

## Dernier Cri

*[Dernier Cri](http://derniercri.io)*, anciennement *Nectify*, est une société d'innovation digitale fondée en 2011 par Benjamin Tierny et Robin Komiwes.

À ses débuts, *Nectify* s'est concentré sur le développement de *[Fresc](http://fre.sc)*, un outil de partage d'avis sur des visuels. Par la suite l'activité de l'entreprise s'est étendu à la prestation de services centrée sur l'innovation puis plus récemment au *Big Data*.

Dernier Cri met un point d'honneur à proposer à ses clients une solution complète adaptée à un problème spécifique. De la conception à la réalisation, l'entreprise accompagne ses clients de A à Z pour aboutir à un produit au plus proche des besoins de ceux-ci. Le mot d'ordre de la société étant l'innovation, les développeurs réalisent un état de l'art constant des nouvelles technologies afin de disposer des clés nécessaires à la réalisation de leurs projets.

\newpage

## Analyse de l'existant

Dernier Cri développe des applications pour ses clients et en assure le déploiement continu ainsi que la maintenance. Pour cela, l'entreprise fait appel à plusieurs services externes :

+ *Digital Ocean* et *Rackspace* comme IaaS (*Infrastructure as a Service*)
+ *Heroku* comme PaaS (*Platform as a Service*)
+ *Newrelic* pour le monitoring d'applications et de serveurs
+ *Papertrail* et *Sentry* pour la gestion des logs d'applications

Cette variété de services permet à l'entreprise de faciliter la mise en place et la maintenance de projet en délégant certaines tâches à ces fournisseurs.

## Objectifs du stage

L'objectf de mon stage est d'apporter à l'entreprise un soutien en administration système et automatisation de tâches. Il s'agit ici d'asurer la gestion des différents services et infrastructures utilisés de manière efficace afin d'alléger la charge de travail des développeurs.

\newpage

# Ansible

<!-- ![](http://uploads.lightcode.fr/articles/31-ansible/ansible-logo.png) -->

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

\newpage

## Modules

Il existe beaucoup de modules pour Ansible. Ceux-ci permettent de gérer tout les aspects d'administration système et il existe également des modules correspondant à un grand de nombre de services tels qu'*AWS* ou *Digital Ocean*.

Il est par exemple possible d'écrire un script générique pour créer une machine chez *Digital Ocean* et la configurer afin qu'elle soit prête à l'utilisation le plus vite possible. L'utilisation des groupes évoqués précédemment permettront ensuite d'y installer les dépendances nécessaires.

Ces modules sont très bien documentés et offrent une couche d'abstraction supplémentaires sur la gestion d'arguments pour éviter les problèmes de compréhension. Il est de plus possible, si nécessaire, d'écrire soi-même un module correspondant à un besoin spécifique.

\newpage

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
PLAY *******************************************************************

TASK [setup] ***********************************************************
ok: [ssh-test]

TASK [Ping the given hosts] ********************************************
changed: [ssh-test]

PLAY RECAP *************************************************************
ssh-test               : ok=2    changed=1    unreachable=0    failed=0   
```

Les playbboks disposent de multiples fonctionnalités permettant d'automatiser toute sorte de traitement. Il est par exemple possible de définir des variables dans un playbook ou directement dans la définition d'un noeud pour pouvoir utiliser des scripts génériques.

\newpage

## Ansible chez Dernier Cri

L'utilisation d'Ansible au sein de Dernier Cri permet une gestion de l'infrastructure plus claire et plus efficace. La gestion des serveurs et des applications est presque intégralement reléguée à Ansible, ce qui facilite les tâches d'administration système. L'écriture de playbooks génériques rend très facile la création de nouvelles machines, leur configuration et l'installation des dépendances spécifiques pour le déploiement. D'autre playbooks permettront ensuite de maintenir ces machines et d'y déployer une nouvelle version d'une application.

Un autre avantage d'Ansible a été de réduire les accès sur chacune des machines. En effet il était auparavant nécessaire d'ajouter manuellement les clé d'accès *SSH* sur chacune des machines nouvellement créées. Ce processus a amené des problèmes de sécurité, il devenait compliqué de savoir qui disposait d'accès sur quelle machine et certaines anciennes clés était toujours présente dans l'infrastructure.

Grâce à ansible, il est devenu possible de créer une machine supervisant les autres. Ce superviseur gérant l'ensemble des machines de l'infrastructure, celles-ci ne devant disposer que de la clé d'accès du superviseur pour être configurées. La gestion des droits d'accès des différents utilisateurs a donc été réduite à la configuration d'une seule machine, assurant ainsi la scalabilité de l'infrastructure

Pour complèter l'usage d'Ansible, nous mettons également en place un ChatBot qui permet d'appeler ces scripts directement via le Slack de l'entreprise. Cela nous permet non seulement de pouvoir gérer l'infrastructure directement depuis un smartphone mais cela garantit aussi une certaine sécurité en réduisant les accès directs aux serveurs qui seront uniquement effectuées par le Bot.

\newpage

# Chatops

## Présentation

Le chatops est un programme connecté au *Slack* de l'entreprise et couplé à l'infrastructure Ansible permettant de réaliser différentes tâches d'administration système. Il se présente sous la forme d'un utilisateur comme les autres au sein du chat et interagira avec les utilisateurs par le biais de commandes.

Par exemple voici la fonction d'aide intégrée au chatops :

<!-- ![](help.png) -->

Le chatops a pour but de faciliter les tâches de déploiement et de maintenance des applications, en effet il leur suffit maintenant de saisir des commandes simplifiées dans le canal approprié pour obtenir les informations qui leur sont nécessaires. Le chatops est également capable d'effectuer un diagnostic simple de l'état d'une machine et tentera de résoudre les problèmes.

\newpage

## Fonctionnement

Le chatops fonctionne de manière assez simple, il s'agit d'un programme Node.JS qui se connecte à l'API temps réél de Slack via un Token qui lui est donné. Une fois connecté, le bot recevra tout les messages envoyés dans un channel auquel il appartient, s'il reconnait une commande parmis ces messages, il exécutera la fonction qui lui est associée.

Les commandes du chatops se divisent en 2 catégorie : la collecte d'informations et l'exécution de playbooks.

### Collecte d'informations

La collecte d'information se traduit par une requête vers l'API de l'un des services utilisé chez Dernier Cri. Cela permet de centraliser les informations concernant un serveur ou une application au sein d'un même canal de communication. Cela s'avère utile en cas de panne, les développeurs peuvent directement sur le chat les informations nécessaire à la résolution du problème telles que les logs de l'application ou l'état de la machine.

<!-- ![](metrics.png) -->

### Le Chatops et Ansible

L'exécution de playbooks Ansible permet d'agir sur l'infrastructure sans pour autant devoir s'y connecter directement, cela offre une réactivité plus grande et permet de faciliter la résolution d'un problème sans nécessairement disposer de compétences en administration système. L'utilisation de playbook spécifiques à une application permettra de réduire son temps de déploiement sans pour autant augmenter la charge de travail des développeurs.

<!-- ![](deploy.png) -->

\newpage

# Conclusion

La mise en place d'Ansible et du Chatops chez Dernier Cri est un premier pas vers l'automatisation de l'infrastructure. Actuellement certaines application sont encore inadaptée à ce système, l'objectif est donc de les rendre compatible en révisant leur méthode de déploiement et de maintenance.

Mon prochain objectif au sein de Dernier Cri est d'apporter mon soutien dans l'amélioration de l'infrastructure Docker de l'entreprise, celle-ci est en effet assez simpliste est pourrait être revue afin de faciliter le déploiement d'application mais aussi la préparation d'environnement de développement. Cela a déjà été mit en place sur certaines applications et je souhaite poursuivre cette tendance.
