import { Schema, model } from 'mongoose'

import { IContent } from '../../interface/models.interface'
import SectionModel from './section'

const ContentSchema = new Schema<IContent>(
  {
    idSection: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: SectionModel.modelName,
    },
    code: {
      type: String,
      required: true,
      unique: true,
    },
    type: {
      type: String,
      required: true,
    },
    object: {
      type: Object,
    },
    order: {
      type: Number,
      required: true,
    },
    visibility: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const ContentModel = model<IContent>('Content', ContentSchema, 'contents')

export default ContentModel
