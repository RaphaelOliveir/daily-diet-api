import { fastify } from 'fastify'
import { mealsRoutes } from './routes/meals.js'

const app = fastify()

app.register(mealsRoutes, {
  prefix: 'meals',
})

const PORT = 3333

await app.listen({
    port: PORT
})

console.log(`Server is running on ${PORT}`)