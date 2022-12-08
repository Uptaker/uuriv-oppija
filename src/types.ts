export interface Strategy {
  title: string,
  id: string,
  color: 'yellow' | 'peach' | 'blue' | 'green',
  content: StrategyContent,
  apps: string[]
  studies: StrategyStudyContent,
  icon?: string,
  videoUrl?: string
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