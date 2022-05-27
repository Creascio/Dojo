<template>
  <q-page class="row justify-center items-center">
    <div class="col-4 q-gutter-y-lg">
      <h1 class="text-center">Connexion</h1>
      <q-input class="input" v-model="email" placeholder="Email" borderless />
      <q-input class="input" v-model="password" type="password" placeholder="Mot de passe" borderless />
      <q-btn class="fit" label="Connexion" color="primary" @click="signIn(router, email, password)" no-caps />
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { Ref, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from 'src/stores/auth';

const router = useRouter();
const email: Ref<string> = ref('');
const password: Ref<string> = ref('');

const { signIn, checkLogged, isLogged } = useAuthStore();

checkLogged();
if(isLogged) {
  router.push({ name: 'admin' })
}

</script>

