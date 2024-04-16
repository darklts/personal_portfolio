import { Router } from 'express'
import { multiUpload, singleUpload } from '../controllers/upload.controller'

const router = Router()

router.post('/imageUpload', singleUpload)
router.post('/multiUpload', multiUpload)
