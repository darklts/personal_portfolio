import { Schema, model } from 'mongoose'

import { IUploads } from '../../interface/upload.interface'
import fileUpload from 'express-fileupload'

const UploadSchema = new Schema<IUploads>(
  {
    file: {
      type: fileUpload,
      required: true,
    },
    validExpension: {
      type: Array,
      required: true,
    },
    dir: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const UploadModel = model<IUploads>('Upload', UploadSchema, 'uploads')

export default UploadModel
