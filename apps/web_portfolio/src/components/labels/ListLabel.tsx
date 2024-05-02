import React from 'react'

import '@styles/labels/ListLabel.scss'

interface ListLabelProps {
  name: string
  icon: string
  // No es necesario pasar `key` como prop al componente. `key` se usa en el contexto de listas/map.
}

const ListLabel: React.FC<ListLabelProps> = ({ name, icon }) => {
  return (
    <span className="list-label">
      <img src={icon} alt={`${name} icon`} />
      {name}
    </span>
  )
}

export default ListLabel
