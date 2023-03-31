import '../../styles/infoGeneral.css'
import starEmpty from '../../assets/star-empty.svg'
import starFull from '../../assets/star-full.svg'

function InfoGeneral({ title, location, hostName, hostPic, tags, rate }) {
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
        <div className="rating">{range.map((rangeElem, index) => (rate >= rangeElem ? <img key={`${rangeElem}-${index}`} src={starFull} alt="icone étoile remplis" /> : <img key={`${rangeElem}-${index}`} src={starEmpty} alt="icone étoile vide" />))}</div>
      </article>
    </section>
  )
}

export default InfoGeneral
