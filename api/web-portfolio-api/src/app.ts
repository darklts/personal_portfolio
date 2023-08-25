import express from 'express'
import cors from 'cors'

import 'dotenv/config'

import dbConnect from './config/mongo'
import { router } from './routes'

const port = process.env.PORT || 3001

dbConnect()

const app = express()
app.use(express.json())
app.use(
  cors({
    origin: '*',
  })
)

app.use(router)

app.listen(port, () => console.log(`Server running on port ${port}`))
