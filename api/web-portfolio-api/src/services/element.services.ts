import { Types } from 'mongoose'

import { IElement } from '../interface/models.interface'
import ElementModel from '../models/schema/element'

class ElementServices {
  async insert(data: IElement) {
    return await ElementModel.create(data)
  }

  async get(): Promise<IElement[]> {
    return await ElementModel.find({})
  }

  async getOne(id: string): Promise<IElement | undefined | null> {
    if (!Types.ObjectId.isValid(id)) {
      throw new Error()
      return
    }

    let response = await ElementModel.findOne({ _id: id })

    if (response) {
      return response
    } else {
      response = await ElementModel.findOne({ idSection: id })
      return response
    }
  }

  async getByContent(
    idContent: string
  ): Promise<IElement[] | undefined | null> {
    if (!Types.ObjectId.isValid(idContent)) {
      throw new Error()
      return
    }
    return await ElementModel.findOne({ idContent: idContent })
  }

  async update(
    id: string,
    data: IElement
  ): Promise<IElement | undefined | null> {
    if (!Types.ObjectId.isValid(id)) {
      throw new Error()
      return
    }
    return await ElementModel.findByIdAndUpdate({ _id: id }, data, {
      new: true,
    })
  }

  async delete(id: string): Promise<IElement | undefined | null> {
    if (!Types.ObjectId.isValid(id)) {
      throw new Error()
      return
    }
    return await ElementModel.findByIdAndDelete({ _id: id })
  }
}

export default ElementServices
