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
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    studies: {
      source: "Karpicke, J. D., & Blunt, J. R. (2011). Retrieval practice produces more learning than elaborate studying with concept mapping. Science, 331(6018), 772–775.",
      description: 'strategies.retrieval.studyDescription'
    },
    teacher: [],
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
    videoUrl: "https://www.youtube.com/embed/o-YBDTqX_ZU",
    studies: {
      source: "Kelley, P., & Whatson, T. (2013). Making long-term memories in minutes: a spaced learning pattern from memory research in education. Frontiers in human neuroscience, 7, 589.",
      description: 'strategies.spaced.studyDescription'
    },
    teacher: [],
    apps: ['timecamp', 'socrative', 'readlang']
  },
  {
    title: 'strategies.mindset.title',
    color: 'peach',
    id: 'mindset',
    content: {
      what: 'strategies.mindset.what',
      why: 'strategies.mindset.why',
      how: 'strategies.mindset.how'
    },
    videoUrl: "https://www.youtube.com/embed/GtL1huin9EE",
    studies: {
      source: "Crum, A. J., Akinola, M., Martin, A., & Fath, S. (2017). The role of stress mindset in shaping cognitive, emotional, and physiological responses to challenging and threatening stress. Anxiety, stress, and coping, 30(4), 379–395. ",
      description: 'strategies.mindset.studyDescription'
    },
    teacher: [
      {
        paragraph: 'strategies.mindset.teacher.1p',
      },
      {
        title: 'strategies.mindset.teacher.2t',
        paragraph: 'strategies.mindset.teacher.2p',
      },
      {
        title: 'strategies.mindset.teacher.3t',
        paragraph: 'strategies.mindset.teacher.3p',
      },
      {
        title: 'strategies.mindset.teacher.4t',
        paragraph: 'strategies.mindset.teacher.4p',
      },
      {
        paragraph: 'strategies.mindset.teacher.5p',
      },
      {
        title: 'strategies.mindset.teacher.6t',
        paragraph: 'strategies.mindset.teacher.6p',
      },
      {
        paragraph: 'strategies.mindset.teacher.7p',
      },
      
      {
        title: 'strategies.mindset.teacher.8t',
        paragraph: 'strategies.mindset.teacher.8p',
      },
    ],
    apps: ['cbtthoughtdiart' ,'timecamp', 'socrative', 'readlang']
  },
  {
    title: 'strategies.distributed.title',
    color: 'blue',
    id: 'distributed',
    content: {
      what: 'strategies.distributed.what',
      why: 'strategies.distributed.why',
      how: 'strategies.distributed.how'
    },
    videoUrl: "https://www.youtube.com/embed/oavMtUWDBTM",
    studies: {
      source: "Bloom, K. C., & Shuell, T. J. (1981). Effects of Massed and Distributed Practice on the Learning and Retention of Second-Language Vocabulary. The Journal of Educational Research, 74(4), 245–248.",
      description: 'strategies.distributed.studyDescription'
    },
    teacher: [],
    apps: ['timecamp', 'socrative', 'readlang']
  }
]