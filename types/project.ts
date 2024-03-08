export interface Resource {
  type: string
  url: string
  description: string
  icon?: string
}

export enum ProjectType {
  BUILDING = "Building",
  PROJECT = "Project",
  HACK = "Hack",
}

export interface Project {
  type: ProjectType
  title: string
  description: string
  externalLink?: string
  resources?: Resource[]
}
