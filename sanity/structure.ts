import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('courses').title('Courses'),
      S.documentTypeListItem('gallery').title('Gallery'),
      S.documentTypeListItem('testimonial').title('Testimonial'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && ![ 'courses', 'gallery','testimonial'].includes(item.getId()!),
      ),
    ])
