import { defineStore } from 'pinia'
import { useFirestore } from 'vuefire'
import { collection, deleteDoc, doc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore";
import { Driver } from '@/types/driverTypes';

const db = useFirestore();
export const useDriverAPIStore = defineStore('driver-api', {
  state: () => ({
    //
  }),
  getters: {
    // getters here...
  },
  actions: {
    async addDriver(driver: Driver) {
      let response = false;
      try {
        const docRef = doc(db, 'drivers', driver.docId);
        await setDoc(docRef, driver);
        response = true;
      } catch (error) {
        console.error(error);
      }
      return response
    },
    async getDrivers(uid: string) {
      const drivers: Driver[] = [];
      try {
        const q = query(collection(db, 'drivers'), where('uid', '==', uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          drivers.push(doc.data() as Driver);
        });
      } catch (error) {
        console.error(error);
      }
      return drivers;
    },
    async updateDriver(docId: string, driver: Driver) {
      let response = false;
      try {
        const docRef = doc(db, 'drivers', docId);
        await updateDoc(docRef, {
          ...driver
        });
        response = true;
      } catch (error) {
        console.error(error);
      }
      return response
    },
    async deleteDrivers(docIds: string[]) {
      let responses: Promise<boolean>[] = docIds.map(docId => {
        return new Promise(async(resolve, reject) => {
          try {
            await deleteDoc(doc(db, 'drivers', docId));
            resolve(true);
          } catch (error) {
            reject(error);
          }
          resolve(false);
        });
      });
      return responses
    },
  }
})
