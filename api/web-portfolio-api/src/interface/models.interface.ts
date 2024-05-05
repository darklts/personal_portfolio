import { Document, Types } from 'mongoose'

export interface ISection extends Document {
  code: string
  name: string
  description: string
  order: number
  visibility: boolean
  image: IFile
  tag: string
}

export interface IElement extends Document {
  idContent: Types.ObjectId
  data: object
  image: object
  code: string
  order: number
  visibility: boolean
}

export interface IContent extends Document {
  idSection: Types.ObjectId
  code: string
  type: string
  object: object
  order: number
  visibility: boolean
}

export interface ISocialMedia extends Document {
  name: string
  link: string
  icon: object
}

export interface IFile {
  path: string
  public_id: string
  tag: string
  format: string
}
