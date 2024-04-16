import express from 'express'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'

import 'dotenv/config'

import dbConnect from './config/mongo'
import { router } from './routes'

const port = process.env.PORT || 3001

dbConnect()
  .then(() => console.log('Connected to database'))
  .catch(err => console.error(err))

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World API',
      version: '1.0.0',
      description: 'A simple API',
    },
  },
  apis: ['./routes/*.ts'],
}

const swaggerSpec = swaggerJsdoc(options)

const app = express()
app.use(express.json())
app.use(
  cors({
    origin: '*',
  })
)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use(router)

app.listen(port, () => console.log(`Server running on port ${port}`))
