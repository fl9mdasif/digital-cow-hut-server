import { Model } from 'mongoose'
// import { IUser } from '../user/user.interface'

export type UserName = {
  firstName: string
  lastName: string
}
export type IAuth = {
  id: string
  role: string
  password: string
  // user?: Types.ObjectId | IUser
  name: UserName
  phoneNumber: string
  address: string
  budget: number
  income: number
}

export type AuthModel = Model<IAuth, Record<string, unknown>>
