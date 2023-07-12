import { Request, RequestHandler, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { IAuth } from './auth.interface'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { AuthService } from './auth.service'

const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...userData } = req.body
    const result = await AuthService.createUser(userData)

    sendResponse<IAuth>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user-auth created successfully!',
      data: result,
    })
  },
)

export const AuthController = {
  createUser,
}
