import { Types } from 'mongoose'

import { ISection } from '../interface/models.interface'
import SectionModel from '../models/schema/section'

export class SectionServices {
  async insert(section: ISection) {
    const response = await SectionModel.create(section)
    return response
  }

  async get(): Promise<ISection[]> {
    return await SectionModel.find({})
  }

  async getOne(sectionId: string): Promise<ISection | undefined | null> {
    if (!Types.ObjectId.isValid(sectionId)) {
      console.log('ID no válido')
      return
    }

    const section = await SectionModel.findById({ _id: sectionId })

    return section
  }

  async update(
    sectionId: string,
    data: ISection
  ): Promise<ISection | undefined | null> {
    if (!Types.ObjectId.isValid(sectionId)) {
      console.log('ID no válido')
      return
    }

    const section = await SectionModel.findOneAndUpdate(
      { _id: sectionId },
      data,
      { new: true }
    )

    return section
  }

  async delete(id: string): Promise<object | undefined | null> {
    if (!Types.ObjectId.isValid(id)) {
      console.log('ID invalido')
      return
    }

    return await SectionModel.findByIdAndDelete({ _id: id })
  }
}
