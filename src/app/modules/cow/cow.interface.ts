import { Model, Types } from 'mongoose'
import { IUser } from '../user/user.interface'

export type ILocation =
  | 'Dhaka'
  | 'Chattogram'
  | 'Barishal'
  | 'Rajshahi'
  | 'Sylhet'
  | 'Comilla'
  | 'Rangpur'
  | 'Mymensingh'

export type IBreed =
  | 'Brahman'
  | 'Nellore'
  | 'Sahiwal'
  | 'Gir'
  | 'Indigenous'
  | 'Tharparkar'
  | 'Kankrej'

export type ICategory = 'Dairy' | 'Beef' | 'DualPurpose'

export type ICow = {
  name: string
  age: number
  price: number
  location: string
  breed: string
  weight: number
  label: string
  category: string
  seller: Types.ObjectId | IUser
}

export type CowModel = Model<ICow, Record<string, unknown>>

export type ICowFilters = {
  searchTerm?: string
  name?: string
  age?: number
  price?: number
  weight?: number
  breed?: IBreed
  category?: ICategory
  label?: string
}
