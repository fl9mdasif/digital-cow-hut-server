import { SortOrder } from 'mongoose'
import { paginationHelpers } from '../../../helpers/paginationHelper'
import { IGenericResponse } from '../../../interfaces/common'
import { IPaginationOptions } from '../../../interfaces/pagination'
import { cowSearchableFields } from './cow.constant'
import { ICow, ICowFilters } from './cow.interface'
import { Cow } from './cow.model'

const createCow = async (payload: ICow): Promise<ICow | null> => {
  const result = (await Cow.create(payload)).populate('seller')
  return result
}

const getSingleCow = async (id: string): Promise<ICow | null> => {
  // const result = await Cow.findOne({ id }).populate('seller')
  const result = await Cow.findById(id).populate('seller')
  return result
}

const deleteCow = async (id: string): Promise<ICow | null> => {
  const result = await Cow.findByIdAndDelete(id)
  return result
}

const updateCow = async (
  id: string,
  payload: Partial<ICow>,
): Promise<ICow | null> => {
  const result = await Cow.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  }).populate('seller')
  return result
}

const getAllCows = async (
  filters: ICowFilters,
  paginationOptions: IPaginationOptions,
): Promise<IGenericResponse<ICow[]>> => {
  const { searchTerm, ...filtersData } = filters
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions)

  const andConditions = []

  if (searchTerm) {
    andConditions.push({
      $or: cowSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    })
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    })
  }

  const sortConditions: { [key: string]: SortOrder } = {}

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder
  }
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {}

  const result = await Cow.find(whereConditions)
    .populate('seller')
    .sort(sortConditions)
    .skip(skip)
    .limit(limit)

  const total = await Cow.countDocuments(whereConditions)

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  }
}

export const CowService = {
  createCow,
  getSingleCow,
  deleteCow,
  updateCow,
  getAllCows,
}
