import React, { useState } from 'react'

import ListMenuIcon from '@icons/menu-list-icon.svg'
import MerakaiLogo from '@logos/merakai_studio_logo.svg'

import '@styles/Menu.scss'

const NavbarMobile: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  const handleShowMenu = () => setShowMenu(!showMenu)

  return (
    <>
      <div className="nav-mobile-header">
        <a href="#" className="nav-mobile-logo">
          <img src={MerakaiLogo} alt="Logo" />
          Merakai Studio
        </a>
        <label
          className="nav-mobile-hamb"
          htmlFor="side-menu"
          onClick={handleShowMenu}
        >
          <img src={ListMenuIcon} alt="List Icon" />
        </label>
      </div>
      {showMenu && (
        <nav className="nav-mobile">
          <ul onClick={handleShowMenu} className="nav-mobile-menu">
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
        </nav>
      )}
    </>
  )
}

export default NavbarMobile
