import { Schema, model } from 'mongoose'
import { ISocialMedia } from '../../interface/models.interface'

const SocialMediaSchema = new Schema<ISocialMedia>(
  {
    name: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    icon: {
      type: Object,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)
const SocialMediaModel = model<ISocialMedia>(
  'social',
  SocialMediaSchema,
  'socials'
)

export default SocialMediaModel
