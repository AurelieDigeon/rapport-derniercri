Ansible permet de gérer une infrastructure hétéroclite de manière transparente en s'appuyant sur la puissance de protocoles de communication tels que *SSH*.

Il est très facile de configurer *Ansible* pour qu'il ait accès à un grand nombre de machines. Du côté serveur il suffit d'ajouter la clé d'accès du serveur *Ansible*.

Du côté client, il s'agit d'un fichier de configuration qui permet de regrouper les machines disposant de caractéristiques communes. Ainsi il est possible de créer un groupe *cassandra* qui vous permettra d'exécuter les tâches de maintenance et de mise à jour liées à l'ensemble de vos noeuds.
