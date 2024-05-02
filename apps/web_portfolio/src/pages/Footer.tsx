import React from 'react'
import '@styles/Footer.scss'
import SocialMedia from '../components/SocialMedia'

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-header">
        <h4>Thank you for visiting my portfolio!</h4>
        <span>
          I hope you enjoyed exploring my work and getting to know me better.
        </span>
      </div>
      <div className="footer-content">
        <h5>If you want to say hello</h5>
        <p>I look forward to connecting with you!</p>
        <div className="footer-social-media">
          <SocialMedia />
        </div>
      </div>
      <span className="footer-end">
        Let's create something amazing together!
      </span>
    </footer>
  )
}

export default Footer
