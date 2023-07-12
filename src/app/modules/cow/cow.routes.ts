import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { CowController } from './cow.controller'
import { CowValidation } from './cow.validation'
// import { Cow } from './cow.model'

const router = express.Router()

router.get('/:id', CowController.getSingleCow)

router.delete('/:id', CowController.deleteCow)

router.patch(
  '/:id',
  validateRequest(CowValidation.updateCowZod),
  CowController.updateCow,
)

router.post(
  '/',
  validateRequest(CowValidation.createCowZodSchema),
  CowController.createCow,
)

router.get('/', CowController.getAllCows)

export const CowsRoutes = router

// auth
// users
