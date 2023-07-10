import '../../styles/infoGeneral.css'
import React from 'react'
const starEmpty = require('../../assets/star-empty.svg') as string
const starFull = require('../../assets/star-full.svg') as string

interface InfoGeneralProps {
  title: string
  location: string
  hostName: string
  hostPic: string
  tags: string[]
  rate: string
}

const InfoGeneral: React.FC<InfoGeneralProps> = ({ title, location, hostName, hostPic, tags, rate }) => {
  const range = [1, 2, 3, 4, 5]
  return (
    <section className="general-info">
      <article className="location-tag">
        <div className="location">
          <h2>{title}</h2>
          <h3>{location}</h3>
        </div>
        <div className="tag">
          {tags.map((tag, index) => (
            <span key={`${tag}-${index}`} className="tag-item">
              {tag}
            </span>
          ))}
        </div>
      </article>
      <article className="host-rating">
        <div className="host">
          <h3>
            {hostName.split(' ')[0]} <br /> {hostName.split(' ')[1]}
          </h3>
          <div className="host-picture">
            <img src={hostPic} alt={hostName} />
          </div>
        </div>
        <div className="rating">{range.map((rangeElem, index) => (parseInt(rate) >= rangeElem ? <img key={`${rangeElem}-${index}`} src="../../assets/star-full.svg" alt="icone étoile remplis" /> : <img key={`${rangeElem}-${index}`} src={starEmpty} alt="icone étoile vide" />))}</div>
      </article>
    </section>
  )
}

export default InfoGeneral
