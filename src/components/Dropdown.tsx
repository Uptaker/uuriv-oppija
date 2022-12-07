import classNames from 'classnames'
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {strategies} from '../store/Strategies'
import {_} from '@codeborne/i18n-json'

import s from './Dropdown.module.scss'

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={classNames({
          [s.dropdownMenu]: true,
          'clicked': click,
        })}
      >
        {strategies.map(strategy => {
          return (
            <li key={strategy.id} className={s.drowdownItem}>
              <Link
                className={s.dropdownLink}
                data-text={_(strategy.title)}
                to={'/strategy/' + strategy.id} onClick={() => setClick(false)}>
                {_(strategy.title)}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;