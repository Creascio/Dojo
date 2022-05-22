<template>
  <q-page class="home-list row justify-center">
    <div class="col-xs-12 col-md-8">
      <div class="row q-gutter-md justify-between items-center">
        <q-btn-dropdown
          class="btn"
          color="primary"
          icon="settings"
          :label="`Tech : ${technology}`"
          :ripple="false"
          no-icon-animation
          no-caps
        >
          <q-list>
            <q-item clickable v-close-popup @click="technology = 'Tous'">
              <q-item-section>
                <q-item-label>Tous</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="technology = 'Javascript'">
              <q-item-section>
                <q-item-label>Javascript</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <q-btn-dropdown
          class="btn"
          color="primary"
          icon="north_east"
          :label="`Niveau : ${level}`"
          :ripple="false"
          no-icon-animation
          no-caps
        >
          <q-list>
            <q-item clickable v-close-popup @click="level = 'Tous'">
              <q-item-section>
                <q-item-label>Tous</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="level = 'Débutant'">
              <q-item-section>
                <q-item-label>Débutant</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <q-space />

        <q-input
          class="input"
          v-model="search"
          placeholder="Rechercher... "
          dense
          borderless
        >
          <template v-slot:prepend>
            <q-icon name="search" color="primary" />
          </template>
        </q-input>
      </div>
    </div>

    <div class="list col-xs-12 col-md-8 q-gutter-y-md">
      <q-item
        v-for="project in projects"
        :key="project.id"
        class="card row"
        :to="'/project/' + project.id"
      >
        <div class="image"></div>

        <div class="col q-pt-sm">
          <div class="row q-gutter-x-lg q-pb-md">
            <div>
              <div class="row items-center">
                <q-icon name="settings" />
                <div class="q-ml-sm">{{ project.tech }}</div>
              </div>
            </div>

            <div>
              <div class="row items-center">
                <q-icon name="north_east" />
                <div class="q-ml-sm">{{ project.level }}</div>
              </div>
            </div>

            <div>
              <div class="row items-center">
                <q-icon name="schedule" />
                <div class="q-ml-sm">{{ project.time }} min</div>
              </div>
            </div>
          </div>

          <h2 class="q-pt-sm">{{ project.title }}</h2>
          <div class="text-justify">{{ project.description }}</div>
        </div>
      </q-item>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import projects from 'src/data/projects';

const technology = ref('Tous');
const level = ref('Tous');
const search = ref('');
</script>

<style lang="scss">
.home-list {
  margin-top: 60px;
  min-height: 0 !important;

  .list {
    margin-top: 40px;
  }

  .card {
    padding: 12px;
    padding-right: 20px;
    min-height: 180px;
    background-color: $less-dark;
    border-radius: 6px;
    cursor: pointer;
    transition: linear 0.2s;

    &:hover {
      background-color: #24243b;
    }

    .image {
      margin-right: 20px;
      width: 270px;
      height: 160px;
      background-color: $dark;
      border-radius: 6px;
    }
  }

  .btn {
    width: 220px;
    height: 30px;
  }

  .input {
    padding: 0 20px;
    background-color: $less-dark;
    border-radius: 6px;
    transition: linear 0.2s;

    &:hover {
      background-color: #24243b;
    }

    input {
      width: 180px;
      color: white;
    }
  }
}
</style>
