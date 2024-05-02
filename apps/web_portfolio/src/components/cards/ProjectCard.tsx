import React from 'react'
import TagLanguage from '../tags/TagLanguage'
import { ColorBorderButton } from '../buttons/Buttons'
import viewIcon from '@icons/view-icon.svg'

import '../../styles/cards/ProjectCard.scss'

interface ProjectCardProps {
  image: string
  description: string
  title: string
  tags: string[]
  link?: string
  buttonTitle?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image = '',
  description = 'Description',
  title = 'Title',
  tags = [],
  link,
  buttonTitle = 'View',
}) => {
  return (
    <div className="project-card-container">
      <img className="project-card-img" src={image} alt={title} />
      <div className="project-card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="project-card-tags">
          {tags.map((tag, index) => (
            <TagLanguage key={index} title={tag} />
          ))}
        </div>
        {link && (
          <div className="button-resume">
            <ColorBorderButton
              icon={viewIcon}
              title={buttonTitle}
              link={link}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
