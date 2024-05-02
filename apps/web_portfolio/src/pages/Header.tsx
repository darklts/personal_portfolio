import React from 'react'

import { PrintButton } from '../components/buttons/Buttons'
import SocialMedia from '../components/SocialMedia'

import merakaiStudio from '../assets/logos/merakai_studio_logo.svg'
import printIcon from '../assets/icons/print_icon.svg'
import CV from '../assets/files/cv.pdf'

import '../styles/Header.scss'

const Header: React.FC = () => {
  return (
    <header className="header" id="header-section">
      <div className="container">
        <div className="header-content">
          <div className="hello-content">
            <div className="visible">
              <p>Hello</p>
              <ul>
                <li>world !</li>
                <li>friend !</li>
                <li>users !</li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="header-subtitle">Welcome to...</h4>
            <h1 className="header-title">Merakai Studio</h1>
            <h6 className="header-mono">Web Developer | Graphic Designer</h6>
            <div className="header-social-media">
              <SocialMedia />
            </div>
            <div className="header-button">
              <PrintButton icon={printIcon} title="Resume" link={CV} />
            </div>
          </div>
        </div>
        <img className="header-logo" src={merakaiStudio} alt="logo" />
      </div>
    </header>
  )
}

export default Header
