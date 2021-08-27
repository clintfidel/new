import React from 'react'
import Navbar from '../componets/Navbar';
import '../componets/FormCom.css'
import Signature from '../assets/icons(svg)/badgeIcon.svg'
import {Link} from 'react-router-dom'

const Survey = () => {
  return (
    <div>
      <Navbar />
      <div className="signature">
        <div className="signature-content">
          <p style={{color: '#989898'}}>By</p>
          <img src={Signature} alt="" />
          <p>Federal Housing Authority</p>
        </div>
      </div>
      <section className="form-section  survey-signature">
        <div className="header-div"></div>
       
          <p  className="header-desc">300,000 Affordable Housing Units</p>
        
        <h6 style={{textAlign: 'center', margin: '70px 0px'}}>Thanks for taking time to fill out this survey.</h6>
        <Link className="home-link" to="/">Back to home</Link>
      </section>
    </div>
  )
}

export default Survey
