import { Types } from 'mongoose'

import { IContent } from '../interface/models.interface'
import ContentModel from '../models/schema/content'

class ContentServices {
  async insert(data: IContent) {
    return await ContentModel.create(data)
  }

  async get(): Promise<IContent[]> {
    return await ContentModel.find({})
  }

  async getOne(id: string): Promise<IContent | undefined | null> {
    if (!Types.ObjectId.isValid(id)) {
      throw new Error()
      return
    }

    let response = await ContentModel.findOne({ _id: id })

    if (response) {
      return response
    } else {
      response = await ContentModel.findOne({ idSection: id })
      return response
    }
  }

  async getBySection(
    idSection: string
  ): Promise<IContent[] | undefined | null> {
    if (!Types.ObjectId.isValid(idSection)) {
      throw new Error()
      return
    }
    return await ContentModel.findOne({ idSection: idSection })
  }

  async update(
    id: string,
    data: IContent
  ): Promise<IContent | undefined | null> {
    if (!Types.ObjectId.isValid(id)) {
      throw new Error()
      return
    }
    return await ContentModel.findByIdAndUpdate({ _id: id }, data, {
      new: true,
    })
  }

  async delete(id: string): Promise<IContent | undefined | null> {
    if (!Types.ObjectId.isValid(id)) {
      throw new Error()
      return
    }
    return await ContentModel.findByIdAndDelete({ _id: id })
  }
}

export default ContentServices
