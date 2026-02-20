import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'
import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Content')
    .items([
      // Singleton for General Info
      S.listItem().title('General Info').child(
        S.document()
          .schemaType('generalInfo') // Reference the schema
          .documentId('singleton-generalInfo'), // Fixed document ID to enforce single entry
      ),
      // Singleton for About
      S.listItem().title('About').child(
        S.document()
          .schemaType('about') // Reference the schema
          .documentId('singleton-about'), // Fixed document ID to enforce single entry
      ),
      // Orderable FAQ list
      orderableDocumentListDeskItem({ type: 'faq', title: 'FAQ', S, context }),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          listItem.getId() !== 'generalInfo' &&
          listItem.getId() !== 'about' &&
          listItem.getId() !== 'faq',
      ),
    ])
