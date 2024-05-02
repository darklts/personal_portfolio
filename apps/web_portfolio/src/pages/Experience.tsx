import React, { useRef } from 'react'

import '@styles/Experience.scss'
import JobPosition from '../components/labels/JobPosition'
import { ColorBorderButton } from '../components/buttons/Buttons'

import viewIcon from '@icons/view-icon.svg'
import CV from '@files/cv-picture.pdf'
import useNavbarSelected from '../hooks/useNavbarSelected'

const Experience: React.FC = () => {
  const ref = useRef<HTMLElement>(null)

  useNavbarSelected(ref)

  return (
    <section ref={ref} id="resume-link" className="experience-container">
      <h2>Experiences</h2>
      <div className="experience-grid">
        <div className="experience-grid-text">
          <p>
            Throughout my professional career, I have been fortunate to gain
            valuable experience in various work environments. Each opportunity
            has provided me with a unique scenario to learn, grow and face new
            challenges.
          </p>
          <p>
            In summary, my journey in the workplace has equipped me with a
            diverse set of skills and knowledge. I have learned to adapt to
            changing environments, work as part of a team, and face challenges
            with determination and resilience. I am excited to continue to grow
            and take advantage of every new opportunity that presents itself,
            always seeking to exceed expectations and achieve outstanding
            results.
          </p>
          <div className="experience-button-resume">
            <ColorBorderButton
              icon={viewIcon}
              title="View Full Resume"
              link={CV}
            />
          </div>
        </div>
        <div className="experience-grid-card">
          <JobPosition
            title="Digital Transformation"
            company="SOIN"
            date="Feb - Present"
            description="I successfully drove the adoption of digital solutions, identifying opportunities for improvement and designing and implementing effective strategies. Clients included the Department of Health, Department of Immigration, and Department of IRS of the government of Costa Rica."
          />
          <JobPosition
            title="Entry Level Software Developer"
            company="SOIN"
            date="Jun 2020 - Feb 2022"
            description="Developed, maintained, and shipped production code with high standards of quality for web system project. The client was the Department of Health of Costa Rica."
          />
          <JobPosition
            title="Software Developer Internship"
            company="SOIN"
            date="March - Jun 2021"
            description="Developed, maintained, and shipped production code for web system project. The client was the Department of Health of Costa Rica."
          />
        </div>
      </div>
    </section>
  )
}

export default Experience
