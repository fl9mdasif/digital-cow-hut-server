import { z } from 'zod'

const updateUserZod = z.object({
  body: z.object({
    name: z
      .object({
        firstName: z.string().optional(),
        lastName: z.string().optional(),
      })
      .optional(),
    role: z.string().optional(),
    phoneNumber: z.string().optional(),

    address: z.string().optional(),

    budget: z.string().optional(),
    income: z.string().optional(),
  }),
})

export const UserValidation = {
  updateUserZod,
}
