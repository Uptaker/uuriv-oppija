import classNames from 'classnames'
import React from 'react'
import {_} from '@codeborne/i18n-json'
import ContentDiv from '../layout/ContentDiv'
import Container from '../components/Container'
import Collapsible from '../components/Collapsible'

import s from './LearnMorePage.module.scss'

export interface Page {
  title: string,
  url: string,
  lang: string
}

const sources = [
  'Beardsley, M. 2020. Science of Learning Concepts for Teachers (Project Illuminated) (1st ed.).  Retrieved from https://illuminated.pressbooks.com/',
  'Bjork, R. A., Dunlosky, J., & Kornell, N. (2013). Self-regulated learning: Beliefs, techniques, and  illusions. Annual review of psychology, 64, 417-444.://illuminated.pressbooks.com/',
  'Bloom, K. C., & Shuell, T. J. (1981). Effects of massed and distributed practice on the learning and  retention of second-language vocabulary. The Journal of Educational Research, 74(4), 245-248',
  'Boettcher, J., Klippgen, L., Mietzsch, S., Grube, F., Krebs, T., & Bergholz, R. et al. (2019). Spaced  Education Improves the Retention of Laparoscopic Suturing Skills: A Randomized Controlled Study.  European Journal Of Pediatric Surgery, 30(02), 193-200. doi: 10.1055/s-0039-1681022',
  'Cepeda, N. J., Pashler, H., Vul, E., Wixted, J. T., & Rohrer, D. (2006). Distributed practice in verbal  recall tasks: A review and quantitative synthesis. Psychological bulletin, 132(3), 354',
  'Crum, A. J., Akinola, M., Martin, A., & Fath, S. (2017). The role of stress mindset in shaping  cognitive, emotional, and physiological responses to challenging and threatening stress. Anxiety,  stress, & coping, 30(4), 379-395.',
  'Crum, A. J., Salovey, P., & Achor, S. (2013). Rethinking stress: the role of mindsets in determining  the stress response. Journal of personality and social psychology, 104(4), 716.',
  'Ferguson, R., Barzilai, S., Ben-Zvi, D., Chinn, C.A., Herodotou, C., Hod, Y., Kali, Y., Kukulska Hulme, A., Kupermintz, H., McAndrew, P., Rienties, B., Sagy, O., Scanlon, E., Sharples, M., Weller,  M., & Whitelock, D. (2017). Innovating Pedagogy 2017: Open University Innovation Report 6. Milton  Keynes: The Open University, UK.',
  'Fields, R. D. (2005). Making memories stick. Scientific American, 292(2), 74-81.',
  'Hughes, J. S., Gourley, M. K., Madson, L., & Blanc, K. L. (2011). Stress and coping activity:  Reframing negative thoughts. Teaching of Psychology, 38(1), 36-39.',
  'Karpicke, J. D., & Blunt, J. R. (2011). Retrieval practice produces more learning than elaborative  studying with concept mapping. Science, 331(6018), 772-775.',
  'Kelley, P., & Whatson, T. (2013). Making long-term memories in minutes: a spaced learning pattern  from memory research in education. Frontiers in human neuroscience, 7, 589.',
  'Liu, J. J. W., Reed, M., & Vickers, K. (2019). Reframing the individual stress response: Balancing our  knowledge of stress to improve responsivity to stressors. Stress and Health, 35(5), 607-616.',
  'Paunesku, D., Walton, G. M., Romero, C., Smith, E. N., Yeager, D. S., & Dweck, C. S. (2015). Mind-set  interventions are a scalable treatment for academic underachievement. Psychological science, 26(6),  784-793.',
  'Roediger III, H. L., & Karpicke, J. D. (2006a). The power of testing memory: Basic research and  implications for educational practice. Perspectives on psychological science, 1(3), 181-210.',
  'Roediger III, H. L., & Karpicke, J. D. (2006b). Test-enhanced learning: Taking memory tests improves  long-term retention. Psychological science, 17(3), 249-255.',
  'Roediger III, H. L., & Pyc, M. A. (2012). Inexpensive techniques to improve education: Applying  cognitive psychology to enhance educational practice. Journal of Applied Research in Memory and  Cognition, 1(4), 242-248.',
  'Rohrer, D., Dedrick, R. F., & Stershic, S. (2015)Rawson, K. A., & Kintsch, W. (2005). Rereading effects  depend on time of test. Journal of Educational Psychology, 97(1), 70.',
  'Sapolsky, R. M. (2015). Stress and the brain: individual variability and the inverted-U. Nature  neuroscience, 18(10), 1344.',
  'Schutte, G. M., Duhon, G. J., Solomon, B. G., Poncy, B. C., Moore, K., & Story, B. (2015). A  comparative analysis of massed vs. distributed practice on basic math fact fluency growth rates.  Journal of School Psychology, 53(2), 149-159.',
  'The Science of Stress & Self-Regulation. Open online course (unit 5): Course | SP1 | TIDEX (upf.edu)',
  'Vlach, H. A., & Sandhofer, C. M. (2012). Distributing learning over time: The spacing effect in  children’s acquisition and generalization of science concepts. Child development, 83(4), 1137-1144.',
  'Weinstein, Y., Sumeracki, M., & Caviglioli, O. (2018). Understanding how we learn: A visual guide.  Routledge.'
]

function LearnMorePage() {

  return (
    <ContentDiv>
      <Container color="peach" label={_('learnMore.readingTitle')}>
        <ul>
          {Object.values(_('learnMore.articles') as unknown as Page[]).map(strategy => (
            <li key={strategy.title} style={{margin: "1.5rem 0"}}>
              <a href={strategy.url} target="_blank">{strategy.title} <i className={classNames("fa-solid fa-arrow-up-right-from-square", s.tiny)}></i></a>
              <div className={s.tiny}>{strategy.lang}</div>
            </li>
          ))}
        </ul>
      </Container>

        <Container color="peach" label={_('learnMore.viewingTitle')}>
          <Collapsible type="collapsible" label={"TODO"}>
            <div>TODO</div>
          </Collapsible>
          <Collapsible type="collapsible" label={"TODO"}>
            <div>TODO</div>
          </Collapsible>
        </Container>

      <div>
        <Collapsible type="accordion" color="peach" label={_('general.source')}>
          <ul>
            {sources.map(source => (
              <li key={source} style={{margin: "1.5rem 0"}}>{source}</li>
            ))}
          </ul>
        </Collapsible>
      </div>

    </ContentDiv>
  )
}

export default LearnMorePage