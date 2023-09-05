<template>
  <div class="flex flex-col justify-center items-center h-3/4">
    <button @click="logout" class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Logout</button>
    <h1 class="text-3xl font-semibold mb-4">Welcome, {{ userName }}</h1>
  </div>
</template>

<script lang="ts">
import router from '../router';
import { useUserStore } from '../stores/user';
import { auth } from '../firebase'; // Import the auth instance from firebase.js
import { signOut } from 'firebase/auth';

export default {
  name: 'Dashboard',
  setup() {
    const userStore = useUserStore();

    const logout = async () => {
      try {
        await signOut(auth); // Use the auth instance here
        userStore.logout();
        // Redirect to login page
        router.push('/login');
      } catch (error) {
        console.error("Error signing out:", error);
      }
    };

    return {
      userName: userStore.userName,
      logout
    };
  }
};
</script>
