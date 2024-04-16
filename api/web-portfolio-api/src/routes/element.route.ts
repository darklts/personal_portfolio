import { Router } from 'express'
import {
  deleteElement,
  getElement,
  getElements,
  postElement,
  updatedElement,
} from '../controllers/element.controller'

const router = Router()

/**
 * @openapi
 * /users:
 *   get:
 *     summary: Returns a list of users.
 *     responses:
 *       200:
 *         description: A JSON array of user names
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 */
router.get('/', getElements)
router.get('/:id', getElement)
router.post('/', postElement)
router.put('/:id', updatedElement)
router.delete('/:id', deleteElement)

export { router }
