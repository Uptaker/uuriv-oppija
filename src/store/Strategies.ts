import {Strategy} from '../types'

export const strategies: Strategy[] = [
  {
    title: 'strategy.retrieval.title',
    color: '#FFEE93',
    id: 'retrieval',
    content: {
      what: 'strategy.retrieval.what',
      why: 'strategy.retrieval.why',
      how: 'strategy.retrieval.how'
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