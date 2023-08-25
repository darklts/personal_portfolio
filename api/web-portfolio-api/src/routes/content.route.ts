import { Router } from 'express'
import {
  deleteContent,
  getContent,
  getContents,
  postContent,
  updatedContent,
} from '../controllers/content.controller'

const router = Router()

router.get('/', getContents)
router.get('/:id', getContent)
router.post('/', postContent)
router.put('/:id', updatedContent)
router.delete('/:id', deleteContent)

export { router }
