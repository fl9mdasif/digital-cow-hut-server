import { Schema, model } from 'mongoose'
import { CowModel, ICow } from './cow.interface'
import { breed, category, location } from './cow.constant'

const cowSchema = new Schema<ICow>(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      enum: location,
    },
    breed: {
      type: String,
      enum: breed,
      // required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: category,
    },
    seller: {
      type: Schema.Types.ObjectId,
      ref: 'Auth', // which schema has created the collection we are looking for
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)
export const Cow = model<ICow, CowModel>('Cow', cowSchema)
