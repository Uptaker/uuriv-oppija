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
  },
  {
    title: 'strategies.spaced.title',
    color: 'green',
    id: 'spaced',
    content: {
      what: 'strategies.spaced.what',
      why: 'strategies.spaced.why',
      how: 'strategies.spaced.how'
    },
    studies: {
      source: "Kelley, P., & Whatson, T. (2013). Making long-term memories in minutes: a spaced learning pattern from memory research in education. Frontiers in human neuroscience, 7, 589.",
      description: 'strategies.spaced.studyDescription'
    },
    apps: ['timecamp', 'socrative', 'readlang']
  }
]