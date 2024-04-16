import { Request, Response } from 'express'

import { Upload } from '../services/upload.services'

import { handleHttp } from '../utils/error.handle'

const singleUpload = async (req: Request, res: Response) => {
  try {
    const { body } = req
    const { collection } = req.params

    !collection && handleHttp(res, 'ERROR_GET_Upload', 'Collection is required')

    const upload = new Upload(collection)
    const response = await upload.singleUpload(body)

    res.send(response)
  } catch (e) {
    handleHttp(res, 'ERROR_GET_Upload', e)
  }
}

const multiUpload = async (req: Request, res: Response) => {
  try {
    const { body } = req
    const { collection } = req.params

    !collection && handleHttp(res, 'ERROR_GET_Upload', 'Collection is required')

    const upload = new Upload(collection)
    const response = await upload.multiUpload(body)

    res.send(response)
  } catch (e) {
    handleHttp(res, 'ERROR_GET_Upload', e)
  }
}

export { singleUpload, multiUpload }
