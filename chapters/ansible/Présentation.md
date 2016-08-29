![](http://uploads.lightcode.fr/articles/31-ansible/ansible-logo.png)

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
