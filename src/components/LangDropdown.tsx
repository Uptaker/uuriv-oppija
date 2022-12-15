import classNames from 'classnames'
import React, {useState} from 'react'
import {lang, langs, rememberLang} from '@codeborne/i18n-json'
import s from './LangDropdown.module.scss'


function LangDropdown() {
    

    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);

    function handleLangSelect(lang: string) {
        rememberLang(lang)
        location.reload()
    }
    
    console.log(lang)
    for(let i=0; i<2; i++){
        console.log(langs[i])
    }
    
    return (
        <>
        
          <ul
            onClick={handleClick}
            className={classNames({
              [s.langDropdownMenu]: true,
              'clicked': click,
            })}
          >
            {langs.map(e => {
              return (
                <li key={e} value={e} className={classNames(s.langDrowdownItem, s.langDropdownLink, {[s.langItemHighlighted]: e==lang} )}   onClick={() => handleLangSelect(e)} >
               
                    {e.toUpperCase()}
                  
                </li>
              );
            })}
          </ul>
        </>
      );
  }
  
  export default LangDropdown;
