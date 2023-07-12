import { z } from 'zod'
import { breed, category, location } from './cow.constant'

const createCowZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'First name is required',
    }),

    age: z.number({
      required_error: 'age  is required',
    }),
    price: z.number({
      required_error: 'price  is required',
    }),

    location: z.enum([...location] as [string, ...string[]], {
      required_error: 'location is required',
    }),
    breed: z.enum([...breed] as [string, ...string[]], {
      required_error: 'breed is required',
    }),
    weight: z.number({
      required_error: 'weight  is required',
    }),

    label: z.string({
      required_error: 'label is required',
    }),

    category: z.enum([...category] as [string, ...string[]], {
      required_error: 'category is required',
    }),
    seller: z.string({
      required_error: 'seller is required',
    }),
  }),
})

const updateCowZod = z.object({
  body: z.object({
    name: z.string().optional(),

    agee: z.number().optional(),

    price: z.number().optional(),

    location: z.string().optional(),

    breed: z.string().email().optional(),

    weight: z.string().optional(),

    label: z.string().optional(),

    category: z.string().optional(),

    seller: z.string().optional(),
  }),
})

export const CowValidation = {
  createCowZodSchema,
  updateCowZod,
}
