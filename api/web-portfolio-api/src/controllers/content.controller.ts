import { Request, Response } from 'express'

import ContentServices from '../services/content.services'
import { handleHttp } from '../utils/error.handle'

const getContents = async (_req: Request, res: Response) => {
  try {
    const Content = new ContentServices()
    const response = await Content.get()

    response.length > 0
      ? res.send({
          msg: 'Successfull! We are find',
          data: response,
        })
      : res.send({
          msg: 'Sorry, we are not find anything by this params',
        })
  } catch (e) {
    handleHttp(res, 'ERROR_GET_Content', e)
  }
}

const getContent = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params

    const Content = new ContentServices()
    const response = await Content.getOne(id)

    response !== null
      ? res.send({
          msg: 'Successfull!',
          data: response,
        })
      : res.send({
          msg: 'Sorry, we are not find anything by this params',
        })
  } catch (e) {
    handleHttp(res, 'ERROR_GET_Content', e)
  }
}

const postContent = async (req: Request, res: Response) => {
  try {
    const { body } = req

    const Content = new ContentServices()
    const response = await Content.insert(body)

    res.send(response)
  } catch (e) {
    handleHttp(res, 'ERROR_GET_Content', e)
  }
}

const updatedContent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    if (!id) {
      return
    }
    const data = req?.body

    const Content = new ContentServices()

    const response = await Content.update(id, data)

    res.send({
      response,
    })
  } catch (e) {
    handleHttp(res, 'ERROR_GET_Content', e)
  }
}

const deleteContent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    if (!id) {
      return
    }

    const Content = new ContentServices()

    const response = await Content.delete(id)

    response === null
      ? res.send({ msg: 'Error! Dont find this item' })
      : res.send({ msg: 'Item is deleted', response })
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ContentS', e)
  }
}

export { getContent, getContents, postContent, updatedContent, deleteContent }
