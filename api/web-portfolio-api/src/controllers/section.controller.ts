import { Request, Response } from 'express'
import fileUpload from 'express-fileupload'

import { SectionServices } from '../services/section.services'
import { handleHttp } from '../utils/error.handle'
import { Upload } from '../services/upload.services'

const getSections = async (_req: Request, res: Response) => {
  try {
    const section = new SectionServices()
    const responseSection = await section.get()

    responseSection.length > 0
      ? res.send({
          msg: 'Successfull! We are find',
          data: responseSection,
        })
      : res.send({
          msg: 'Sorry, we are not find anything by this params',
        })
  } catch (e) {
    handleHttp(res, 'ERROR_GET_SECTIONS', e)
  }
}
const getSection = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params

    const section = new SectionServices()
    const response = await section.getOne(id)

    response != null
      ? res.send({
          msg: 'Successfull!',
          data: response,
        })
      : res.send({
          msg: 'Sorry, we are not find anything by this params',
        })

    res
  } catch (e) {
    handleHttp(res, 'ERROR_GET_SECTIONS', e)
  }
}

const postSections = async (req: Request, res: Response) => {
  try {
    const { body } = req

    if (req.files && req.files.image) {
      const image = req.files.image[0] as fileUpload.UploadedFile

      const fileUpload = new Upload(body.tag)
      const { public_id, secure_url, format } =
        await fileUpload.singleUpload(image)

      body.image = {
        public_id,
        secure_url,
        format,
      }
    }

    const section = new SectionServices()
    const responseSection = await section.insert(body)

    res.send(responseSection)
  } catch (e) {
    handleHttp(res, 'ERROR_GET_SECTIONS', e)
  }
}

const updatedSections = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    if (!id) {
      return
    }

    const data = req?.body

    const section = new SectionServices()

    const response = await section.update(id, data)

    res.send({
      response,
    })
  } catch (e) {
    handleHttp(res, 'ERROR_GET_SECTIONS', e)
  }
}
const deleteSections = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    if (!id) {
      return
    }

    const section = new SectionServices()

    const response = await section.delete(id)

    response == null
      ? res.send({ msg: 'Error! Dont find this item' })
      : res.send({ msg: 'Item is deleted', response })
  } catch (e) {
    handleHttp(res, 'ERROR_GET_SECTIONS', e)
  }
}

export {
  getSection,
  getSections,
  postSections,
  updatedSections,
  deleteSections,
}
