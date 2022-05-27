<template>
  <q-layout view="lHh Lpr lFf">
    <admin-header />

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
import { useRouter } from 'vue-router';
import { useAuthStore } from 'src/stores/auth';

import AdminHeader from 'src/components/AdminHeader.vue';

const router = useRouter();
const { checkLogged, isLogged } = useAuthStore();

checkLogged();
if(!isLogged) {
  router.push({ name: 'sign-in' })
}
</script>

<style lang="scss">
.footer {
  border-top: solid 2px $primary;
  position: absolute;
  background-color: $dark;
  bottom: 0;
  padding: 16px;
}
</style>
