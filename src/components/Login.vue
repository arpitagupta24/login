<template>
  <div>
    <form @submit.prevent="login" class="flex flex-col">
      <div class="m-20 p-8"><input v-model="email" placeholder="Email" /></div>
      <div class="m-20"><input type="password" v-model="password" placeholder="Password" /></div>
      <button type="submit" class="m-20">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { auth } from '../firebase'; // Import the auth instance from firebase.js
import { useUserStore } from '../stores/user';
import router from '../router';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default {
  name: 'Login',
  setup() {
    const email = ref('');
    const password = ref('');
    const userStore = useUserStore();

    const login = async () => {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value); // Use the auth instance here
        const user = userCredential.user;
        userStore.setUser(user.uid || '', user.displayName || '');
        // Redirect to dashboard
        router.push('/');
      } catch (error) {
        console.error("Error signing in:", error);
      }
    };

    return {
      email,
      password,
      login
    };
  }
};
</script>
