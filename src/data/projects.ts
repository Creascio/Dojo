export default [
  {
    id: '00001',
    title: 'Créer une variable réactive',
    description:
      "Créer une page contenant un input dont la valeur s'affiche réactivement dans un label.",
    tech: 'Javascript',
    level: 'Débutant',
    time: 20,

    // course
    objectives: [
      'Manipulations de base des évènements',
      "Manipulations d'une variable réactive",
    ],
    instructions:
      "Le but de ce projet est de créer un input dont la valeur s'affiche réactivement dans un label situé sur la même page. Lorsque l'on écrit dans l'input, le même texte s'écrit et s'affiche tout seul en dessous. ✨",
    demo_link: '',
    start: [
      'Nous mettons à ta disposition des fichiers de démarrage, le but est de ne pas avoir à modifier les fichiers <span class="highlight">index.html</span> et <span class="highlight">style.css</span>. Tu ne dois modifier que le fichier <span class="highlight">script.js</span>. ☝',
      "Ce projet s'adresse d'abord aux novices du Javascript. Si tu as déjà de l'expérience tu peux réussir le projet sans t'aider de la section <span class=\"highlight\">Pas à Pas</span>. Si tu as des questions n'hésite pas à les poser sur le <span class=\"highlight\">Discord</span> !",
    ],
    start_link:
      'https://github.com/Creascio/Jspas/tree/%C3%A9nonc%C3%A9s/reactiv-input',
    documentation_link: [
      {
        label: 'Ajouter un EventListener',
        href: 'https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener',
      },
      {
        label: 'Créer une fonction fléchée',
        href: 'https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener',
      },
    ],
    steps: [
      'Créer une fonction <span class="highlight">onPageLoad</span>. Cette fonction sera executée une fois que la page aura fini d\'être chargée.',
      "Ajouter un écouteur d'évènement au niveau de la page sur l'évènement <span class='highlight'>load</span>. Cet écouteur execute la fonction <span class='highlight'>onPageLoad</span>. (L'écouteur doit être placé à la toute fin du script)",
      "Dans la fonction <span class='highlight'>onPageLoad</span>, il faut récupérer un accès vers l'input ayant pour id <span class='highlight'>randomInput</span>",
      'Il faut également récupérer un accès vers la div ayant pour id <span class="highlight">reactivText</span>',
      "Toujours dans la fonction <span class=\"highlight\">onPageLoad</span>, il faut ajouter un second écouteur d'évènement au niveau de l'input récupéré un peu plus tôt et sur l'évènement <span class=\"highlight\">input</span>. Cet écouteur va exécuter de la logique au moment où l'on va écrire dans l'input. Pour ce faire on va passer la logique sous la forme d'une fonction anonyme (voir la documentation). Dans notre cas c'est une meilleure façon de façon de faire plutôt que de créer une fonction à part car le code ne va être utilisé qu'à un seul endroit. On place <span class=\"highlight\">event</span> en paramètre d'entrée de la fonction. Ce paramètre contient un accès aux données de l'input.",
      "Dans le corps de la fonction anonyme, insérer dans le code HTML de la div <span class='highlight'>reactivText</span> la valeur de l'input. Cette valeur est récupérable à partir du paramètre donné en entrée <span class='highlight'>event</span> (conseil, utilise un <span class='highlight'>console.log</span> pour parcourir le contenu de <span class='highlight'>event</span> 😉)",
    ],
    correction_link: '',
  },
  {
    id: '00002',
    title: 'Créer une liste réactive',
    description:
      "Créer une liste de courses où l'on peut ajouter et supprimer des ingrédients.",
    tech: 'Javascript',
    level: 'Débutant',
    time: 40,

    //course
    objectives: [
      "Manipulations avancées d'un tableau",
      'Manipulations avancées des évènements',
      'Manipulations avancées des variables réactives',
    ],
    instructions:
      "Le but de ce projet est de créer une liste de courses pour acheter des fruits. On doit pouvoir afficher les fruits que l'on veut acheter, on doit également pouvoir ajouter et retirer des fruits de la liste. Enfin on voudra également pouvoir trier les fruits dans la liste par ordre alphabétique",
    demo_link: '',
    start: [
      'Nous mettons à ta disposition des fichiers de démarrage, le but est de ne pas avoir à modifier les fichiers <span class="highlight">index.html</span> et <span class="highlight">style.css</span>. Tu ne dois modifier que le fichier <span class="highlight">script.js</span>. ☝',
      "Ce projet s'adresse d'abord aux novices du Javascript. Si tu as déjà de l'expérience tu peux réussir le projet sans t'aider de la section <span class=\"highlight\">Pas à Pas</span>. Si tu as des questions n'hésite pas à les poser sur le <span class=\"highlight\">Discord</span> !",
    ],
    start_link:
      'https://github.com/Creascio/Jspas/tree/%C3%A9nonc%C3%A9s/reactiv-list',
    documentation_link: [
      {
        label: 'Manipuler un tableau',
        href: 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array',
      },
      {
        label: 'Ajouter un EventListener',
        href: 'https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener',
      },
      {
        label: 'Créer une fonction fléchée',
        href: 'https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener',
      },
    ],
    steps: [],
    correction_link:
      'https://github.com/Creascio/Jspas/tree/corrections/reactiv-list',
  },
];
