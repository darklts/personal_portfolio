import React, { ReactNode } from 'react'

import '@styles/cards/Card.scss'

interface CardProps {
  title?: string // Hace que el título sea opcional
  children?: ReactNode // Tipifica children como cualquier nodo React válido
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="about-card">
      <div>
        <h3 className="about-card-title">{title ?? 'Título'}</h3>
        <div className="about-card-div"></div>
      </div>
      <div>{children}</div>
    </div>
  )
}

export default Card
