export interface Strategy {
  title: string,
  id: string,
  color: string,
  content: StrategyContent,
  apps: StrategyUsefulApp[]
  icon?: string,
  videoUrl?: string
}

export interface StrategyContent {
  what: string
  why: string,
  how: string
}

export interface StrategyUsefulApp {
  name: string,
  description: string
  url: string
}