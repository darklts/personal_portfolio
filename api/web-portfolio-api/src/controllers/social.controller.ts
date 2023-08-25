import { Request, Response } from 'express'

import SocialMediaServices from '../services/social.services'
import { handleHttp } from '../utils/error.handle'

const getSocialMedias = async (_req: Request, res: Response) => {
  try {
    const socialMedia = new SocialMediaServices()
    const response = await socialMedia.get()

    response.length > 0
      ? res.send({
          msg: 'Successfull! We are find',
          data: response,
        })
      : res.send({
          msg: 'Sorry, we are not find anything by this params',
        })
  } catch (e) {
    handleHttp(res, 'ERROR_GET_Social_Media', e)
  }
}
const getSocialMedia = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params

    const socialMedia = new SocialMediaServices()
    const response = await socialMedia.getOne(id)

    response !== null
      ? res.send({
          msg: 'Successfull!',
          data: response,
        })
      : res.send({
          msg: 'Sorry, we are not find anything by this params',
        })
  } catch (e) {
    handleHttp(res, 'ERROR_GET_Social_Media', e)
  }
}
const postSocialMedia = async (req: Request, res: Response) => {
  try {
    const { body } = req

    const socialMedia = new SocialMediaServices()
    const response = await socialMedia.insert(body)

    res.send(response)
  } catch (e) {
    handleHttp(res, 'ERROR_GET_Social_Media', e)
  }
}
const updatedSocialMedia = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    if (!id) {
      return
    }

    const data = req?.body

    const socialMedia = new SocialMediaServices()

    const response = await socialMedia.update(id, data)

    res.send({
      response,
    })
  } catch (e) {
    handleHttp(res, 'ERROR_GET_Social_Media', e)
  }
}
const deleteSocialMedia = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    if (!id) {
      return
    }

    const socialMedia = new SocialMediaServices()

    const response = await socialMedia.delete(id)

    response === null
      ? res.send({ msg: 'Error! Dont find this item' })
      : res.send({ msg: 'Item is deleted', response })
  } catch (e) {
    handleHttp(res, 'ERROR_GET_socialMediaS', e)
  }
}

export {
  getSocialMedia,
  getSocialMedias,
  postSocialMedia,
  updatedSocialMedia,
  deleteSocialMedia,
}
