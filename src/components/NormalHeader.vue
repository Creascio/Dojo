<template>
  <q-header class="header" :class="!isTop ? 'header-short' : ''">
    <q-toolbar>
      <router-link :to="{name: 'home'}">
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
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useOnScroll } from 'vue-composable';

const { scrollTop } = useOnScroll();

const isTop = computed(() => scrollTop.value === 0);

</script>

