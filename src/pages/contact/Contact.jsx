import React from 'react'
import './contact.css'
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaDribbble,
} from "react-icons/fa"

import { FiSend } from 'react-icons/fi'

const Contact = () => {
  return (
    <section className="portfolio section">
    <h2 className="section__title">Get In <span>Touch</span></h2>

    <div className="contact__container container grid">
      <div className="contact__data">
        <h3 className="contact__title">Don't be shy !</h3>

        <p className='contact__description'>
          Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or be part of your visions.
        </p>

        <div className='contact__info'>
          <div className="info__item">
            <FaEnvelopeOpen className='info__icon'/>

            <div>
              <span className="info__title">Mail me</span>
              <h4 className="info__desc">sandeephaldar4888@.com</h4>
            </div>
          </div>

          <div className="info__item">
            <FaPhoneSquareAlt className='info__icon'/>

            <div>
              <span className="info__title">Call me</span>
              <h4 className="info__desc">7999593764</h4>
            </div>
          </div>

          <div className="contact__socials">
            <a href="https://facebook.com" className="contact__social-link"><FaFacebookF/></a>

            <a href="https://twitter.com" className="contact__social-link"><FaTwitter/></a>

            <a href="https://youtube.com" className="contact__social-link"><FaYoutube/></a>

            <a href="https://dribbble.com" className="contact__social-link"><FaDribbble/></a>
          </div>
        </div>
      </div>

      <form action="" className="contact__form">
        <div className="form__input-group">
          <div className="form__input-div">
            <imput className="form__container">
              <input type="text" placeholder='Your Name' className="form__control"  />
            </imput>
          </div>

          <div className="form__input-div">
            <imput className="form__container">
              <input type="email" placeholder='Your Email' className="form__control"  />
            </imput>
          </div>

          <div className="form__input-div">
            <imput className="form__container">
              <input type="text" placeholder='Your subject' className="form__control"  />
            </imput>
          </div>
        </div>

        <div className="form__input-div">
          <textarea placeholder='your massage' className="form__control textarea"></textarea>
        </div>

        <button className='button'> Send Message 
        <span className="button__icon contact__button-icon"><FiSend/></span>
        </button>
      </form>
    </div>
    </section>
  )
}

export default Contact