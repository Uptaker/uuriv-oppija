import {Strategy} from '../types'
import retrieval1 from '../assets/posters/retrieval1.png'
import retrieval2 from '../assets/posters/retrieval2.png'
import spaced1 from '../assets/posters/spaced1.png'
import spaced2 from '../assets/posters/spaced2.png'
import mindset1 from '../assets/posters/mindset.png'
import distributed1 from '../assets/posters/distributed1.png'
import distributed2 from '../assets/posters/distributed2.png'

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
      source: "Karpicke,\u00a0J.\u00a0D.,\u00a0&\u00a0Blunt,\u00a0J.\u00a0R.\u00a0(2011). Retrieval practice produces more learning than elaborate studying with concept mapping. Science, 331(6018),\u00a0772\u2011775.",
      description: 'strategies.retrieval.studyDescription',
      list: [retrieval1, retrieval2]
    },
    teacher: [
      {
        paragraph: 'strategies.retrieval.teacher.1p',
      },
      {
        title: 'strategies.retrieval.teacher.2t',
        paragraph: 'strategies.retrieval.teacher.2p',
      },
      {
        paragraph: 'strategies.retrieval.teacher.3p',
      },
      {
        title: 'strategies.retrieval.teacher.4t',
        paragraph: 'strategies.retrieval.teacher.4p',
      },
      {
        paragraph: 'strategies.retrieval.teacher.5p',
      },
      {
        title: 'strategies.retrieval.teacher.6t',
        paragraph: 'strategies.retrieval.teacher.6p',
      },
    ],
    apps: ['timecamp', 'socrative', 'readlang'],
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
      source: "Kelley,\u00a0P.,\u00a0&\u00a0Whatson,\u00a0T.\u00a0(2013). Making long-term memories in minutes: a spaced learning pattern from memory research in education. Frontiers\u00a0in\u00a0human\u00a0neuroscience, 7,\u00a0589.",
      description: 'strategies.spaced.studyDescription',
      list: [spaced1, spaced2]
    },
    teacher: [],
    apps: ['timecamp', 'socrative', 'readlang'],
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
      source: "Crum,\u00a0A.\u00a0J.,\u00a0Akinola,\u00a0M.,\u00a0Martin,\u00a0A.,\u00a0& Fath,\u00a0S.\u00a0(2017). The role of stress mindset in shaping cognitive, emotional, and physiological responses to challenging and threatening stress. Anxiety,\u00a0stress,\u00a0and\u00a0coping, 30(4),\u00a0379\u2011395. ",
      description: 'strategies.mindset.studyDescription',
      list: [mindset1]
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
      source: "Bloom,\u00a0K.\u00a0C.,\u00a0&\u00a0Shuell,\u00a0T.\u00a0J.\u00a0(1981). Effects of Massed and Distributed Practice on the Learning and Retention of Second-Language Vocabulary. The\u00a0Journal\u00a0of\u00a0Educational\u00a0Research, 74(4),\u00a0245\u2011248.",
      description: 'strategies.distributed.studyDescription',
      list: [distributed1, distributed2]
    },
    teacher: [],
    apps: ['timecamp', 'socrative', 'readlang']
  }
]