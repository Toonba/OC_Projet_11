import data from '../../datas/data'
import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/cardLogement.css'

const CardLogement: React.FC = () => {
  return (
    <section className="cardLogement-bg">
      <ul className="cardLogement-list-container">
        {data.map((logement) => (
          <Link key={logement.id} to={`/logement/${logement.id}`} className="cardLogement-Item">
            <img src={logement.cover} alt={logement.title} className="cardLogement-picture" />
            <li className="cardLogement-title">{logement.title}</li>
          </Link>
        ))}
      </ul>
    </section>
  )
}

export default CardLogement
