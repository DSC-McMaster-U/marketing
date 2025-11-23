// Event type
export interface Event {
  _id: string // Unique identifier for the document
  _updatedAt: string // Last updated date of the document in ISO format
  title: string // Title of the event
  description: string // Description of the event
  type: string // Type of the event (e.g., 'Workshop', 'Talk', 'Conference')
  startTime: string // Start time of the event in ISO format
  endTime: string // End time of the event in ISO format
  location: string // Location of the event
  slug: {
    current: string // Slug for the event URL
  }
  organizer: string // Organizer of the event
  contactEmail?: string // Contact email for the event (optional)
  image: {
    asset: {
      _id: string // ID of the image asset
      url: string // URL of the image
      altText: string // Alt text for the image
    }
  } // Optional image for the event
  registrationLink?: string // Optional registration link for the event
}

// Newsletter type
export interface Newsletter {
  _id: string // Unique identifier for the document
  _updatedAt: string // Last updated date of the document in ISO format
  title: string // Title of the newsletter
  description: string // Description of the newsletter
  slug: {
    current: string // Slug for the newsletter URL
  }
  body: Array<{
    _type: string // Type of the block (e.g., 'block', 'image')
    [key: string]: unknown // Additional properties depending on the type
  }> // Body content of the newsletter, can include blocks and images
}

// Sponsor Schema Type
export interface Sponsor {
  _id: string // Unique identifier for the document
  _type: 'sponsor' // Document type
  name: string // The name of the sponsor
  logo: {
    _type: 'image' // Image type
    asset: {
      _ref: string // Reference to the image asset
      _type: 'reference' // Reference type
    }
  }
  website: string // The website of the sponsor
}

export interface Project {
  _key: string
  name: string
  description: string
  link: string
  status: 'in-progress' | 'completed' | 'archived'
  image?: {
    _type: string
    asset: {
      _ref: string
      _type: string
    }
  }
}

export interface TeamItem {
  _type: string
  name: string
  description: string
  _key: string
  icon?: string
  projects?: Project[]
  members: Member[]
}

export interface Team {
  _updatedAt: string
  teams: TeamItem[]
  _createdAt: string
  _rev: string
  _type: string
  description: string
  _id: string
  title: string
}

export interface Member {
  _key: string
  name: string
  position: string
  picture?: {
    _type: string
    asset: {
      _ref: string
      _type: string
    }
  }
}

export interface AboutCard {
  icon: string // Assuming this references the string name of an icon
  description: string
  _key: string
  title: string
  image: {
    _type: string
    asset: {
      _ref: string
      _type: string
    }
  }
}

export interface About {
  description: string
  _id: string
  title: string
  _updatedAt: string
  _createdAt: string
  _rev: string
  _type: string
  cards: AboutCard[]
}

export interface GeneralInfo {
  club: string
  cta1: {
    href: string
    label: string
  }
  cta2: {
    href: string
    label: string
  }
  _type: string
  description: string
  _id: string
  _updatedAt: string
  school: string
  _createdAt: string
  _rev: string
}
