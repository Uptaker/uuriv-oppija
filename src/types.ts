export interface Strategy {
  title: string,
  id: string,
  color: Color,
  content: StrategyContent,
  apps: string[]
  studies: StrategyStudyContent,
  teacher: Paragraph[],
  icon?: string,
  videoUrl?: string,
}

export interface Paragraph {
  paragraph: string,
  title?: string
}

export interface StrategyContent {
  what: string
  why: string,
  how: string
}

export interface StrategyStudyContent {
  source: string,
  description: string,
  list?: string[] // TODO what's under 'ELU meeskonna uuringud'?
}

export type Color = 'yellow' | 'peach' | 'blue' | 'green'