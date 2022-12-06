export type Option = {
  label: string;
  value: string | number;
}

export interface Strategy {
  title: string,
  icon: string,
  content: StrategyContent,
  apps: StrategyUsefulApp[]
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