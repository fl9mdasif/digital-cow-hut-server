import { Request, RequestHandler, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { ICow } from './cow.interface'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { CowService } from './cow.service'
import pick from '../../../shared/pick'
import { cowFilterableFields } from './cow.constant'
import { paginationFields } from '../../../constant/pagination'
// import { Cow } from './cow.model'

const createCow: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...userData } = req.body
    const result = await CowService.createCow(userData)

    sendResponse<ICow>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'cows created successfully!',
      data: result,
    })
  },
)

const getAllCows = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, cowFilterableFields)
  const paginationOptions = pick(req.query, paginationFields)

  const result = await CowService.getAllCows(filters, paginationOptions)

  sendResponse<ICow[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'cows retrieved successfully !',
    meta: result.meta,
    data: result.data,
  })
})

const getSingleCow = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await CowService.getSingleCow(id)
  // console.log(result)

  sendResponse<ICow>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'cow retrieved successfully !',
    data: result,
  })
})

const deleteCow = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await CowService.deleteCow(id)

  sendResponse<ICow>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cow deleted successfully',
    data: result,
  })
})

const updateCow = catchAsync(
  catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params
    const updatedData = req.body
    const result = await CowService.updateCow(id, updatedData)

    sendResponse<ICow>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Cow updated successfully',
      data: result,
    })
  }),
)

export const CowController = {
  createCow,
  getSingleCow,
  deleteCow,
  updateCow,
  getAllCows,
}
