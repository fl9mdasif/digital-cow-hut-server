import { IBreed, ICategory, ILocation } from './cow.interface'

export const location: ILocation[] = [
  'Dhaka',
  'Chattogram',
  'Barishal',
  'Rajshahi',
  'Sylhet',
  'Comilla',
  'Rangpur',
  'Mymensingh',
]

export const breed: IBreed[] = [
  'Brahman',
  'Nellore',
  'Sahiwal',
  'Gir',
  'Indigenous',
  'Tharparkar',
  'Kankrej',
]

export const cowFilterableFields = [
  'searchTerm',
  'age',
  'price',
  'location',
  'breed',
  'weight',
  'label',
  'category',
]

export const cowSearchableFields = [
  'name',
  'price',
  'age',
  'weight',
  'location',
]

export const category: ICategory[] = ['Dairy', 'Beef', 'DualPurpose']
