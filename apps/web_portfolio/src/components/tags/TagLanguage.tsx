import React from 'react'

import '../../styles/tags/TagLanguage.scss'

interface TagLenguageProps {
  title?: string
}

const TagLanguage: React.FC<TagLenguageProps> = ({ title = 'Tag' }) => {
  return <span className="tag-language">{title}</span>
}

export default TagLanguage
