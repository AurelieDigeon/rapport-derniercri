# Remerciements

\bigskip

Je tiens tout d'abord à remercier Benjamin Tierny, Robin Komiwes et Julien Vanden Torren pour m'avoir accueilli chez Dernier Cri, pour mon stage.

\bigskip

Je remercie également mon suiveur Harry Claisse pour son aide et son accompagnement, ainsi que les enseignants de l'Université de Technologiques de Compiègne.

\bigskip

Merci également à toute l'équipe de *Dernier Cri* pour avoir rendu mon stage enrichissant et agréable, et pour m'avoir accueilli à bras ouverts.

\bigskip

J'aimerais finalement remercier mes parents et mon frère, qui m'ont permis de faire ces études et m'ont soutenu durant ce stage.

\newpage

\iffalse
# Résumé et abstract

\bigskip

## Résumé

\newpage

## Abstract

\newpage
\fi

# Introduction

\bigskip

Dans le cadre de mon stage de TN09, lors de ma quatrième année d'ingénieur en informatique à l'Université de Technologique de Compiègne (UTC), j'ai effectué un stage de six mois chez *Dernier Cri*.

\bigskip

Dernier Cri est une *start-up* créée en 2011, spécialisée dans l'innovation numérique. L'équipe est en charge du développement, du déploiement et de la maintenance d'applications pour le compte de plusieurs clients.

\bigskip

Ma mission a été d'intégrer l'équipe de développeurs web pour aider au développement d'applications.  
J'ai pu, lors de ce stage, intégrer une équipe dynamique et pro-active. En plus de mon implications dans les projets pour des clients, j'ai pu prendre part à de nombreuses présentations internes sur différentes technologies, et à l'écriture d'articles de blog. J'ai également pu participer activement à la relation client lors de mes projets.

\bigskip

Dans ce rapport je vais vous présenter tout d'abord *Dernier Cri*, l'entreprise qui m'a accueilli, via son organisation hiérarchique et la vie d'entreprise.

\bigskip

Dans une seconde partie, je vous exposerai mes missions au sein de l'entreprise. Je détaillerai ainsi les technologies que j'ai utilisé lors de ces dernières, ainsi que la gestion de projets (cliente et interne).

\bigskip

Ensuite, je détaillerai mes réalisations à travers les objectifs qui m'ont été fixé, les outils utilisés ainsi qu'une description des tâches réalisées.

\bigskip

Finalement, il me tient à coeur de présenter la communauté de développeurs Lillois, à travers le dynamisme de la ville et la diversité des événements proposés, qui m'ont beaucoup aidé à m'intégrer et à approfondir mon projet professionnel.

\newpage

# *Dernier Cri*

\bigskip

## Histoire

\begin{figure}[h]
  \centering
  \includegraphics[height=1cm]{figures/NectifyToDC.png}
  \caption{De Nectify à Dernier Cri}
\end{figure}

\bigskip

En 2011, Robin Komiwes et Benjamin Tierny créent *Nectify*, une entreprise dont le but est le développement et la commercialisation de *Fresc*, un outil de partage d'avis sur des visuels. Bien que cet outil connaîtra un succès mérité (on comptabilise aujourd’hui près de 300 entreprises l’utilisant à travers de milliers de projets), la rentabilité financière n'est pas suffisante pour assurer la pérennité de l'entreprise.

\bigskip

*Nectify* choisit alors de compléter ses revenus par de la prestation de services centrés sur l'innovation numérique.

\bigskip

Début 2014, la majeure partie du chiffre d'affaire de *Nectify* était dû aux activités de prestations de services, *Fresc* ne représentant qu'une part marginale.

\bigskip

Devenant donc une agence spécialisée dans l'innovation numérique, *Nectify* choisit de créer sa propre image, distincte de *Fresc*. C'est dans ce mouvement que la société est devenue *Dernier Cri*, une agence web qui met un point d'honneur à proposer à ses clients une solution complète et adaptée à leur problèmatique.  
De la conception à la réalisation, l'entreprise accompagne ses clients de A à Z pour aboutir à un produit au plus proche de leurs besoins. Cela permet aux développeurs d'opérer dans différents domaines d'activités, et d'avoir une vue globale du développement du produit.

\bigskip

## Secteur d'activité

\bigskip

Le secteur de l'informatique est aujourd'hui est en pleine expension. Pour donner un ordre d'idée, le marché de la programmation et des services informatiques embauche près de 400 000 personnes dans ses 21 000 ESN (Entreprises de Services du Numérique) et ne cesse de croître depuis ces cinq dernières années.

\bigskip

*Dernier Cri* se démarque des autres agences web en proposant plusieurs services, dont évidemment la création d'applications web/mobile, mais aussi l'application de la recherche fondamentale en apprentissage automatique et traitement de gros volumes de données. Celà pour permettre d'augmenter la capacité d'innovation d'entreprises tiers, qui se traduit notamment par de l'exploitation de données, ou la création d'audits.

\bigskip

## Organisation

\begin{figure}[h]
  \centering
  \includegraphics[height=6cm]{figures/team.png}
  \caption{L'équipe de *Dernier Cri*}
\end{figure}

\bigskip

*Dernier Cri* est une entreprise à taille humaine. Cela se traduit par des cycles de décision courts, des dirigeants plus accessibles et la volonté de travailler dans un esprit d'équipe.

\bigskip

*Dernier Cri* posséde une organisation souple qui offre l'opportunité à tous ses employés de s'impliquer dans des projets variés, que ce soit pour des clients ou bien en interne (*side-project*).

\bigskip

Au sommet de l'organisation de l'entreprise se trouve les deux fondateurs, Benjamin Tierny (*CEO*) et Robin Komiwes (*CTO*), ainsi que le troisième associé, Julien Vanden Torren (*Account manager*).

\bigskip

L'entreprise compte aujourd'hui 19 employés, dont trois associés, une assistante de direction, une chef de projet et 14 développeurs. L'équipe de développeurs est aussi constituée d'un *devops*, et d'un *data scientist*. Grâce à de nombreux nouveaux projets, elle se trouve dans une phase d'expension, avec de nouvelles embauches en perspective.

\bigskip

Etant donné que la plupart des développeurs travaille sur plusieurs projets en même temps - selon les besoins de l'entreprise et les compétences de chacun -, des équipes de deux à trois développeurs sont créées, mélangeant les compétences de chacun.

\bigskip

La gestion de projet peut se séparer en deux: la relation client, et la gestion de projet en interne. Le chef de projet s'occupe de gérer la première, tandis que la seconde se fait principalement par l'intermédiaire de *Github*. Ces deux points seront développés plus loin dans le rapport.

\bigskip

*Dernier Cri* a à coeur de développer une culture entreprenariale et informatique, c'est pourquoi s'est developpé des présentations internes (dont certaines sont diffusées via une chaine youtube) ainsi que des présentations publiques par l'intermédiaire de *blog posts* .

### Présentations internes

\bigskip

Dans l'optique d'un partage du savoir dans l'entreprise, les employés sont invités à faire des petites présentations (*talks*) sur une technologie, le resultat d'une veille, ou certains enjeux et solutions techniques en rapport avec la réalisation d'un projet. Ces *talks* ont pour objectifs de partager aux collègues des expériences passées et/ou des passions.

\bigskip

Ces présentations ont trois principaux avantages pour les spectateurs:

1. permettre aux spectateurs de la présentation d'apprendre de nouvelles choses - c'est ainsi l'occasion de découvrir un sujet dont on ne se doutait pas de l'intéret ou de l'existence ;  
2. sensibiliser ses coéquipiers à des problèmes, ou des technologies, qui peut être un véritable gain de temps dans le futur - la présentation est travaillée et structurée, c'est ainsi souvent beaucoup plus facile d'aborder un sujet avec ces *talks*, que de devoir effectuer une recherche d'information sur divers supports ;  
3. mutualiser la communication, et éviter de devoir expliquer individuellement les concepts.

\bigskip

De même, l'orateur, par l'intermédiaire de sa présentation, doit devenir un expert sur le sujet qu'il va couvrir. En effet, il devra assez approfondir le sujet pour être capable, d'une part d'être clair dans sa présentation, et d'autre part de répondre aux éventuelles questions posées à la suite de cette dernière.  
Ainsi, c'est pour lui une occasion de travailler sur ces compétences d'orateur.

\bigskip

Un *talk* interne peut faire office d'incubation pour une présentation dans un autre contexte, afin de certifier l'intérêt du sujet, de sonder les angles d'approfondissement possible, de valider la prestance de l'orateur.  
En effet, il existe à Lille de nombreux évènements où il est possible de faire des présentations (_Meetups_, _Take Off_, etc), ce qui est très intéréssant mais aussi peut être assez intimidant. L' orateur peut donc s'entraîner en interne, avant de l'ouvrir à la communauté.

\bigskip

Pendant mon stage j'ai eu l'occasion d'assister à des présentations sur de nombreuses technologies telles que *ReactJS*, *Docker*, *Rust*, *MJML*, ou encore la fabrication d'un audit sur le traitement de grosses données pour une _startup_ en pleine expension.  
Ces présentations sont publiées sur la [chaîne youtube *Dernier Cri*](https://www.youtube.com/channel/UCDfdBlzldhg_PEu3xZTPsHg).

\bigskip

### Article de blog

\bigskip

Dernier Cri posséde également un [blog technique](http://derniercri.io/tech-blog), alimenté par les développeurs de l'équipe. Les objectifs sont sensiblement les mêmes que pour les présentations internes. C'est sur ce point que *Dernier Cri* fait le plus de communication externe, afin de rayonner, démontrer ses compétences techniques, et son esprit d'analyse.  
Le blog technique permet ainsi à Dernier Cri de se positionner en tant qu’expert.

\bigskip

Un blog est également utile pour tenir informée sa clientelle : il permet de rester en contact permanent avec ses prospects, et de les tenir au courant de l’actualité de l'entreprise, comme un nouveau produit, la maitrise d'une nouvelle technologie, etc.

\bigskip

Pour le rédacteur de l'article, cela a également de nombreux avantages. Par exemple, cela lui permet de travailler sa rédaction et son argumentation, de partager avec d'autres développeurs à travers les commentaires, de gagner en visibilité et en réputation, ou encore de se forcer à rester à la page, afin de rester exhaustif et à jour dans ses références.

\bigskip

J'ai eu l'occasion lors de mon stage d'écrire un article pour le blog technique de *Dernier Cri*. Dans cet article je décris les technologies que j'ai utilisé lors de mon stage, *ReactJS* et *Redux*, ainsi que cinq outils que j'ai découvert et qui ont facilité le développement de mes projets.  
Ce fut une expérience très enrichissante, car cela m'a poussé à enrichir mes connaissances dans le domaine du web, de clarifier les concepts pour savoir les expliquer à tous et de travailler ma qualité de rédaction.

\newpage

# Cadre du stage

\bigskip

Pendant mon stage, j'ai participer au développement de deux applications web : *Photolix* et *FinFrog*. Ces deux projets s'appuient sur le framework *ReactJS*, une bibliothèque *JavaScript* *open-source* développée par Facebook depuis 2013. N'ayant jamais utilisé cette bibliothèque, j'ai donc dû tout d'abord me former à l'écosystème *React*.

\bigskip

## Formation

\bigskip

Je me suis formée sur *Javascript ES6*, *ReactJS* ainsi que *Redux*, car l'entreprise avait prévu de me confier des projets qui utilisent ces technologies.  
Cette formation s'est faite à partir du site [Code school](https://www.codeschool.com/), qui dispose de cours vidéos et d'exercices interactifs. De même, j'ai également pu compter sur Fabien Gavory, un développeur de *Dernier Cri* spécialisé dans la technologie *ReactJS*, pour m'aider et m'expliquer certains concepts difficiles.

\bigskip

La popularité de ces trois technologies est en forte hausse, et elle sont de plus en plus utilisées pour la création facile, rapide et moderne d'applications web. C'est pourquoi ce fut une véritable chance d'apprendre ces deux *frameworks* lors de ce stage.

\bigskip

### Javascript ES6

\bigskip

*JavaScript* est un langage de programmation orienté web (pages web dynamiques et serveur grâce à *NodeJS*), devenu incontournable. Créé en 1995 par Brendan Eich, il servait principalement à la réalisation d'animations. Aujourd'hui, il est au centre des applications, car avec ce langage que nous pouvons désormais contrôler la totalité de ces dernières.  
Cette montée en popularité s'est faite brusquement avec l'arrivée du moteur *V8* de Google, qui est au centre de Chromium. Ce langage n'étant pas prévu à la base pour créer une application web, la syntaxe de *JavaScript* est complexe et lourde. C'est dans ce contexte qu'une mise à jour du langage s'est imposée: *ES6*.

\bigskip

*ES6* (*ECMAScript Edition 6*, ou encore *ES2015*) a été publiée en Juin 2015.  
Elle ajoute un ensemble de normes à celles déjà présentes, afin d'améliorer des fonctionnalités existantes dans *ES5*, et d'en apporter de nouvelles qui permettent d'alléger le code, ou de mieux le structurer.  
Ce tout permet de rendre le code source de l'application plus maintenable, tout en restant compatible avec les précédentes versions de *JavaScript*.

\bigskip

Voici quelques nouveautés notoires de *ES6* :

* L'introduction du mot-clef *let* : tout comme le mot-clef *var*, présent dans les anciennes versions de JavaScript, il permet de déclarer une variable, mais celle-ci reste limitée à la portée d'un bloc - c'est-à-dire que la variable ne peut être utilisée que dans le bloc où elle a été déclarée.

* Les littéraux de gabarits (*Template Literals*): ils correspondent à une technique d'intégration d'expressions, à l'intérieur de chaînes de caractères. Par rapport aux anciennes versions de JavaScript, ils sont une alternative aux concaténations, qui n'étaient pas pratiques et lisibles (voir exemple ci-dessous).

    ```Javascript
    // ES6
    let name = "Aurélie"
    let result = `Voici le rapport de ${me}.`
    // ES5
    var me = "Aurélie";
    var result = "Voici le rapport de " + me;
    ```

* Les paramètres par défaut: auparavant, pour définir une valeur par défaut pour un paramètre donné, il fallait tester si ce paramètre avait bien une valeur définie (différente de `undefined`), et lui affecter une valeur choisie le cas échéant. *ES6* permet de faire cela directement lors de sa définition, avec une syntaxe plus concise.

    ```Javascript
    // ES6
    function f (x = 0, y = 0) {
        return x + y
    };
    // ES5
    function f (x, y) {
        if (x === undefined)
            x = 0;
        if (y === undefined)
            y = 0;
        return x + y;
    };
    ```

* Initialisateur d'objets: il arrive souvent de vouloir utiliser des variables comme propriétés d'un objet. *ES6* introduit une notation permettant d'utiliser le nom de la variable comme nom de la propriété de l'objet créé.

    ```Javascript
    // ES6
    obj = { x, y }
    // ES5
    obj = { x: x, y: y };
    ```

* Affectation par décomposition: pour accéder aux valeurs des propriétés d'un objet, il fallait pour cela itérer sur ces propriétés, ce qui était fastidieux et gourmand en lignes de code. *ES6* a introduit une notation permettant de faire cela facilement, de façon compacte et implicite:

    ```Javascript
    // ES6
    var { a, b, c } = someFunction()

    // ES5
    var tmp = someFunction();
    var a  = tmp.a;
    var b = tmp.b;
    var c = tmp.c;
    ```

Arraw fonction ? OUI
Classe et héritage ? OUI
Héritage de la programmation fonctionnelle à travers `let` et `arrow functions`.

\bigskip

Étant donné que *ES6* n'est pas encore totalement supporté par les navigateurs, il est donc utile d'utiliser un transcompilateur vers *ES5*, comme le fait *Babel.js*. Un transcompilateur permet de prendre le code d'un langage de programmation comme son entrée, et de récupérer en sortie le code dans un autre langage.  
Ici, *Babel.js* va traduire les particularité syntaxiques de *ES6* en *ES5*.

\bigskip

L'apprentissage de *ES6* a était primordial pour mon stage : les nouvelles normes rendent vraiment le code plus facile à lire et à écrire. J'ai ainsi, dès le début de mon stage, pu prendre de bonnes habitudes quant au style de mon code.

\bigskip

En effet, j'ai eu l'occasion durant ce stage de travailler sur un projet *JavaScript* n'utilisant pas *ES6* et j'ai eu de grandes difficultés à me passer des facilités d'écritures. J'ai ainsi pu me rendre compte que, sans *ES6*, le code est beaucoup plus long et laborieux à lire et à écrire.

\bigskip

Cela m'a également permis de me familiariser avec les normes *ECMAScript*, composant les différentes versions du langage *JavaScript*, et de me persuader de la nécessité de rester attentive aux différentes actualités et évolutions des langages.  
En effet, dans le milieu de l'informatique, les normes et les *frameworks* utilisés changent très souvent, et il est donc important de rester attentif à l'actualité.

\bigskip

### React

\bigskip

Développée depuis 2013 par Facebook, *React* est une bibliothèque JavaScript déclarative, efficace et flexible pour la création d'interfaces utilisateurs. Cette bibliothèque s'est démarqué notamment par ses performances.
Elle est aujourd'hui utilisée par de nombreuses entreprises telles que Netflix, Yahoo, Airbnb ou encore Sony.

\bigskip

Tout d’abord, React est basé sur l'utilisation d'un *DOM* (*Document Object Model*) Virtuel. Le DOM est l’*API* qui permet au développeur web d’accéder et de manipuler le contenu d’une page web. Cette *API* founit une représentation structurée et orientée objet de votre document. Elle fournit également des méthodes pour l’ajout et la suppression d'éléments ainsi que la gestion des événements, ce qui permet de créer du contenu dynamique. Le problème est que la mise à jour du DOM, pour appliquer des modifications, est lente, et il faut donc limiter un maximum les interactions avec ce dernier.

\bigskip

Grâce à l'utilisation d'un *DOM* virtuel, un composant React ne crée pas de HTML mais une représentation sous forme d’objets et de nœuds de ce à quoi le HTML final doit ressembler. React va comparer cette représentation au DOM réel et en déduire les opérations minimales à exécuter pour que les deux soit identiques. Avoir une représentation sous forme d’arbre en JavaScript permet de réaliser beaucoup plus d’opérations, d’utiliser les meilleurs algorithmes de comparaison d’arbres et de faire toutes les modifications du DOM en une opération plutôt qu’au fur et à mesure.

\bigskip

Une autre particularités de *React* est de découper l'application en composants, dépendant d'un état. C'est après un changement de cet état que React déduit les changements à effectué sur le DOM.

\bigskip

Il faut noté que les composants sont des classes, héritant de `React.Component`.
Un composant React possède deux types de données :

* des paramètres (*props*) immutables définis à son instanciation, qui ne peuvent être manipulés qu'à l'extérieur du composant;
* un état (*state*), permettant le dialogue avec l'utilisateur. Cet état ne peut être modifié qu'à l'intérieur du composant;

\bigskip

Pour illustrer cette architecture, prenons l'exemple d'une simple application *Todo list*. Elle possède trois composants : la todo liste (`TodoListApp`), le formulaire d'ajout (`TodoForm`) et la l'affichage de la liste (`TodoItems`). Le composant principal est la liste, qui possède la logique et les données de l'application. Elle passe ses fonctions et ses données a ses composants enfants, selon leur besoin.

```jsx
class TodoListApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  addItem(element) {
    var itemArray = this.state.items;
    itemArray.push(element);
    this.setState({ items: itemArray });
    e.preventDefault();
  }

  render() {
      return (
        <div className="todoList">
          <TodoForm onSubmit={this.addItem} />
          <TodoItems items={this.state.items}/>
        </div>
      );
    }
}
```

Le formulaire utilisera la fonction `addItem` de TodoListApp pour modifier la liste. Cette modificaton de la liste déclenchera la modification du composant TodoItems, puisqu'il reçoit la liste comme *props*.

\bigskip

Cette bibliothèque est aujourd'hui en expansion. Elle a un succès certain auprès de la communauté des développeurs web, et de nombreux outils se développent autour. C'est donc un avantage d'avoir pu apprendre *React* lors de mon stage, puis d'avoir mis en pratique ces connaissances lors des deux projets que j'ai effectué.

\bigskip

### Redux

\bigskip

React, même s'il n'impose pas de bibliothèque pour les donnés et la communication des composants, offre une approche nommée *Flux* très intéressante.

\bigskip

En plus de *React*, Facebook a fourni une architecture appelée *Flux* pour la gestion des donnés et la communication des composants. Cette architecture promet un flot unilatéral des données pour que le développeur puisse facilement suivre le trajet des données d'un événement et ses conséquences.

\bigskip

Avec Flux, l'application va se décomposer de la façon suivante :

* des *stores* qui sont l’endroit où les données sont concervées ;
* des *actions* qui représente l'ensemble des modifications possible ;
* un  *dispatcher* qui notifie les stores des actions effectuées ;
* des vues, les composants, qui vont transformer et afficher les données qu’on leur donne.

\bigskip

*Redux* est une des implémentations de *Flux* les plus populaires, créée en Mai 2015 par Dan Abramov. Bien que reprenant les concepts de *Flux*, *Redux* les simplifie en utilisant des concepts liés à la programmation fonctionnelle.

\bigskip

La mise en place de *Redux*, ou de *Flux* en général peut sembler dans un premier temps laborieuse, car elle impose de nombreux fichiers, de nombreux composants différents et une façon de penser qui peut désarçonner au début. Mais une fois les bases mises en place, cette architecture a l'avantage d'offrir une bonne lisibilité quant aux changements d'état. Il est possible de se retrouver dans le code très rapidement et d'ajouter des composants sans difficultés puisque *React* et *Flux* sont conçus pour être modulable. Flux trouve donc son utilité dans les grandes applications.

\bigskip

Bien que *Redux* soit la seule implémentation de *Flux* que j'ai eu l'occasion d'utiliser. Après m'étre beaucoup documenté et avoir discuté des différentes implémentation avec mes collègues, je pense qu'il s'agit d'une des meilleures. *Redux* permet d'appréhender certain concept de la programmation fonctionnel, est simple à utiliser et assez populaire pour offrir un support de la communauté en cas de problème.

\bigskip

\begin{figure}[h]
  \centering
  \includegraphics[height=5cm]{figures/react.png}
  \caption{Flux entre les différents composants}
\end{figure}

## Gestion de projet

Le processus de développment d'une application pour un client possède deux aspects fondamentaux. Tout d'abord il est nécessaire de mettre en place une bonne relation client, d'un part pour bien comprendre les besoins et les contraites, d'autre part pour vérifier au fur et à mesure du développement que la solution developpée correspond bien.

Le deuxième aspect de la gestion de projet est l'organisation interne. Une fois les besoins du client récoltés, il est nécessaire de mettre en place une méthodologie pour répartir les taches, suivres leur avancement et vérifier la qualité du livrable.

\bigskip

### Relation client

\bigskip


Lors du début du projet, le chef de projet discute avec le client pour comprendre ses besoins et ses attentes. Aidé par le CEO, il essaye de conceptualiser une solution au problèmes du client, en dégageant du discout du client des fonctionnalités techniques à mettre en place. Selon les besoins, le chef ce prohjet organise une réunion avec le(s) developpeur(s) et le client pour clarifier certains points ou pour discuter des différents approches du problèmes possible. C'est l'occasion pour le développeur de comprendre la problèmatique métier qui sera au coeur du projet, et de proposer des solutions, peut être un peu différentes de celles imaginées par le client.

\bigskip

Après cette première étape, le chef de projet peut diviser les fonctionnalité en taches et les faires estimer par un développeur. Il estime le temps qu'il pense passer sur le problème, en prenant en compte l'exploration de l'existant, le développement en lui-même, les tests et les possibles retours. Cette estimation devra ensuite être validée par le client

\bigskip

Il est ensuite temps de commencer le développement du projet. Il est nécessaire de s'assurer tout au long du projet, que le produit en cours de réalisation correspond aux attentes du client. C'est pourquoi un espace de *staging* est mis en place, pour permettre au client de tester et valider les nouvelles fonctionnalité avant la mise en production. Un espace de *staging* est un environnement identique à celui de l'application finale, mais utilisant de fausses données, où sont déployée les nouvelles fonctionnalités.

\bigskip

Il est également courant de mettre en place des outils de *monitoring* pour assurer d'une part des performances, en termes de temps de réponse par exemple, et d'autre part la qualité du code. Pour cela *Dernier Cri* utilise des outils tel que *Papertrail*, ou *New Relic*.

\bigskip

### Organisation interne

\bigskip

Une fois le projet découpé en focntionnalités puis en taches, estimé et validé, une seconde phase de gestion de projet commence. C'est la gestion interne du projet.

L'entreprise utilise principalement la plateforme *Github*, pour héberger le code de ses projets, et donc le logiciel de gestion de versions *Git*. *Github* est une interface web permettant d’interfacer avec des projets versionnés, et composés de multiples applications aidant à la gestion de projets.

\bigskip

C'est sur un de ses outils que le chef de projet crée des *issues*, c'est à dire un descriptif de chaque tâche. Une interface en forme de tableau permet de séparer les tâches en plusieures colonnes, par exemple : *A faire*, *En cours*, *Terminé*. Il est aussi possible d'attribuer les tâches à un contributeur, ou encore de leur attribuer des labels tel que *Urgent*, *Bug* ou encore une estimation de temps quand à la réalisation de la tâche. Cela permet à chacun d'avoir une vue à tout moment de l'évolution du projet, des tâches en cours ou terminées. Il est également possible de commenter chaque *issue* pour, par exemple, demander des précisions, ou faire remonter une erreur.

\bigskip

Pour protéger le projet actuel, stable, des nouvelles modifications tant que celles-ci ne sont pas testées, le développeur crée une *branche* dans Github, c'est à dire une copie du projet qui évoluera indépendamment de la branche principale. C'est sur cette branche que seront faites les modifications destinées à implémenter la nouvelle fonctionnalité.

\bigskip

C'est ensuite le moment de passer au développement à proprement parler. Le développeur utilise un environnement de developpement sur son propre ordinateur pour simuler l'environnement de production. Cela peut se traduire par la création d'une base de données, ou la connexion à une *API* spéciale. Il faut faire attention à ce que les données utilisées lors de la phase de développement n'aient pas d'impact sur celles de production.

\bigskip

Quand le développeur estime avoir terminer la tâche, il crée une *Pull request* sur Github, c'est à dire demande à fusionner sa version du projet, modifiée pour résoudre la tâche, avec la version principale, stable. Il demande ensuite à ses collégues ayant des compétences dans le langage utilisé de relire et de commenter cette *Pull request*. C'est l'occasion pour les développeurs d'avoir l'avis de leurs collégues sur leur style d'écriture et leur façon de coder, ce qui permet souvent de découvrir de nouvelles méthodes et d'argumenter sur les meilleurs techniques à utiliser. *Dernier Cri* utilise ce système de *code review* pour garantir une certaine qualité du code ainsi qu'un style d'écriture de code homogéne.

\bigskip

Une fois le développement de la fonctionnalité validé, la nouvelle version du projet est déployé en *staging*. Le chef de projet et, si nécessaire, le client font une *recette*, c'est à dire vérifie que la version de *staging* remplit bien le besoin exprimé par le client, et que la nouvelle fonctionnalité n'a pas endommagé la version existante. En cas de problème, le développeur revient sur la tâche jusqu'à ce que tout soit réglé.

\bigskip

Une fois un lot de taches effectuées, il est décidé en accord avec le client de pousser les modifications sur la production. Il faut alors vérifier que la *mise en production* c'est bien passée : que le site fonctionne toujours et que les nouvelles fonctionnalités sont bien en place.

\newpage

# Mes réalisations

\bigskip

J'ai eu la chance de participer à plusieurs projets durant mon stage, de façon plus ou moins importantes. Je vais commencer par vous présenter les deux principaux projets sur lesquels je me suis investie.

\bigskip

Le premier projet auquel j'ai participé se nomme Photolix. C'est un site internet de développement de photos, avec pour objectifs de toucher un large public et de limiter au maximum le temps d'attente du client.

\bigskip

Le second projet est FinFrog, un site proposant des prêts financés par des particuliers. Ce projet était déjà assez avancé à mon arrivé. Le client possédait un site en ligne, mais souhaitait changer l'apparence et ajouter des fonctionnalités, ce pourquoi il a fait appel à *Dernier Cri*.

\bigskip

Je vous présenterais également un outil que j'ai pus développer pour le site de *Dernier Cri*.

\bigskip

## Photolix

### Présentation et objectifs du projet

\bigskip

Dès mon arrivée dans l'entreprise j'ai été assigné à la réalisation d'une application de développement photo. Le client possède un studio de développement photo sur Lille, et souhaitait proposer à sa clientèle une application simple et efficace permettant de commander le développement de photos.

\bigskip

Le principal objectif de ce projet était de télécharger les photos vers le serveur au fur et à mesure de leur sélection, pour ainsi éviter le temps d'attente du client à la fin de la saisie de ses informations.

\bigskip

Lors de mon arrivée sur le projet, un développeur de *Dernier Cri* avait déjà posé des bases. Les fonctions de recadrage et de compression de la photo était notamment déjà développées.

\bigskip

Les principaux objectifs du projet Photolix étaient les suivants :

- mettre en place le *design* fournit par le client, à partir de maquette ;
- gérer l'envoi des photos au serveur ;
- mettre en place la possibilité de modifier les photos (formats, orientation...) ;
- pages de saisie des informations du client (adresses, informations de paiement) et page de remerciement.

\bigskip

### Outils utilisés

\bigskip

Lors de mon arrivée sur ce premier projet, j'ai du apprendre à utiliser certains outils, tant au niveau de la gestion de projet, que du développement en lui-même.

\bigskip

Tout d'abord, le projet utilise *Github* pour héberger le code source et pour la gestion de projet, et le logiciel de gestion de versions *Git*. Bien qu'ayant déjà utilisé *Git* et *Github* lors de mon DUT informatique, de projets personnels ou bien de projets à l'UTC, je ne connaissais pas certaines fonctionnalités de Github utilisées par l'entreprise, notamment le code review et les outils de gestion de projet.

\bigskip

Le projet déjà existant utilisait npm, le gestionnaire de paquets officiel de Node.js. Il permet d'installer des applications Node.js disponibles sur le dépôt npm et gère les dépendances pour une application. Il offre également la possibilité de créer des scripts. C'est une option vraiment pratique car elle permet de construire et lancer l'application en une commande.

\bigskip

Pour mon environnement de travail, j'ai aussi utilisé un *linter*. Le *code linting* est un type d'analyse statique qui est fréquemment utilisé pour trouver des modèles problématiques ou le code qui ne respecte pas certaines directives de style. Concraitement, il permet d'afficher dans un éditeur de texte les erreurs. Il existe des *linters* de code pour la plupart des langages de programmation, et les compilateurs incorporent parfois le linting dans le processus de compilation. J'ai personnellement utilisé *ESLint*, qui est un *linter* JavaScript open-source, libre et qui permet aux développeurs de créer leurs propres règles de filtrage.

\bigskip

J'ai également pu utiliser le *chatops* de *Dernier Cri*, un outil d'administration système via la conversation. Intégré au *Slack* (une application de messagerie) de l'entreprise, il permet à tout le personnel d'obtenir des informations sur un serveur ou une application et d'effectuer des résolutions simples en cas de panne. Concrêtement, j'ai principalement utilisé le chatops pour déployer mon application.

\bigskip

L'application était écrite en *React* avec l'utilisation de *Redux*. J'ai pu donc mettre en application les principes appris lors de ma première semaine à *Dernier Cri*.

\bigskip

Pour l'intégration du style du site, j'ai pu utiliser Zeplin. C'est une application de collaboration pour les designers et les intégrateurs. Il permet aux designers de télécharger leurs maquettes fonctionnelles directement à partir de Sketch, un logiciel de création de maquette, et les ajouter aux dossiers de projet dans Zeplin. Les annotations seront automatiquement ajoutées aux designs (tailles, couleurs, marges et même suggestions CSS pour certains éléments). Il est alors beaucoup plus simple pour le développeur d'intégrer les maquettes.

\bigskip

Finalement, pour l'intégration des maquettes, j'ai fait le choix d'utiliser *SASS* (*Syntactically Awesome Stylesheets*). C'est un langage de génération dynamique de feuilles de style. On peut le voir comme une extension de *CSS3*, ajoutant de nouvelles règles dans notre façon d'intégrer un design. Les principaux ajouts sont : les variables, les *mixins,* l'héritage de sélection et différents options très utiles.

\bigskip

### Déroulement

\bigskip

#### Intégration des maquettes

\bigskip

La première partie du projet a consisté à intégrer les maquettes fournit par le client. Dans un premier temps, j'ai du redécouper l'application. En effet, lors du premier jet réalisé par mon collègue, le client était parti sur une application monopage. Mais à la réception des maquettes, l'application était devenue multi-page. Il a donc tout d'abord fallut mettre en place un routeur pour permettre à l'utilisateur de naviguer entre les pages.

\bigskip

J'ai choisi, après quelques recherches, d'utiliser React Router. [React Router](https://github.com/ReactTraining/react-router) est une bibliothèque de routage pour React. Il dispose d'une *API* simple avec des fonctionnalités puissantes. Il garde l'interface utilisateur synchronisé avec l'*URL*. React Router est très simple à utiliser. Il suffit de lister les différentes routes souhaitées, associées au composant correspondant.

```jsx
// Exemple de création de routes avec React-Router
import { Router, Route, hashHistory } from 'react-router'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/about" component={About}/>
  </Router>
), document.getElementById('app'))
```

\bigskip

Une fois ce découpage effectué, j'ai mis en place SASS pour la gestion des feuilles de style. Pour faciliter son utilisation, j'ai créé plusieurs fichiers avec les variables et fonctions (mixins) qui seront utilisés dans tout le projet. Le fichier contient notamment les codes hexadecimaux des couleurs de l'application, les tailles des polices d'écriture utilisées, etc. Utiliser des variables évite de devoir revenir sur tous les fichiers du projet si l'on décide de changer l'une de ses variables.

\bigskip

Une fois ces fichiers SASS principaux créés, j'ai simplement créé un fichier SASS pour chaque composant React de l'application, qui contient donc tout le style de ce composant. J'ai du faire beaucoup de recherches pour être à l'aise avec le CSS (*Cascading Style Sheets*), c'est à dire le langage décrivant la présentation de l'application.

\bigskip

L'intégration du style fut assez rapide, l'application étant visuellement assez simple. Grâce à cette première étape j'ai pu me familiariser avec l'organisation du projet avant d'attaquer des parties plus difficiles.

\bigskip

#### Formatage et téléchargement des photos

\bigskip

La deuxième partie du projet était centrée sur le téléchargement des photos vers le serveur. Le client nous a fourni une *API* assez simple que nous devions manipuler pour envoyer les photos, changer le nombre d'exemplaire, récupérer le prix de la commande...

\bigskip

La majeur difficulté durant cette étape fut de ne pas avoir accès directement à l'*API*, le client préférent developper cette partie de l'application lui-même. En effet, celle-ci évoluant en même temps que l'application et ne possédant pas de documentation, il était souvent nécessaire de demander des précisions ou des évolutions au client. Même si la communication était assez rapide, le fait de ne pas avoir la main sur l'*API* a ralenti le développement.

\bigskip

Une autre difficulté était le redimensionnement des images avant l'envoi au serveur. En effet, quand l'utilisateur sélectionne des photos, nous devons tout d'abord passer la photo au format sélectionné, et donc gérer les formats incompatibles. Cela a apporté beaucoup de questions. Par exemple, si une photo est en 10x15 et que l'utilisateur a sélectionné le format 11x15 que fait-on ? Coupe-t-on des morceaux de la photo pour arriver au format voulu ? Ou bien ajoute-t-on des bandes ?

\bigskip

Cela a donc donner lieu à beaucoup de discussions avec le client pour résoudre toutes ses problèmatiques avant de developper les solutions. La fonction de redimensionnement est une fonction clé du projet. Une fois la photo redimensionnée, nous réduisons la résolution de la photo jusqu'a 300dpi (point par pouce). C'est la résolution optimal pour l'impression de photo : assez élevée pour garantir une bonne qualité à l'impression, et assez faible pour rendre le téléchargement vers le serveur le plus rapide possible.

\bigskip

#### Modification des photos

\bigskip

L'étape suivante est la création de l'interface et des fonctions permettant à l'utilisateur de modifier ses photos. Il peut changer le format, recadrer la photo, changer l'orientation... J'ai tout d'abord chercher s'il existait déja un outil pour le recadrage de la photo.

\bigskip

C'est à ce moment que j'ai découvert la diversité des outils React proposés par la communauté : il est très facile de trouver des composants sur Github qui correspondent à votre besoin. J'ai donc pu utiliser [react-cropper](https://github.com/roadmanfong/react-cropper), trouvé sur Github après quelques recherches, qui s'est révélé très efficace. Il permet de gérer le recadrage, fournit des fonctions renvoyant toutes les données intéressantes (dimensions du recadrage, rotation de la zone de recadrage...). Ce fut ma première intégration d'un outil React.

\bigskip

Pour mettre en place mes autres fonctions de modification des photos, j'ai surtout dû modifier la fonction principale de redimensionnement des photos, utilisée lors du téléchargement initial. J'y ai ajouté des paramètres permettant de choisir le format, l'orientation, si on coupe la photo ou bien on ajoute des bandes blanche...

\bigskip

Enfin, il a fallut mettre en place l'interface utilisateur. Durant cette étape nous avons beaucoup échangé avec le client pour essayer de trouver la présentation la plus intuitive et pratique pour le client. Par la suite, lors des premiers test de l'application, nous avons du modifier cette page suite à des retours des testeurs.

#### Pages informations des clients, paiement et remerciement

\bigskip

La dernière partie du projet consistait à mettre en place les autres pages de l'application, servant à récolter les informations nécessaires à la commande, et à les envoyer à l'API. Ces pages sont :
* la page de saisie des adresses, de livraison et de facturation ;
* la page de paiements, soit par carte bancaire, soit par Paypal ;
* la page de remerciements avec un récapitulatif de la commande, ainsi que des liens pour partager l'événement sur les réseaux sociaux.

\bigskip

Pour la page de saisie de l'adresse, ce fut l'occasion pour moi de créer pour la première fois un formulaire en React et Redux. Avec ce framework, la création de formulaire est assez peut instinctif car il faut répercuter chaque changement des champs, chaque lettre écrite ou effacée, pour que l'état de l'application soit toujours à jour. C'est assez fastidieux et inhabituel.

\bigskip

Après cette première expérience dans la création de formulaire, j'ai pu découvrir un outil, *redux-form*, permettant de créer beaucoup plus facilement des formulaires et gérant automatiquement la mise-à-jour de l'état de l'application. J'ai pu utiliser cet outil dans mon second projet. Mais je pense que le fait d'avoir d'abord dû faire toute l'implémentation nécessaire par moi-même m'a permis de prendre conscience des problèmatiques de cette pile technologique : le maintient de l'état de l'application, la communication entre les composants...

\bigskip

J'ai ensuite travaillé sur le page de remerciement. Sur cette page, on affiche un récapitulatif de la commande ainsi que des liens pour partager l’évènement sur les réseaux sociaux. J'ai ainsi pu apprendre comment partager sur Facebook et Tweeter un message, associé a une URL.

\bigskip

Finalement, sur les trois pages précédemment citées, j'ai dû faire apparaître un récapitulatif de la commande, avec notamment le nombre de photos commandées, le prix par photo, le prix total, ainsi que la possibilité d'entrer un code de promotion avant le paiement. Cette partie à demandée de la réflexion car le calculs des prix était différent avant et après le paiement. En effet, dans l'absolu, il faut récupérer le prix à partir de l'API, pour être certain de son exactitude. Cependant, avant le paiement il est possible que toute les photos ne soient pas encore envoyé à l'API et donc le prix renvoyé par celle-ci n'est pas définitif. Il est alors donc nécéssaire de faire le calcul du prix dans l'application, et d'afficher ce resultat dans le récapitulatif. Une fois le paiement effectué, il faut afficher le prix envoyé par l'API, puisqu'il s'agit du prix final.

\bigskip

#### Fin du projet

\bigskip

Vers mi-octobre, j'ai été réaffectée à un autre projet, laissant la fin du projet Photolix à un collègue. Celui-ci a fini de mettre en place la gestion du téléchargement des photos vers le serveur, notamment après leurs modifications. Il a également revu la fonction de redimensionnement des photos, car celle utilisée au debut n'était pas assez performante :  si nous montions à une centaine de photos chargées, le navigateur ne supportait pas la charge.

\bigskip

J'ai pu étudier les modifications apportées par Fabien, et apprendre des erreurs que j'ai pu commettre. Par exemple, je n'avais pas assez travailler la gestion des erreurs. Il a fallut que Fabien reprenne mon travail pour ajouter l'affichage des erreurs, en cas par exemple d'erreur lors du téléchargement des photos. Ces enseignements m'ont permis de ne pas reproduire ces erreurs dans le second projet sur lequel j'ai été affecté.

\bigskip

Finalement, j'ai pu retravailler sur le projet en decembre. Après un premier rendu au client, celui-ci souhaitait quelques corrections ainsi que l'ajout de quelques fonctionnalités. Il avait utilisé un échantillon de clients pour tester l'application et avait relevé des améliorations possibles à l'interface utilisateur. J'ai donc pu aider Fabien à mettre en place ces modifications.

\bigskip


### Conclusion

\bigskip

Ce premier projet chez *Dernier Cri* m'a beaucoup apporté. Pour commencer, j'ai pu me familiariser aves les méthodes de gestion de projet de l'entreprise, le processus allant de la formalisation du probléme, jusque sa mise en ligne. Dans le même temps j'ai pu prendre en main les outils utiliser chez *Dernier Cri*, tel que Github, avec toute la gestion des différentes branches, les Pull Request ainsi que la gestion des issues... Ce fut une étape essenciel pour mon intégration dans l'équipe de développement.

\bigskip

Ce projet m'a également permit d'apprendre à utiliser React et Redux. Ces technologies sont aujourd'hui en pleine expensions, et évolue beaucoup et ont un belle avenir devant elles. J'ai également pu apprendre a deveopper en front-end, alors que jusque là mes compétences techniques étaient plus tournée vers du back.

\bigskip

Evidemment, j'ai connus de nombreuse difficultés lors du développemment de Photolix. Mon inexpérience m'a conduit à faire des erreurs, à fournir un résultat qui n'était pas optimal. J'ai heureusement pu compter sur mon collégue, Fabien Gavory, pour me soutenir, me corriger et rattraper certaine erreurs, surtout vers la fin du projet. Grace à cela, j'ai pu mettre en place de meilleurs pratiques durant le projet suivant.

\bigskip

Finalement, c'est une vraie chance d'avoir pu travailler dès mon arrivée sur un projet pour un client. J'ai ainsi été tout de suite confrontée aux vraie problématiques du developpement d'une application web, de la relation cliente, avec des dates butoire et des évolutions des spécifications en cours de projet.


## Finfrog

### Présentation et objectifs du projet

\bigskip

Avec l'arrivée d'un nouveau client et la nécedsité de fournir un developpeur React sur ce projet, j'ai quitté le projet Photolix pour rejoindre Finfrog.

\bigskip

Finfrog est un projet de prêt collaboratif, c'est à dire que le site propose des prêt financés par des particuliers. Les prêts proposés vont de 200 à 600 euros, à rembourser en 1 à 3 mois. Le but de ce site est d'ouvrir, en acceptant des prêts qui ne seraient pas validé par une banque.

\bigskip

Lors de mon arrivée sur le projet, un site était déjà en ligne, développé par le client. Le premier objectif était de mettre en place un nouveau design sur ce site, d'abord sur la page d'accueil, et ensuite sur les formulaires de demande de prêt.

\bigskip

Par la suite, j'ai été amené à developper de nouvelles fonctionnalités pour Finfrog, comme la partie du site réservée à la gestion des prêts par l'administrateur, les espaces emprunteur et prêteur, la génération de contrats.


### Outils utilisés

\bigskip

La projet Finfrog utilisait principalement les même outils que Photolix : utilisation de npm pour la gestion des paquets, de *Zeplin* pour étudier le design, de *React* et *Redux* etc.

\bigskip

Cependant à mon arrivée sur FinFrog, le projet était hébergé sur *Bitbucket* et non pas Github. Il a donc fallut que je m'habitue à ce nouveaux gestionaire, à son interface et ses fonctionnalités différentes de *Github*. Par la suite nous avons migré le projet sur *Github*.

\bigskip

Sur ce projet, nous avions aussi en charge la partie API et base de donnée. L'API est écrite en *Nodejs* et la base de donnée est une *postgres*, donc manipulable en *SQL*. Cependant j'ai eu peu d'occasion de manipuler la base de donnée.

\bigskip

Finalement, pour lancer les processus du site et de l'API, nous avons utilisé *PM2*. *PM2* est un gestionnaire de processus de production pour les applications *Node.js* avec un équilibreur de charge intégré. Il vous permet de garder les applications en vie pour toujours, de les recharger sans temps d'arrêt et de faciliter les tâches administratives courantes du système.

\bigskip

### Déroulement

#### Page d'accueil et demande de prêt

\bigskip

A mon arrivée sur le projet, *Dernier Cri* était chargé de l'intégration d'un nouveau design pour le site déjà existant. Cette intégration comprenait tout d'abord la page d'accueil, puis le tunnel de demande de prêt.

\bigskip



\bigskip

#### Génération de contrat

\bigskip

\bigskip

- Première partie design
-> Page d'acceuil : prendre en main le projet et ses particuliarité -> Accés restraint au debut du projet
-> Tunnel emprunteur : on rentre plus dans le techniques, la manipulation de redux

- génération de contrat

- Grosse passe pour le responsive + cross compatibilité des browsers

- Communication avec le client ? -> Surtout semaine de noel sans Laetitia

Citer le fait que je n'ai presque pas eu de code review a cause de la confidentialité

#### Arrivée d'un nouveau dev


### Conclusion



## Autres projets

### Générateur d'image pour les réseaux sociaux

\newpage

# La communauté Lilloise

Durant mon stage à Lille j'ai pu me rendre compte que la ville possédait une communauté web très active.

\bigskip

La ville a notamment reçue le label 'French Tech' fin 2014, pour récompenser son dynamiste dans le numérique et l'innovation. Ce label, en plus de récompenser les efforts de la ville, constitue le point d’entrée vers des dispositifs nationaux comme des programmes pour attirer les entrepreneurs étrangers qui veulent créer leur *start-up* en France.

\bigskip

La région profite de la présence de grands groupes nationaux comme Orange, Capgemini, IBM France, CGI, CISCO...

\bigskip

De plus Lille a mis en place un ensemble de structures favorisant l'accompagnement et la croissance des startups vers un marché mondial. La plus notable est évidemment Euratechnologie, le Pôle d'excellence économique dédié aux Technologies de l'Information et de la Communication (TIC) de la métropole lilloise. EuraTechnologies a été classé dans le top 10 des accélérateurs de *startup* d’Europe par Fundacity, et le 1er en France. Euratechnologie posséde des espaces dédiés à la recherche, la formation et l'entrepreneuriat, un incubateur et un accélérateur.

\bigskip

La région lilloise posséde d'autre espaces dédié à l'innovation, les *startups* et l'entrepreneuriat : La Plaine Images à Tourcoing et Roubaix, Eurasanté à Lille, La Haute Borne à Villeneuve d'Ascq, La Serre Numérique à Valenciennes, Le Pôle Numérique Culturel Louvre Lens...

\bigskip

La région a connu l'émergence de nombreuse entreprises, prometteuses ou déjà fructueuses : Big Ben, Ankama, OVH, Addictiz, Stereograph, Clic & Walk, Giroptic, Mazeberry, Vekia, Sparkow, Mdoloris, A-volute, Critizr, Intent Technologies...

\bigskip

Avoir eu la chance de faire mon stage dans cette région m'a permis de profiter de cette écosysteme riche et actif. J'ai pu participer à des conférences, des salons et des réunions qui m'ont beaucoup apporté, tant au niveau technique que social. Cela m'a permit de préciser mon projet professionnel, en m'immergeant dans la vie entreprenariale d'une ville.

\bigskip

## Take Off Conference

\bigskip

*Dernier Cri* m'a donné l'occasion durant mon stage d'assister à la [*Take Off Conference*](http://takeoffconf.com/2016) les 20 et 21 octobre 2016. Cet évènement a lieu depuis plusieurs années à EuraTechnologies.

\bigskip

Historiquement, ce sont les fondateurs de *Dernier Cri* qui ont créé la *Take Off Conference*, avec Florian Le Goff. Aujourd'hui ce sont d'autres acteurs de la communauté web de Lille qui ont pris le relais pour proposer une nouvelle édition.

\bigskip

La *Take Off Conference* est un cycle de conférences anglophones. L’événement dure 2 jours, et accueille des conférenciers du monde entier. Bien qu'elle reste avant tout une conférence pour les développeurs Web, elle reste accessible pour les développeurs en général.

\bigskip

*Dernier Cri* m'a permis de participer à cette conférence avec l'un de mes collègues. Ce fut une véritable chance pour moi de rencontrer et échanger avec des conférenciers du monde entier. Les conférences étaient très intéréssantes et inspirantes, sur des sujets très variés allant de la compréhension des enjeux de mise en place de nouveau outils, à des sujets plus sociaux comme l'acceuil des developpeurs anglais après le Brexit.

\bigskip

Des évènements ont également été organisé le soir pour permettre aux participants et aux conférenciers d'échanger dans un cadre plus détendu.

\bigskip

Ce fut une excellente occasion de découvrir de nouvelles technologies, de m'ouvrir à des problématiques que je ne connaissais pas ainsi que de rencontrer des développeurs qualifiés et passionnés. Lors de ses échanges, j'ai pu me rendre compte de la portée internationale de la programmation : des personnes des quatres coins du monde se retrouvaient sur les mêmes problématiques.

\bigskip

## Meetup

\bigskip

La communauté web de Lille est très active pour organisé des évenements. De très nombreux Meetup sont organisés sur différents domaines du web, acceuillant autant des experts que des débutants ou simplement des curieux.

\bigskip

Très actif dans cette communauté, *Dernier Cri* acceuille au sein de ses locaux certaines de ses rencontres. J'ai notamment eu l'occasion d'assister à des Meetup de Lille FP (*Fonctionnal programming*, c'est à dire programmation fonctionnelle) et de Lille Elixir.

\bigskip

Certains membres de l'équipe sont également investis dans ces rencontres, en tant qu'organisateur ou bien orateur. Les dirigeants de *Dernier Cri* les encouragent également beaucoup à prendre part à la vie de la communauté web. J'ai ainsi pu facilement être au courant des différents évenements Lillois et y participer avec mes collégues, ce qui m'a permis d'être bien intégré.

\bigskip

## Maker Faire

\bigskip

La Maker Faire est un autre événement majeur organisé à Lille durant mon stage. Ce concept totalement unique regroupe stands de démonstration, ateliers de découverte, spectacles et conférences autour des thèmes de la créativité, de la fabrication, des cultures Do It Yourself et Makers.

\bigskip

Cet événement, présenté par Leroy Merlin en partenariat avec la Ville de Lille et lille3000 (programme culturel de la ville de Lille), réunit des passionnés de technologies, des artisans, des industriels, des amateurs, des ingénieurs, des clubs de science, des artistes, des étudiants et des Start’Up. Ils forment la communauté des Makers et viennent pour montrer leurs créations, partager leurs connaissances...

\bigskip

*Dernier Cri* a été invité à assister à la Maker Faire, notamment car nous développons l'application web de TechShop, l'atelier collaboratif de Leroy Merlin. Dans ce contexte j'ai pu découvrir la communauté *Maker* de Lille. J'ai pu notamment décrouvrir les *repair coffee*, lieux où l'on peut amener ses appareils électroniques cassés et recevoir de l'aide pour leur réparation. Il y avait également des robots, des imprimantes 3D, des casques de réalité augmentée ... C'était un endroit plein d'inspiration et d'envie d'entreprendre.

\newpage

# Conclusion

## Personnelle

## Professionnelle

Ce stage a été très enrichissant pour moi. Il m'a permit de réaliser un développement informatique sous la houlette d'une équipe expérimenté, qui à su me transmettre des compétences techniques et méthodologiques.

J'ai aussi pu découvrir la réalité des entreprises et appliquer les notions acquises à l'université, apprendre ou de me perfectionner avec certaines technologies ou méthodes et de développer l'aptitude au travail en équipe.

Enfin, vous pouvez re-situez votre stage dans votre parcours de formation et dans votre projet professionnel. Vos objectifs ont-ils évolué ? Par exemple, en quoi ce stage confirme (ou infirme) votre choix de filière ?

-> Compétences apprises : Node React Redux ES6 Relation client Git Github pm2 npm

-> Important : relation client et autonomie, apprentissage rapide, equipe disponible et polivalente (qui peut t'aider sur tout)

-> environnement cool : Ambiance, tech off conf , meetup, plus belle vue de Lille

\newpage

# Glossaire ?

ES6
React
Redux
Code review
Talk
