export type Step = {
  date: string | Date
  name: string
}

export type Doc = {
  id: number
  url: string
  name: string
}

export type VeryShortBill = {
  title: string
  content: string
  lastStep: Step
  initiators: string[]
  originId: string
  likesCount: number
  dislikesCount: number
}

export type Bill = {
  title: string
  shortTitle: string

  content: string
  shortContent: string

  steps: Step[]
  initiators: string[]
  originId: string
  likesCount: number
  dislikesCount: number

  registration: string | Date
  
  session: String
  rubric: String

  mainCommittee: String
  otherCommittees: String[]
  docs: Doc[]
}