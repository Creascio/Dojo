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
.header {
  background-color: $dark;
  padding: 16px;
  border-bottom: solid 3px $primary;
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
