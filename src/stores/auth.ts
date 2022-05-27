import { defineStore } from 'pinia';

// Firebase
import { signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { auth } from 'src/boot/firebase';
import { Notify } from 'quasar';
import { Router } from 'vue-router';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
  }),

  getters: {
    isLogged(): boolean {
      return this.user !== null;
    },
    getUser(): User | null {
      return this.user;
    },
  },

  actions: {
    checkLogged() {
      const curUser: User | null = auth?.currentUser ?? null;
      if (curUser && this.user === null) {
        this.user = curUser;
      }
    },
    async signIn(router: Router, email: string, password: string) {
      if (auth) {
        await signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            this.user = userCredential.user;

            router.push({ name: 'admin' });
          })
          .catch((error) => {
            let message = '';
            switch (error.code) {
              case 'auth/invalid-email':
                message = 'Vous devez entrer une email valide';
                break;
              case 'auth/user-not-found':
                message = 'Le login ou le mot de passe est incorrect';
                break;
              default:
                message = 'Une erreur est survenue';
                break;
            }

            Notify.create({
              message,
              position: 'top',
              color: 'negative',
            });
          });
      }
    },
    logOut(router: Router) {
      if (auth) {
        signOut(auth);
        this.user = null;

        router.push({ name: 'sign-in' });
      }
    },
  },
});
