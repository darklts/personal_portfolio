import { Router } from 'express'
import {
  deleteSections,
  getSection,
  getSections,
  postSections,
  updatedSections,
} from '../controllers/section.controller'

const router = Router()

router.get('/', getSections)
router.get('/:id', getSection)
router.post('/', postSections)
router.put('/:id', updatedSections)
router.delete('/:id', deleteSections)

export { router }
