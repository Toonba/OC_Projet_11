import React from 'react'
import CardLogement from '../../components/CardLogement'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'

function Home() {
  // const { logementTitle } = useParams()

  return (
    <React.Fragment>
      <Banner />
      <CardLogement />
      <Footer />
    </React.Fragment>
  )
}

export default Home
