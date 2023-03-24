import { useState } from 'react'
import '../../styles/caroussel.css'

function Caroussel({ source, alt }) {
  const [count, updateCount] = useState(0)
  return (
    <section className="caroussel">
      {source.length > 1 ? <i className="fa-solid fa-chevron-left" onClick={() => (count === 0 ? updateCount(source.length - 1) : updateCount(count - 1))}></i> : null}
      <img src={source[count]} alt={alt} className="caroussel-img" />
      <span className='caroussel-count'>{`${count + 1}/${source.length}`}</span>
      {source.length > 1 ? <i className="fa-solid fa-chevron-right" onClick={() => (count === source.length - 1 ? updateCount(0) : updateCount(count + 1))}></i> : null}
    </section>
  )
}

export default Caroussel
