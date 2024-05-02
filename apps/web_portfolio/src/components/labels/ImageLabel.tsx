import React, { ReactNode } from 'react'

import '@styles/labels/ImageLabel.scss'

interface ImageLabelProps {
  image: string
  title?: string
  subtitle?: string
  description?: string
  children?: ReactNode
}

const ImageLabel: React.FC<ImageLabelProps> = ({
  image,
  title = 'Title',
  subtitle = 'Is just a little title',
  description,
  children,
}) => {
  return (
    <div className="image-label">
      <div className="image-label-text">
        <div className="image-label-text-content">
          <img src={image} alt={title} />
          <h2>{title}</h2>
          <span>{subtitle}</span>
          <hr />
        </div>
        <div className="skills-label">
          <h4>{description}</h4>
          <p>{children}</p>
        </div>
      </div>
    </div>
  )
}

export default ImageLabel
