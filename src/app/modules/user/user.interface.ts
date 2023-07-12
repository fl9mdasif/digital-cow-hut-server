// {
//     "password":"abrakadabra",
//     "role": "buyer",
//
//     "phoneNumber":"01711111111",
//     "address": "Chattogram",
//     "budget":30000  // money to buy the cow
//     "income":0 // By Default 0
//    }

import { Model } from 'mongoose'
// import { IManagementDepartment } from '../managementDepartment/managementDepartment.interface'

export type UserName = {
  firstName: string
  lastName: string
}

export type IUser = {
  role: string
  // id: string
  password: string
  name: UserName
  phoneNumber: string
  address: string
  budget: number
  income: number
}

export type UserModel = Model<IUser, Record<string, unknown>>

export type IUserFilters = {
  searchTerm?: string
  id?: string
  phoneNumber?: string
}
