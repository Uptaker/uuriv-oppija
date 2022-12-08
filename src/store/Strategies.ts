import {Strategy} from '../types'

export const strategies: Strategy[] = [
  {
    title: 'strategies.retrieval.title',
    color: 'yellow',
    id: 'retrieval',
    content: {
      what: 'strategies.retrieval.what',
      why: 'strategies.retrieval.why',
      how: 'strategies.retrieval.how'
    },
    studies: {
      source: "Karpicke, J. D., & Blunt, J. R. (2011). Retrieval practice produces more learning than elaborate studying with concept mapping. Science, 331(6018), 772–775.",
      description: 'strategies.retrieval.studyDescription'
    },
    apps: ['timecamp', 'socrative', 'readlang']
  }
]