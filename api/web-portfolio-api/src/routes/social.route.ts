import { Router } from 'express'
import {
  deleteSocialMedia,
  getSocialMedia,
  getSocialMedias,
  postSocialMedia,
  updatedSocialMedia,
} from '../controllers/social.controller'

const router = Router()

router.get('/', getSocialMedias)
router.get('/:id', getSocialMedia)
router.post('/', postSocialMedia)
router.put('/:id', updatedSocialMedia)
router.delete('/:id', deleteSocialMedia)

export { router }
