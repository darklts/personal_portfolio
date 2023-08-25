import { Router } from 'express'
import {
  deleteElement,
  getElement,
  getElements,
  postElement,
  updatedElement,
} from '../controllers/element.controller'

const router = Router()

router.get('/', getElements)
router.get('/:id', getElement)
router.post('/', postElement)
router.put('/:id', updatedElement)
router.delete('/:id', deleteElement)

export { router }
