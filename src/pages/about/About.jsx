import React from 'react'
import Stats from '../../components/Stats'
import Info from '../../components/info'
import { FaDownload } from 'react-icons/fa'
import CV from '../../assets/steve-Cv.pdf'

const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title">
          About <span>Me</span>
        </h2>

        <div className='about__container'>
          <div className="about__info">

            <ul className='info__list grid'>
              <Info/>
            </ul>

            <a href={CV} className='button'> Download CV 
            <span className="button__icon"><FaDownload/></span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About