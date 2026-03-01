import { type SchemaTypeDefinition } from 'sanity'

import { coursesType } from './coursesType'
import { galleryType } from './galleryType'
import { testimonialType } from './testimonialType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ coursesType, galleryType, testimonialType],
}
