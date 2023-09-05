import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    userId: '',
    userName: '',
  }),
  actions: {
    setUser(id: string, name: string) {
      this.userId = id;
      this.userName = name;
    },
    logout() {
      this.userId = '';
      this.userName = '';
    }
  }
});
