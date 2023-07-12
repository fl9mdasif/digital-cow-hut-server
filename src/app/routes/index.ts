import express from 'express'
import { UserRoutes } from '../modules/user/user.routes'
import { AuthRoutes } from '../modules/auth/auth.routes'
import { CowsRoutes } from '../modules/cow/cow.routes'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/cows',
    route: CowsRoutes,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
