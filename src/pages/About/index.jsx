import Colapse from '../../components/Colapse'
import Footer from '../../components/Footer'
import about from '../../datas/about'
import React from 'react'
import '../../styles/about.css'

function About() {
  // const { logementTitle } = useParams()

  return (
    <React.Fragment>
      <section className='banner-about'>
      </section>
      <section className="about-details">
        {about.map((element, index) => (
          <Colapse title={element.titre} description={element.text} type="text" key={`${element.titre}-${index}`} />
        ))}
      </section>
      <Footer />
    </React.Fragment>
  )
}

export default About
