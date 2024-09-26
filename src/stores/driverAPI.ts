import { defineStore } from 'pinia'
import { useFirestore } from 'vuefire'
import { collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore";
import { Driver, DriverReport } from '@/types/driverTypes';

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
    async addDriverReport(driverReport: DriverReport) {
      let response = false;
      try {
        const docRef = doc(db, 'driversReport', driverReport.docId);
        await setDoc(docRef, driverReport);
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
    async getDriversReport(uid: string) {
      const driversReport: DriverReport[] = [];
      try {
        const q = query(collection(db, 'driversReport'), where('uid', '==', uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          driversReport.push(doc.data() as DriverReport);
        });
      } catch (error) {
        console.error(error);
      }
      return driversReport;
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
    async updateDriverReport(docId: string, driverReport: DriverReport) {
      let response = false;
      try {
        const docRef = doc(db, 'driversReport', docId);
        await updateDoc(docRef, {
          ...driverReport
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
    async deleteDriverReport(docId: string) {
      let response = false;
      try {
        await deleteDoc(doc(db, 'driversReport', docId));
        response = true;
      } catch (error) {
        console.error(error);
      }
      return response
    },
    async driverExists(docId: string) {
      try {
        const docRef = doc(db, 'drivers', docId);
        const res = await getDoc(docRef);
        return res.exists();
      } catch (error) {
        console.error(error);
      }
      return false;
    },
  }
})
