import { Types } from 'mongoose'

import { ISocialMedia } from '../interface/models.interface'
import SocialMediaModel from '../models/schema/social'

class SocialMediaServices {
  async insert(data: ISocialMedia) {
    return await SocialMediaModel.create(data)
  }

  async get(): Promise<ISocialMedia[]> {
    return await SocialMediaModel.find({})
  }

  async getOne(id: string): Promise<ISocialMedia | undefined | null> {
    if (!Types.ObjectId.isValid(id)) {
      throw new Error()
      return
    }
    return await SocialMediaModel.findOne({ _id: id })
  }

  async update(
    id: string,
    data: ISocialMedia
  ): Promise<ISocialMedia | undefined | null> {
    if (!Types.ObjectId.isValid(id)) {
      throw new Error()
      return
    }
    return await SocialMediaModel.findByIdAndUpdate({ _id: id }, data, {
      new: true,
    })
  }

  async delete(id: string): Promise<ISocialMedia | undefined | null> {
    if (!Types.ObjectId.isValid(id)) {
      throw new Error()
      return
    }
    return await SocialMediaModel.findByIdAndDelete({ _id: id })
  }
}

export default SocialMediaServices
