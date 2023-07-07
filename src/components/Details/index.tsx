import Colapse from '../Colapse'
import React from 'react'
import '../../styles/details.css'

interface DetailsProps {
  description: string
  equipments: string[]
}

const Details: React.FC<DetailsProps> = ({ description, equipments }) => {
  return (
    <section className="details-container">
      <Colapse title="Description" description={description} type="text" />
      <Colapse title="Équipements" description={equipments} type="array" />
    </section>
  )
}

export default Details
