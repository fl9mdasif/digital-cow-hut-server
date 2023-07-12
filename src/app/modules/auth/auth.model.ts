import { Schema, model } from 'mongoose'
import { AuthModel, IAuth } from './auth.interface'

const authSchema = new Schema<IAuth>(
  {
    // id: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
    role: {
      type: String,
      required: true,
    },
    name: {
      type: {
        firstName: {
          type: String,
          required: true,
        },
        lastName: {
          type: String,
          required: true,
        },
      },
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      unique: true,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },
    income: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)
export const AuthUser = model<IAuth, AuthModel>('Auth', authSchema)
