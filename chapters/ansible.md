![logo](http://uploads.lightcode.fr/articles/31-ansible/ansible-logo.png)

## Présentation

> Ansible is a radically simple IT automation engine that automates cloud provisioning, configuration management, application deployment, intra-service orchestration, and many other IT needs. *([source](https://www.ansible.com/how-ansible-works))*

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

### Configuration

Ansible permet de gérer une infrastructure hétéroclite de manière transparente en s'appuyant sur la puissance de protocoles de communication tels que *SSH*.

Il est très facile de configurer *Ansible* pour qu'il ait accès à un grand nombre de machines. Du côté serveur il suffit d'ajouter la clé d'accès du serveur *Ansible*.

Du côté client, il s'agit d'un fichier de configuration qui permet de regrouper les machines disposant de caractéristiques communes. Ainsi il est possible de créer un groupe *cassandra* qui vous permettra d'exécuter les tâches de maintenance et de mise à jour liées à l'ensemble de vos noeuds.

### Modules

Il existe beaucoup de modules pour Ansible. Ceux-ci permettent de gérer tout les aspects d'administration système et il existe également des modules correspondant à un grand de nombre de services tels qu'*AWS* ou *Digital Ocean*.

Il est par exemple possible d'écrire un script générique pour créer une machine chez *Digital Ocean* et la configurer afin qu'elle soit prête à l'utilisation le plus vite possible. L'utilisation des groupes évoqués précédemment permettront ensuite d'y installer les dépendances nécessaires.

Ces modules sont très bien documentés et offrent une couche d'abstraction supplémentaires sur la gestion d'arguments pour éviter les problèmes de compréhension. Il est de plus possible, si nécessaire, d'écrire soi-même un module correspondant à un besoin spécifique.

### Playbooks

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
PLAY ***************************************************************************

TASK [setup] *******************************************************************
ok: [ssh-test]

TASK [Ping the given hosts] ****************************************************
changed: [ssh-test]

PLAY RECAP *********************************************************************
ssh-test                   : ok=2    changed=1    unreachable=0    failed=0   
```

Les playbboks disposent de multiples fonctionnalités permettant d'automatiser toute sorte de traitement. Il est par exemple possible de définir des variables dans un playbook ou directement dans la définition d'un noeud pour pouvoir utiliser des scripts génériques.

## Ansible chez Dernier Cri

L'utilisation d'Ansible au sein de Dernier Cri permet une gestion de l'infrastructure plus claire et plus efficace. La gestion des serveurs et des applications est presque intégralement reléguée à Ansible, ce qui permet aux développeurs de se concentrer sur l'application en elle-même et non aux *à coté*.

L'objectif sur le long terme est de disposer de procédures automatisées de gestion d'infrastructure. Ainsi toutes les étapes de la création de la machine jusqu'au déploiement d'application serait gérées via des playbooks ansible.

Pour complèter l'usage de ces scripts, nous mettons également en place un ChatBot qui permet d'appeler ces scripts directement via le Slack de l'entreprise. Cela nous permet non seulement de pouvoir gérer l'infrastructure directement depuis un smartphone mais cela garantit aussi une certaine sécurité en réduisant les accès directs aux serveurs qui seront uniquement effectuées par le Bot.
