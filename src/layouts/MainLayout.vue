<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="header" :class="!isTop ? 'header-short' : ''">
      <q-toolbar>
        <router-link to="/">
          <q-img
            class="logo"
            src="logo.png"
            :style="isTop ? 'width: 40px' : 'width: 30px'"
          />
        </router-link>

        <q-toolbar-title class="q-ml-md" v-if="isTop">
          <router-link to="/">
            <h1>Creascio <span class="light">Dojo</span></h1>
          </router-link>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container class="q-pa-md">
      <router-view />
    </q-page-container>

    <q-footer class="footer row items-center justify-between">
      <div>
        <q-btn label="Notre discord" icon="discord"  href="https://discord.gg/vtkdzJbGq4" target="_blank" no-caps flat />
      </div>

      <div>Ce site web à été créé pour vous proposer des exercices / projets afin de vous exercer sur les technos de vos choix.</div>

      <div> Par Léo SALLARD et Sofia DA SILVA RIBEIRO </div>
    </q-footer>
  </q-layout>
</template>

<script lang="ts" setup>
import { Ref, ref } from 'vue';

const isTop: Ref<boolean> = ref(false);

const handleScroll = () => {
  isTop.value = window.scrollY === 0;
};

window.addEventListener('scroll', handleScroll);
</script>

<style lang="scss">
.footer {
  border-top: solid 2px $primary;
  position: absolute;
  background-color: $dark;
  bottom: 0;
  padding: 16px;
}

.header {
  background-color: $dark;
  padding: 16px;
  border-bottom: solid 2px $primary;
  transition: all linear 0.2s;

  .logo {
    transition: all linear 0.2s;
  }

  &-short {
    padding: 8px 16px;

    .logo {
      margin-left: 5px;
    }
  }

  .light {
    padding-left: 8px;
    font-weight: 500;
    font-size: 1.8rem;
  }
}
</style>
