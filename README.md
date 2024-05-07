# TD-Classes-MVC

Ce TP vise à découvrir l'utilisation des modules ES6, des classes en JS, le patron de conception Sujet/Observateur et l'architecture Modèle/Vue/Contrôleur. Pour cela, une annexe nous est donnée pour la bonne réalisation du TP.

### Avec les modules

On vise dans cette partie, à utiliser des modules faisant référence à des éléments contenus dans d'autres fichiers. On nous demande de supprimer le scripte "counter.js" du fichier HTML, on remarque alors une erreur provenant du fait que counter est défini dans le fichier que nous venons de supprimer. Par conséquent, le fichier "application.js" ne dispose pas de la variable counter, on verra dans la suite 'export' qui permet d'atteindre la valeur de counter.

### Un peu mieux

Dans cette partie, on emploie le mot clé 'export' pour régler le problème consaté précédemment. Cependant, si on enlève le mot clé à notre variable counter mais que l'on conserve le 'export', on obtient une erreur. En effet, on obtient une erreur concernant la variable counter qui n'est plus accessible dans les autres modules.
