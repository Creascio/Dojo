
<template>
  <q-header class="header" :class="!isTop ? 'header-short' : ''">
    <q-toolbar>
      <router-link :to="{name: 'admin'}">
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

      <q-space />

      <div>Bienvenue Admin de Creascio</div>
      <q-btn class="q-ml-md" icon="account_circle" label="Déconnexion" @click="logOut(router)" no-caps />
    </q-toolbar>
  </q-header>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useOnScroll } from 'vue-composable';
import { useAuthStore } from 'src/stores/auth';

const router = useRouter();
const { logOut } = useAuthStore();
const { scrollTop } = useOnScroll();

const isTop = computed(() => scrollTop.value === 0);
</script>

