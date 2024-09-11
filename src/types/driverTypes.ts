export interface Driver {
  uid: string
  docId: string,
  name: string,
  documentNumber: string,
  company: string,
}

export type ActionType = 'add' | 'update'
