import React, { useRef } from 'react'

import ImageLabel from '../components/labels/ImageLabel'
import ListLabel from '../components/labels/ListLabel'
import useNavbarSelected from '../hooks/useNavbarSelected'

import Code from '../assets/icons/code_icon.svg'
import WebDeveloper from '../assets/icons/web_developer_icon.svg'
import GraphicDesign from '../assets/icons/graphic_design_icon.svg'
import ReactJS from '../assets/icons/react-js-icon.svg'
import Tailwind from '../assets/icons/tailwind-css-icon.svg'
import Typescript from '../assets/icons/Typescript_icon.svg'
import Webpack from '../assets/icons/webpack-icon.svg'
import Node from '../assets/icons/node-js-icon.svg'
import Postgres from '../assets/icons/postgresql-icon.svg'
import Python from '../assets/icons/python-icon.svg'
import Photoshop from '../assets/icons/photoshop-icon.svg'
import Illustrator from '../assets/icons/illustrator-icon.svg'
import CostaRicaFlag from '../assets/icons/Flag_of_Costa_Rica.svg'

import '../styles/About.scss'

interface Skill {
  icon: string
  name: string
}

const frontendList: Skill[] = [
  { icon: ReactJS, name: 'React' },
  { icon: Tailwind, name: 'Tailwind' },
  { icon: Typescript, name: 'Typescript' },
  { icon: Webpack, name: 'Webpack' },
]

const backendList: Skill[] = [
  { icon: Node, name: 'Node' },
  { icon: Postgres, name: 'Postgres' },
  { icon: Python, name: 'Python' },
]

const designerList: Skill[] = [
  { icon: Photoshop, name: 'Photoshop' },
  { icon: Illustrator, name: 'Illustrator' },
]

const About: React.FC = () => {
  const ref = useRef<HTMLElement>(null)

  useNavbarSelected(ref)

  return (
    <section ref={ref} id="about-link" className="about-container">
      <div className="about-iam">
        <div className="about-iam-text">
          <h4>Hi over there! I'm Richard Layne</h4>
          <p>
            I am a passionate and versatile programmer and graphic designer.
            With technical and creative skills, I bring ideas to life through
            lines of code and stunning visual designs. My passion for both
            disciplines is reflected in the constant pursuit of excellence and
            the ability to combine the functional with the aesthetic. I consider
            myself a digital artist, a problem solver, and a creator of
            memorable experiences.
          </p>
          <div className="costa-rica-flag">
            <img src={CostaRicaFlag} alt="Costa Rica Flag" />
            <span>Pura vida!!!</span>
          </div>
        </div>
      </div>
      <div className="about-table">
        <ImageLabel
          image={Code}
          title="Backend Developer"
          subtitle="Software is the bridge between imagination & reality"
          description="These are my skills"
        >
          {backendList.map((element, index) => (
            <ListLabel key={index} name={element.name} icon={element.icon} />
          ))}
        </ImageLabel>
        <ImageLabel
          image={WebDeveloper}
          title="Frontend Developer"
          subtitle="Code is my canvas and programming my art form"
          description="These are my skills"
        >
          {frontendList.map((element, index) => (
            <ListLabel key={index} name={element.name} icon={element.icon} />
          ))}
        </ImageLabel>
        <ImageLabel
          image={GraphicDesign}
          title="Graphic Designer"
          subtitle="You make my heart skip a beat with your creations"
          description="These are my skills"
        >
          {designerList.map((element, index) => (
            <ListLabel key={index} name={element.name} icon={element.icon} />
          ))}
        </ImageLabel>
      </div>
    </section>
  )
}

export default About
