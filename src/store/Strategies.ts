import {Strategy} from '../types'

export const strategies: Strategy[] = [
  {
    title: 'strategy.retrieval.title',
    color: 'yellow',
    id: 'retrieval',
    content: {
      what: 'strategy.retrieval.what',
      why: 'strategy.retrieval.why',
      how: 'strategy.retrieval.how'
    },
    studies: {
      source: "Karpicke, J. D., & Blunt, J. R. (2011). Retrieval practice produces more learning than elaborate studying with concept mapping. Science, 331(6018), 772–775.",
      description: 'strategy.retrieval.studies.description'
    },
    apps: [
      {
        name: 'TimeCamp',
        description: 'Lehekülg, mis aitab enda õppimiseks kulunud aega jälgida. Salvestab sisestatud aja ja teeb automaatselt andmetest kokkuvõtte',
        url: 'https://www.timecamp.com/'
      }
    ]
  }
]