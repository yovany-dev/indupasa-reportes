import { defineStore } from 'pinia'
import { getUid } from '@/utils/getUid';
import { useDriverAPIStore } from './driverAPI'

const driverAPI = useDriverAPIStore();
export const useAppBarStore = defineStore('app-bar', {
  state: () => ({
    drawer: false,
    username: '',
  }),
  getters: {
    // getters here...
  },
  actions: {
    async getUser() {
      const uid = await getUid();
      const res = await driverAPI.getUser(uid);

      if (res.status) {
        this.username = res.data.username;
      }
    },
  }
})
