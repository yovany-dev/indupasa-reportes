import { defineStore } from 'pinia'
import { getDate } from '@/utils/date';
import { getHour } from '@/utils/hour';
import { getUid } from '@/utils/getUid';
import { generateDocId } from '@/utils/docIdGenerator';
import { ActionType, CheckOut, Driver, DriverReport } from '@/types/driverTypes';
import { useDriverAPIStore } from './driverAPI';

const driverAPI = useDriverAPIStore();
export const useDriverReportStore = defineStore('driver-report', {
  state: () => ({
    items: [] as DriverReport[],
    drivers: [] as Driver[],
    driversName: [] as string[],
    selectedDriver: null,
    selectedCheckbox: [] as string[],
    isMobileTable: true,
    loadingTable: true,
    dialog: {
      open: false,
      name: '',
      action: '' as ActionType,
      required: true,
      disabled: false,
      inputField: {
        uid: '',
        docId: '',
        name: '',
        documentNumber: '',
        company: '',
        date: '',
        checkIn: '',
        checkOut: '',
        motive: '',
        completed: false,
      } as DriverReport
    },
    dialogDelete: {
      open: false,
      docId: '',
    },
  }),
  getters: {
    // getters here...
  },
  actions: {
    async addDriverReport(driverReport: DriverReport) {
      const res = await driverAPI.addDriverReport(driverReport);
      if (res) {
        this.getDriversReport();
      }
    },
    async addGuestDriver() {
      const uid = await getUid();
      const guestDriver: DriverReport = {
        ...this.dialog.inputField,
        uid,
        docId: generateDocId(),
        date: getDate(),
        checkIn: getHour(),
        checkOut: 'Pendiente',
        completed: false,
      };
      this.addDriverReport(guestDriver);
    },
    newDriverReport(driverName: string) {
      const driverReport = this.drivers.filter(driver => driver.name === driverName);
      const newDriver = {
        ...driverReport[0],
        date: getDate(),
        checkIn: getHour(),
        checkOut: 'Pendiente',
        motive: 'Descargar',
        completed: false,
      }
      this.addDriverReport(newDriver);
    },
    getCheckbox() {
      const docIds = this.items.filter(item => item.completed)
        .map(res => res.docId);
      this.selectedCheckbox = docIds;
    },
    async getDriversReport() {
      const uid = await getUid();
      const res = await driverAPI.getDriversReport(uid);
      this.items = res;
      this.loadingTable = false;
      this.getCheckbox();
    },
    async getDriversName() {
      const uid = await getUid();
      const drivers = await driverAPI.getDrivers(uid);
      const driversName = drivers.map(driver => driver.name)
      this.drivers = drivers;
      this.driversName = driversName;
    },
    async updateDriverReport() {
      const docId = this.dialog.inputField.docId;
      const res = await driverAPI.updateDriverReport(docId, this.dialog.inputField);
      if (res) {
        this.getDriversReport();
      }
    },
    async updateCheckOut(docId: string, completed: boolean) {
      const data: CheckOut = {
        checkOut: completed ? getHour() : 'Pendiente',
        completed
      }
      const res = await driverAPI.updateCheckOut(docId, data);
      if (res) {
        this.getDriversReport();
      }
    },
    async confirm() {
      const actions: Record<ActionType, any> = {
        add: this.addGuestDriver,
        update: this.updateDriverReport
      }
      if (!this.dialog.required) {
        actions[this.dialog.action]();
        this.dialog.open = false;
      }
    },
    async deleteConfirm() {
      const docId = this.dialogDelete.docId;
      const res = await driverAPI.deleteDriverReport(docId);
      if (res) {
        this.getDriversReport();
      }
      this.dialogDelete = Object.assign({});
    },
    async driverExists(docId: string) {
      const res = await driverAPI.driverExists(docId);
      if (res) this.dialog.disabled = true;
      else this.dialog.disabled = false;
    },
  }
})
