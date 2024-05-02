import React from 'react'
import '@styles/buttons/Buttons.scss'

interface ButtonProps {
  icon: string
  title: string
  link: string
}

const PrintButton: React.FC<ButtonProps> = ({ icon, title, link }) => (
  <a className="print-button" href={link} download="Richard Layne - Resumé">
    <button type="button">
      <img className="print-icon" src={icon} alt="print" />
      <span className="span-icon">{title}</span>
    </button>
  </a>
)

const ColorBorderButton: React.FC<ButtonProps> = ({ icon, title, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <button type="button" className="color-border-button">
      <img src={icon} alt="icon" />
      <span>{title}</span>
    </button>
  </a>
)

interface SwitchButtonProps {
  onProject: boolean
  setOnProject: (value: boolean) => void
}

const SwitchButton: React.FC<SwitchButtonProps> = ({
  onProject,
  setOnProject,
}) => {
  return (
    <div className="switch-button">
      <button
        className={`switch-button-left ${
          onProject ? 'switch-button-active' : ''
        }`}
        onClick={() => setOnProject(true)}
      >
        Development
      </button>
      <button
        className={`switch-button-right ${
          !onProject ? 'switch-button-active' : ''
        }`}
        onClick={() => setOnProject(false)}
      >
        Designer
      </button>
    </div>
  )
}

export { PrintButton, ColorBorderButton, SwitchButton }
