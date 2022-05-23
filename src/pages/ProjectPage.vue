<template>
  <q-page class="project row justify-center q-pb-md">
    <div class="col-xs-12 col-md-10 col-lg-8">
      <q-btn
        label="Retour"
        icon="arrow_back"
        color="primary"
        to="/"
        no-caps
        flat
      />

      <h1 class="q-pb-sm">{{ project?.title }}</h1>

      <h2>Objectifs</h2>
      <div class="q-pl-lg">
        <div v-for="objectiv in project?.objectives" :key="objectiv">- {{ objectiv }}</div>
      </div>

      <h2>Énoncé</h2>
      <div class="q-pl-lg">
        <div class="q-pb-md">{{ project?.instructions }}</div>

        <div v-for="sentence in project?.start" :key="sentence" v-html="sentence" />

         <div class="row items-center q-gutter-x-md q-pt-md">
           <q-btn
            v-if="project?.demo_link"
            class="demo"
            color="primary"
            label="Voir la démo"
            :href="project?.demo_link"
            :ripple="false"
            no-caps
            dense
          />

          <q-btn
            v-if="project?.start_link"
            class="q-px-sm"
            color="primary"
            label="Fichiers de démarrage"
            icon-right="open_in_new"
            :href="project?.start_link"
            :ripple="false"
            no-caps
            dense
            flat
            target="blank"
          />
         </div>
      </div>

      <h2>Documentation</h2>
      <div class="q-pl-lg q-gutter-x-sm">
        <q-btn
          v-for="link in project?.documentation_link"
          :key="link.label"
          class="q-px-sm"
          color="primary"
          :label="link.label"
          icon-right="open_in_new"
          :href="link.href"
          :ripple="false"
          no-caps
          dense
          flat
          target="blank"
        />

      </div>

      <h2>Pas à Pas</h2>
      <div class="q-pt-sm q-pl-lg q-gutter-y-md">
        <div v-for="(step, index) in project?.steps" :key="index">
          {{index + 1}}. <span v-html="step" />
        </div>
      </div>

      <h2>Correction</h2>
      <div class="q-pl-lg">
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

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import projects from 'src/data/projects'

const route = useRoute();
const project = projects.find(p => p.id === route.params.id)

</script>

<style lang="scss">
.project {
  padding-top: 30px;
  font-size: 15px;

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
