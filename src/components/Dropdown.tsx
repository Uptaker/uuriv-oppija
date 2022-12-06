import React, {useState} from 'react'
import './Dropdown.css'
import {Link} from 'react-router-dom'
import {strategies} from '../store/Strategies'
import {_} from '@codeborne/i18n-json'

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {strategies.map(strategy => {
          return (
            <li key={strategy.id}>
              <Link
                className='dropdown-link' to={'/strategy/' + strategy.id} onClick={() => setClick(false)}>
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