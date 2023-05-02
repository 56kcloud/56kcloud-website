import {Tag} from '../tag.model'

export type RichTextArrayItem = {
  annotations: {
    bold: boolean
    code: boolean
    color: string
    italic: boolean
    strikethrough: boolean
    underline: boolean
  }
  href?: string
  plain_text: string
  text: {
    content: string
    link?: string
  }
  type: string
}

export type RichText = {
  id: string
  type: 'rich_text'
  rich_text: Array<RichTextArrayItem>
}

export type SelectOption = {
  id: string
  name: string
  color: string
}

export type MultiSelect = {
  id: string
  type: 'multi_select'
  multi_select: Array<SelectOption>
}

export type MultiSelectTags = {
  id: string
  type: 'multi_select'
  multi_select: Array<Tag>
}

export type Select = {
  id: string
  type: 'select'
  select: SelectOption
}

export type Title = {
  id: string
  type: 'title'
  title: Array<RichTextArrayItem>
}

export type Number = {
  id: string
  type: 'number'
  number: number
}

export type Date = {
  id: string
  type: 'date'
  date: {
    start: string
    end?: string
    time_zone?: string
  }
}

export type URL = {
  id: string
  type: 'url'
  url: string
}


export type NotionPostPreview = {
  archived: boolean
  cover: {
    type: string
    file: {
      url: string
      expiry_time: string
    }
  }
  created_by: {
    object: string
    id: string
  }
  created_time: string
  icon: unknown
  id: string
  last_edited_by: {
    object: string
    id: string
  }
  last_edited_time: string
  object: string
  parent: {
    type: string
    database_id: string
  }
  properties: {
    author: {
      archived: boolean
      cover: unknown
      created_by: {
        object: string
        id: string
      }
      created_time: string
      icon: unknown
      id: string
      last_edited_by: {
        object: string
        id: string
      }
      last_edited_time: string
      object: string
      parent: {
        type: string
        database_id: string
      }
      properties: {
        bio: RichText
        facebook: RichText
        id: RichText
        location: RichText
        name: Title
        profileImage: {
          files: Array<{
            file: {
              url: string
              expiry_time: string
            }
            name: string
            type: string
          }>
          type: string
          id: string
        }
        slug: RichText
        twitter: RichText
        url: URL
        website: URL
      }
      url: string
    }
    description: RichText
    name: Title
    publishedOn: Date
    readTime: Number
    slug: RichText
    status: Select
    tags: MultiSelectTags
  }
  url: string
}

export type NotionPost= {
  post: NotionPostPreview
  blocks: Array<unknown>
}
