export interface Driver {
  uid: string
  docId: string,
  name: string,
  documentNumber: string,
  company: string,
}

export type ActionType = 'add' | 'update'

export interface DriverReport extends Driver {
  date: string,
  checkIn: string,
  checkOut: string,
  motive: string,
}
