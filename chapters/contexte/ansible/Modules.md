Il existe beaucoup de modules pour Ansible. Ceux-ci permettent de gérer tout les aspects d'administration système et il existe également des modules correspondant à un grand de nombre de services tels qu'*AWS* ou *Digital Ocean*.

Il est par exemple possible d'écrire un script générique pour créer une machine chez *Digital Ocean* et la configurer afin qu'elle soit prête à l'utilisation le plus vite possible. L'utilisation des groupes évoqués précédemment permettront ensuite d'y installer les dépendances nécessaires.

Ces modules sont très bien documentés et offrent une couche d'abstraction supplémentaires sur la gestion d'arguments pour éviter les problèmes de compréhension. Il est de plus possible, si nécessaire, d'écrire soi-même un module correspondant à un besoin spécifique.
