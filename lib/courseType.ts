export interface CurriculumItem {
  week: number
  title: string
}

export interface Course {
  name: string
  description: string
  duration: string
  level: string
  courseType: string
  students: number
  liveSessions: number
  price: number
  aboutCourse: string
  learningPoints: string[]
  curriculum: CurriculumItem[]
  instructorName: string
  instructorDesignation: string
  aboutInstructor: string
  image: string
}
