import { Schema, model } from 'mongoose'

import { IElement } from '../../interface/models.interface'
import ContentModel from './content'

const ElementSchema = new Schema<IElement>(
  {
    idContent: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: ContentModel.modelName,
    },
    code: {
      type: String,
      required: true,
      unique: true,
    },
    data: {
      type: Object,
      required: true,
    },
    image: {
      type: Object,
    },
    order: {
      type: Number,
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
const ElementModel = model<IElement>('Element', ElementSchema, 'elements')

export default ElementModel
