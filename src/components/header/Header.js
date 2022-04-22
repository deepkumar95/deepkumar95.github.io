import React from 'react';
import './header.css';
import me from '../../assets/me.png';
import {DownLoadTalkAbout} from './CTA';
import HeaderSocial from './HeaderSocial';
const Header = () => {
  return (
    <header>
      <div className="container header_container">
          <h5>Hello I'm</h5>
          <h1>Deep Kumar</h1>
          <h5 className='text-light'>Java Developer</h5>

          <DownLoadTalkAbout/>

          <HeaderSocial/>

          <div className="me">
            <img src={me} alt="me" />
          </div>

          <a href="#contact" className="scroll_down">Scroll Down</a>

      </div>
    </header>
  )
}

export default Header