export interface Project {
  id: string
  title: string
  image: string
  url: string
  shortDescription: string
  longDescription: string
}

export interface Course {
  id: string
  name: string
  description: string
  topics: string[]
}

export interface Degree {
  id: string
  title: string
  institution: string
  place: string
  startDate: string
  endDate: string
  programUrl: string
  institutionLogo: string
  courses: Course[]
}
