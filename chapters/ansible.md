![logo](http://uploads.lightcode.fr/articles/31-ansible/ansible-logo.png)

## Présentation

> Ansible is a radically simple IT automation engine that automates cloud provisioning, configuration management, application deployment, intra-service orchestration, and many other IT needs. *([source](https://www.ansible.com/how-ansible-works))*

Ansible est un outil d'automatisation et d'administration très puissant. Il s'agit d'un serveur léger permettant d'aggréger plusieurs machines (*noeuds*) et d'exécuter sur celles-ci des programmes (*modules*). Le seul prérequis est de disposer d'un point d'accès à ces noeuds.

Le premier avantage d'ansible vient de sa simplicité. Il n'est pas nécessaire de l'installer sur un serveur, un simple poste client suffit car l'ensemble des commandes sont executées via un protocole de communication, le plus souvent grâce à *SSH*. Il est aussi très lisible, le résultat d'une commande est clair et explicite.

```bash
$ ansible -i hosts -m ping ssh-test
ssh-test | SUCCESS => {
    "changed": false,
    "ping": "pong"
}
```

### Playbooks

Le second avantage d'ansible, et certainement le plus intéressant, est la possibilité d'écrire des scripts (*playbooks*) permettant d'exécuter une série de tâches sur un ou plusieurs noeuds. Chaque tâche correspond à l'un des nombreux modules ansible et il est également possible d'écrire ses propres modules.

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

Les playbboks disposent de multiples fonctionnalités permettant d'automatiser toute sorte de traitement. Il est par exemple possible de définir des variables dans un playbook ou directement dans la définition d'un noeud pour pouvoir utilier des scripts génériques.

## Ansible chez Dernier Cri
