<template>
  <q-page class="project row justify-center">
    <div class="col-xs-12 col-md-10">
      <q-btn
        label="Retour"
        icon="arrow_back"
        color="primary"
        to="/"
        no-caps
        flat
      />

      <h1 class="q-pb-sm">Créer une variable réactive</h1>

      <h2>Objectifs</h2>
      <div class="q-pl-lg">
        <div>- Manipulations de base d'un tableau</div>
        <div>- Manipulations de base des évènements</div>
        <div>- Manipulations de variable réactive</div>
      </div>

      <h2>Énoncé</h2>
      <div class="q-pl-lg">
        <div>
          Le but de ce projet est de créer un input dont la valeur s'affiche
          réactivement dans un label situé sur la même page. Lorsque l'on écrit
          dans l'input, le même texte s'écrit et s'affiche tout seul en dessous.
        </div>

        <q-btn
          class="q-mt-md demo"
          color="primary"
          label="Voir la démo"
          href="demo"
          :ripple="false"
          no-caps
          dense
        />

        <div class="q-py-lg q-gutter-x-sm row items-center">
          <q-btn
            class="q-px-sm"
            color="primary"
            label="Fichiers de démarrage"
            icon-right="open_in_new"
            href="https://github.com/Creascio/Jspas/tree/%C3%A9nonc%C3%A9s/reactiv-input"
            :ripple="false"
            no-caps
            dense
            flat
            target="blank"
          />

          <div>
            Le but est de ne pas avoir à modifier les fichiers "index.html" et
            "style.css". Tu ne dois modifier que le fichier "script.js"
          </div>
        </div>

        <div>
          Ce projet s'adresse d'abord aux novices du Javascript. Si tu as déjà
          de l'expérience tu peux réussir le projet sans t'aider de la section
          Pas à Pas. Si tu as des questions n'hésite pas à les poser sur le
          Discord !
        </div>
      </div>

      <h2>Documentation</h2>
      <div class="q-pl-lg q-gutter-x-sm">
        <q-btn
          class="q-px-sm"
          color="primary"
          label="Ajouter un EventListener"
          icon-right="open_in_new"
          href="https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener"
          :ripple="false"
          no-caps
          dense
          flat
          target="blank"
        />
        <q-btn
          class="q-px-sm"
          color="primary"
          label="Créer une fonction fléchée"
          icon-right="open_in_new"
          href="https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener"
          :ripple="false"
          no-caps
          dense
          flat
          target="blank"
        />
      </div>

      <h2>Pas à Pas</h2>
      <div class="q-pl-lg">
        <div>
          1. Créer une fonction <span class="highlight">onPageLoad</span>. Cette
          fonction sera executée une fois que la page aura fini d'être chargée.
        </div>
        <div>
          2. Ajouter un écouteur d'évènement au niveau de la page sur
          l'évènement <span class="highlight">load</span>. Cet écouteur execute
          la fonction <span class="highlight">onPageLoad</span>. (L'écouteur
          doit être placé à la toute fin du script)
        </div>
        <div>
          3. Dans la fonction <span class="highlight">onPageLoad</span>, il faut
          récupérer un accès vers l'input ayant pour id
          <span class="highlight">randomInput</span>
        </div>
        <div>
          4. Il faut également récupérer un accès vers la div ayant pour id
          <span class="highlight">reactivText</span>
        </div>
        <div>
          5. Toujours dans la fonction
          <span class="highlight">onPageLoad</span>, il faut ajouter un second
          écouteur d'évènement au niveau de l'input récupéré un peu plus tôt et
          sur l'évènement <span class="highlight">input</span>. Cet écouteur va
          exécuter de la logique au moment où l'on va écrire dans l'input. Pour
          ce faire on va passer la logique sous la forme d'une fonction anonyme
          (voir la documentation). Dans notre cas c'est une meilleure façon de
          façon de faire plutôt que de créer une fonction à part car le code ne
          va être utilisé qu'à un seul endroit. On place
          <span class="highlight">event</span> en paramètre d'entrée de la
          fonction. Ce paramètre contient un accès aux données de l'input.
        </div>
        <div>
          6. Dans le corps de la fonction anonyme, insérer dans le code HTML de
          la div <span class="highlight">reactivText</span> la valeur de
          l'input. Cette valeur est récupérable à partir du paramètre donné en
          entrée <span class="highlight">event</span> (conseil, utiliser un
          <span class="highlight">console.log</span> pour parcourir le contenu
          de <span class="highlight">event</span>)
        </div>
      </div>

      <h2>Correction</h2>
      <div>
        <q-btn
          class="q-px-sm"
          color="primary"
          label="Fichiers de correction"
          icon-right="open_in_new"
          href="https://github.com/Creascio/Jspas/tree/corrections/reactiv-input"
          :ripple="false"
          no-caps
          dense
          flat
          target="blank"
        />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.project {
  padding-top: 30px;

  h2 {
    padding-top: 15px;
    padding-bottom: 4px;
  }

  .demo {
    padding: 4px 60px;
  }

  .highlight {
    color: $primary;
  }
}
</style>
