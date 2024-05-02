import React, { useState, useEffect } from 'react'

import MerakaiLogo from '@logos/merakai_studio_logo.svg'

import '@styles/Menu.scss'

const Navbar: React.FC = () => {
  const [stickyClass, setStickyClass] = useState<string>('')

  useEffect(() => {
    const stickNavbar = () => {
      const windowHeight = window.scrollY
      setStickyClass(windowHeight > window.innerHeight ? 'sticky-nav' : '')
    }

    window.addEventListener('scroll', stickNavbar)
    return () => {
      window.removeEventListener('scroll', stickNavbar)
    }
  }, [])

  return (
    <nav className={`navbar ${stickyClass}`}>
      <div>
        <ul className="principal-menu-ul principal-menu-ul-left">
          <li>
            <a href="#header-section" className="nav-mobile-logo">
              <img src={MerakaiLogo} alt="Merakai Studio Logo" />
              Merakai Studio
            </a>
          </li>
        </ul>

        <ul className="principal-menu-ul principal-menu-ul-right">
          <li id="navbar-about-link">
            <a href="#about-link">About</a>
          </li>
          <li id="navbar-resume-link">
            <a href="#resume-link">Resume</a>
          </li>
          <li id="navbar-project-link">
            <a href="#project-link">Portfolio</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
