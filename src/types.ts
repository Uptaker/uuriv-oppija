export interface Strategy {
  title: string,
  id: string,
  color: Color,
  content: StrategyContent,
  apps: string[]
  studies: StrategyStudyContent,
  icon?: string,
  videoUrl?: string,
  teacher: Paragraph[],
}

export interface Paragraph {
  title?: string,
  paragraph: string,
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