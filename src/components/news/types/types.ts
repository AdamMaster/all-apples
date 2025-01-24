import { NewsItem, Paragraph } from '@prisma/client'
export type NewsItemWithRelations = NewsItem & { paragraphs: Paragraph[] }
