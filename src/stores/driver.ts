import { defineStore } from 'pinia'
import { useDriverAPIStore } from './driverAPI'
import { Driver, ActionType } from '@/types/driverTypes';
import { getUid } from '@/utils/getUid';
import { generateDocId } from '@/utils/docIdGenerator';

const driverAPI = useDriverAPIStore();
export const useDriverStore = defineStore('driver', {
  state: () => ({
    items: [] as Driver[],
    docIds: [] as string[],
    search: '',
    selected: [] as Driver[],
    isMobileTable: true,
    loadingTable: true,
    dialog: {
      open: false,
      name: '',
      action: '' as ActionType,
      required: true,
      inputField: {
        uid: '',
        docId: '',
        name: '',
        documentNumber: '',
        company: '',
      } as Driver
    },
    dialogDelete: {
      open: false,
      message: '',
    },
  }),
  getters: {
    selectedLen(): number {
      return this.selected.length
    },
    message(): string {
      return(this.selected.length >= 2
        ? `¿Estás seguro de eliminar ${this.selected.length} conductores?`
        : '¿Estás seguro de que quieres eliminar este conductor?'
      )
    },
  },
  actions: {
    async addDriver() {
      const uid = await getUid();
      const res = await driverAPI.addDriver({
        ...this.dialog.inputField,
        uid,
        docId: generateDocId()
      });
      if (res) {
        this.getDrivers();
        this.dialog.required = true;
      }
    },
    async getDrivers() {
      const uid = await getUid();
      const res = await driverAPI.getDrivers(uid);
      this.items = res;
      this.loadingTable = false;
    },
    async updateDriver() {
      const docId = this.dialog.inputField.docId;
      const res = await driverAPI.updateDriver(docId, this.dialog.inputField);
      if (res) {
        this.getDrivers();
      }
    },
    async confirm() {
      const actions: Record<ActionType, any> = {
        add: this.addDriver,
        update: this.updateDriver
      }
      if (!this.dialog.required) {
        actions[this.dialog.action]();
        this.dialog.open = false;
      }
    },
    async deleteConfirm() {
      this.selected = [];
      this.dialogDelete = Object.assign({});
      const responses = await driverAPI.deleteDrivers(this.docIds);

      Promise.all(responses)
        .then(res => {
          const allPromises = res.some(promise => promise);
          if (allPromises) {
            this.getDrivers();
          }
        });
    },
  }
})
