import React, { useState } from 'react'
import '../../styles/colapse.css'

interface ColapseProps {
  title: string
  description: string | string[]
  type: string
}

const Colapse: React.FC<ColapseProps> = ({ title, description, type }) => {
  const [isOpen, updateIsOpen] = useState(false)
  return (
    <aside className="colapse-container">
      <div className="colapse-title" onClick={() => (isOpen ? updateIsOpen(false) : updateIsOpen(true))}>
        <h2>{title}</h2>
        {isOpen ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}
      </div>
      <div className={isOpen ? 'content show' : 'content'}>
        {Array.isArray(description) ? (
          <ul className="colapse-description">
            {description.map((equipment, index) => (
              <li key={`${equipment}-${index}`}>{equipment}</li>
            ))}
          </ul>
        ) : (
          <p className="colapse-description"> {description}</p>
        )}
      </div>
    </aside>
  )
}

export default Colapse
