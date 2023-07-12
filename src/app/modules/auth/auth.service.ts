import { IAuth } from './auth.interface'
import { AuthUser } from './auth.model'

const createUser = async (payload: IAuth): Promise<IAuth | null> => {
  const result = await AuthUser.create(payload)
  // console.log(result)
  return result
}

// const createBuyer = async (
//   buyer: IUser,
//   user: IAuth,
// ): Promise<IAuth | null> => {
//   // default password
//   if (!user.password) {
//     user.password = config.default_user_password as string
//   }
//   // set role
//   user.role = 'buyer'

//   // generate faculty id
//   let newUserAllData = null
//   const session = await mongoose.startSession()
//   try {
//     session.startTransaction()

//     const id = await generateBuyerId()
//     user.id = id
//     buyer.id = id

//     const newBuyer = await AuthUser.create([buyer], { session })

//     if (!newBuyer.length) {
//       throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create user ')
//     }

//     user.user = newBuyer[0]._id

//     const newUser = await User.create([user], { session })

//     if (!newUser.length) {
//       throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create user')
//     }
//     newUserAllData = newUser[0]
//     await session.commitTransaction()
//     await session.endSession()
//   } catch (error) {
//     await session.abortTransaction()
//     await session.endSession()
//     throw error
//   }

//   if (newUserAllData) {
//     newUserAllData = await AuthUser.findOne({ id: newUserAllData.id }).populate(
//       {
//         path: 'buyer',
//         populate: [
//           {
//             path: 'user',
//           },
//         ],
//       },
//     )
//   }

//   return newUserAllData
// }

export const AuthService = {
  createUser,
}
