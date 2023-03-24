import Colapse from '../Colapse'
import '../../styles/details.css'

function Details({ description, equipments }) {
  return (
    <section className="details-container">
      <Colapse title="Description" description={description} type="text" />
      <Colapse title="Équipements" description={equipments} type="array" />
    </section>
  )
}

export default Details
