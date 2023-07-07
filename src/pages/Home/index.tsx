import React from 'react'
import CardLogement from '../../components/CardLogement'
import Banner from '../../components/Banner'

const Home: React.FC = () => {
  // const { logementTitle } = useParams()

  return (
    <React.Fragment>
      <Banner />
      <CardLogement />
    </React.Fragment>
  )
}

export default Home
