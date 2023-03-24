import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../../datas/data'
import Caroussel from '../../components/Caroussel'
import InfoGeneral from '../../components/InfoGeneral'
import Details from '../../components/Details'
import Footer from '../../components/Footer'

function Logement() {
  const { logementId } = useParams()
  const logement = data.filter((element) => element.id === logementId)

  return (
    <React.Fragment>
      <Caroussel source={logement[0].pictures} alt={logement[0].title} />
      <InfoGeneral title={logement[0].title} location={logement[0].location} hostName={logement[0].host.name} hostPic={logement[0].host.picture} tags={logement[0].tags} rate={logement[0].rating}/>
      <Details description={logement[0].description} equipments={logement[0].equipments}/>
      <Footer />
    </React.Fragment>
  )
}

export default Logement
