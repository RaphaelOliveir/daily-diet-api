import type { FastifyInstance } from "fastify";
import z from "zod";
import { knex } from "../database.js";

export async function mealsRoutes(app: FastifyInstance) {
    app.post('/', async (request, reply) => {
        const createMealBodySchema = z.object({
            name: z.string(),
            description: z.string(),
            dateTime: z.string(),
            isOnDiet: z.boolean()
      })

        const { name, description, dateTime, isOnDiet } = createMealBodySchema.parse(
            request.body,
      )

      await knex('meals').insert({
        id: crypto.randomUUID(),
        name,
        description,
        dateTime,
        isOnDiet
      })

      return reply.status(201).send()
    })

    app.get('/', async () => {
        const meals = await knex('meals').select('*')

        return {
            meals
        }
    })
}