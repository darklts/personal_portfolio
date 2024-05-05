import { Schema, model } from 'mongoose'
import { ISection } from '../../interface/models.interface'

const SectionSchema = new Schema<ISection>(
  {
    code: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    order: {
      type: Number,
      required: true,
    },
    visibility: {
      type: Boolean,
      required: true,
    },
    image: {
      type: Object,
    },
    tag: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const SectionModel = model<ISection>('Section', SectionSchema, 'sections')

export default SectionModel
