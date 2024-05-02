import React, { useState, useRef } from 'react'

import { SwitchButton } from '../components/buttons/Buttons'
import useNavbarSelected from '../hooks/useNavbarSelected'
import ProjectCard from '../components/cards/ProjectCard'

import DNProject from '../assets/images/dn-project.png'
import DN from '../assets/logos/DN.svg'
import JOMA from '../assets/logos/Joma_Logo.svg'
import Saeta from '../assets/logos/Saeta.svg'
import MyPortfolio from '../assets/images/my_portfolio_v1.png'
import TEP from '../assets/logos/TEP_Logo.svg'

import '../styles/Projects.scss'
import '../styles/buttons/Buttons.scss'

const Projects: React.FC = () => {
  const [onProject, setOnProject] = useState<boolean>(true)
  const ref = useRef<HTMLDivElement>(null)

  useNavbarSelected(ref)

  return (
    <section ref={ref} id="project-link" className="projects-container">
      <div className="projects-grid-container">
        <h2 className="projects-container-title">Projects</h2>
        <p>
          Throughout my career as a developer, I have had the opportunity to
          embark on several personal projects that have allowed me to put into
          practice my creativity, technical skills and passion for innovation.
          These personal projects have not only been a source of continuous
          learning, but also a platform to explore new technologies and
          demonstrate my ability to take ideas from conceptualization to
          successful implementation.
        </p>
        <SwitchButton onProject={onProject} setOnProject={setOnProject} />
      </div>

      {onProject ? (
        <div className="projects-grid">
          <ProjectCard
            image={MyPortfolio}
            description={
              'My Personal Portfolio Website is a professional and visually stunning online portfolio built using the React framework. It serves as a showcase for individuals, freelancers, or creative professionals to display their work, skills, and achievements in a captivating and interactive manner.'
            }
            title={'My Portfolio v1'}
            tags={['react', 'javascript', 'node', 'sass']}
          />
          <ProjectCard
            image={DNProject}
            description={
              'The DN eCommerce Store is a modern and user-friendly online shopping platform built using the React framework. It provides a seamless and engaging shopping experience for customers, allowing them to browse through a wide range of products, add items to their cart, and complete their purchases with ease.'
            }
            title={'DN Ecommerce'}
            tags={['react', 'javascript', 'sanity', 'next', 'shopify']}
          />
        </div>
      ) : (
        <div className="projects-grid">
          <ProjectCard
            image={Saeta}
            description={
              'Promotional video for the opening of the brand in Costa Rican commerce. Emphasizing the different sports in which the brand performs.'
            }
            title={'Saeta Promoclip'}
            tags={['Filmora']}
            link={'https://www.youtube.com/watch?v=oyIpN20gWGE'}
            buttonTitle={'Watch video'}
          />
          <ProjectCard
            image={DN}
            description={
              'Overall, the logo design for DN is a captivating visual representation that embodies the brands identity, evokes emotions, and leaves a lasting impression. It serves as a memorable symbol that reinforces the brands presence and fosters recognition among its audience.'
            }
            title={'DN Brand'}
            tags={['Illustrator']}
          />
          <ProjectCard
            image={TEP}
            description={
              'Creating a brand involves a meticulous process of developing a unique identity and establishing a strong presence in the market. TEP understands the significance of brand creation and has implemented a comprehensive marketing strategy to effectively promote its offerings and engage with its target audience.'
            }
            title={'TEP (Re-Branding)'}
            tags={['Illustrator', 'Photoshop', 'Canva']}
          />
          <ProjectCard
            image={JOMA}
            description={
              'The process of rebranding a sports team is an exciting and transformative journey that involves refreshing the teams identity, connecting with fans on a deeper level, and positioning the team for long-term success.'
            }
            title={'JOMA Futsal (Re-Branding)'}
            tags={['Illustrator', 'photoshop']}
          />
        </div>
      )}
    </section>
  )
}

export default Projects
