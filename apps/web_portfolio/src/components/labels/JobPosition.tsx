import React from 'react'

import '@styles/labels/JobPosition.scss'

interface JobPositionProps {
  title: string
  company?: string
  description: string
  date: string
}

const JobPosition: React.FC<JobPositionProps> = ({
  title,
  company,
  description,
  date,
}) => {
  return (
    <>
      <div className="job-position-grid">
        <div className="job-position-date-grid">
          <span>{date}</span>
        </div>
        <div className="job-position-text-grid">
          <h4>{title}</h4>
          {company && <span>{company}</span>}
          <p>{description}</p>
        </div>
      </div>
      <hr className="hr-grid" />
    </>
  )
}

export default JobPosition
