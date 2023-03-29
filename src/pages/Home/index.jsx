import React from 'react'
import CardLogement from '../../components/CardLogement'
import Banner from '../../components/Banner'

function Home() {
  // const { logementTitle } = useParams()

  return (
    <React.Fragment>
      <Banner />
      <CardLogement />
    </React.Fragment>
  )
}

export default Home
