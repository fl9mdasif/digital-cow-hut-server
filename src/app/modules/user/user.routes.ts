import express from 'express'
import { UserController } from './user.controller'
import { UserValidation } from './user.validation'
import validateRequest from '../../middlewares/validateRequest'

const router = express.Router()

router.get('/:id', UserController.getSingleUser)

router.delete('/:id', UserController.deleteUser)

router.patch(
  '/:id',
  validateRequest(UserValidation.updateUserZod),
  UserController.updateUser,
)

router.get('/', UserController.getAllUsers)

export const UserRoutes = router
