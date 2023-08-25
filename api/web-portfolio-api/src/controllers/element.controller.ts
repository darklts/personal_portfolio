import { Request, Response } from 'express'

import ElementServices from '../services/element.services'
import { handleHttp } from '../utils/error.handle'

const getElements = async (_req: Request, res: Response) => {
  try {
    const Element = new ElementServices()
    const response = await Element.get()

    response.length > 0
      ? res.send({
          msg: 'Successfull! We are find',
          data: response,
        })
      : res.send({
          msg: 'Sorry, we are not find anything by this params',
        })
  } catch (e) {
    handleHttp(res, 'ERROR_GET_Element', e)
  }
}
const getElement = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params

    const Element = new ElementServices()
    const response = await Element.getOne(id)

    response !== null
      ? res.send({
          msg: 'Successfull!',
          data: response,
        })
      : res.send({
          msg: 'Sorry, we are not find anything by this params',
        })
  } catch (e) {
    handleHttp(res, 'ERROR_GET_Element', e)
  }
}
const postElement = async (req: Request, res: Response) => {
  try {
    const { body } = req

    const Element = new ElementServices()
    const response = await Element.insert(body)

    res.send(response)
  } catch (e) {
    handleHttp(res, 'ERROR_GET_Element', e)
  }
}
const updatedElement = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    if (!id) {
      return
    }

    const data = req?.body

    const Element = new ElementServices()

    const response = await Element.update(id, data)

    res.send({
      response,
    })
  } catch (e) {
    handleHttp(res, 'ERROR_GET_Element', e)
  }
}
const deleteElement = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    if (!id) {
      return
    }

    const Element = new ElementServices()

    const response = await Element.delete(id)

    response === null
      ? res.send({ msg: 'Error! Dont find this item' })
      : res.send({ msg: 'Item is deleted', response })
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ElementS', e)
  }
}

export { getElement, getElements, postElement, updatedElement, deleteElement }
