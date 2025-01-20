export interface Resource {
  type: string
  url: string
  description: string
  icon?: string
}

export enum ProjectType {
  BUILDING = "Personnal builds",
  PROJECTS = "Production projects",
  AWARDS = "Awards",
}

export interface Project {
  type: ProjectType
  title: string
  description: string
  externalLink?: string
  resources?: Resource[]
}

export enum AnimationOrder {
  FIRST = 1,
  SECOND = 2,
  THIRD = 3,
  FOURTH = 4,
  FIFTH = 5,
  SIXTH = 6,
  SEVENTH = 7,
  EIGHTH = 8,
}
