import React from 'react';
import "./footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import vid from "../Video/vid.mp4";

function Footer() {
  return (
    <>
      <div className='container-fluid p-lg-0 my-lg-5 snort'>
        <div className='container-fluid p-lg-0 alk mb-lg-5'>
          <video className='mb-lg-5' src={vid} autoPlay muted loop></video>
          <div className='container'>
          <h1 className='oqp mb-lg-2 mt-lg-2'>"DISCOVER THE <span className='oiq'>WHOLE WORLD</span> WITH OUR GUIDE"</h1>
          </div>
        </div>
      </div>
      <div className='container-fluid raj pt-lg-5 p-lg-0'>
        <div className='container p-lg-0'>
          <div className='container d-flex gap-3 justify-content-between py-lg-3'>
            <div className='bok'>
              <img src='https://duruthemes.com/demo/html/travol/multipage-slideshow/img/logo-light.png' width={150} alt=''></img>
              <p className='die mt-lg-5'>Quisque imperdiet sapien porttito the bibendum sellentesque the commodo erat acar accumsa lobortis, enim diam the nesuen.</p>
              <div className='d-flex gap-3'>
                <div className='icd'><a rel="noreferrer" href='https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwiEo4CJ1ND9AhXHUGwGHa4tCMUQPAgI' target='_blank'><FaFacebookF style={{ fill: 'white' }} /></a></div>
                <div className='icd'><a rel="noreferrer" href='https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwiEo4CJ1ND9AhXHUGwGHa4tCMUQPAgI' target='_blank'><FaTwitter style={{ fill: 'white' }} /></a></div>
                <div className='icd'><a rel="noreferrer" href='https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwiEo4CJ1ND9AhXHUGwGHa4tCMUQPAgI' target='_blank'><FaInstagram style={{ fill: 'white' }} /></a></div>
                <div className='icd'><a rel="noreferrer" href='https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwiEo4CJ1ND9AhXHUGwGHa4tCMUQPAgI' target='_blank'><SiGmail style={{ fill: 'white' }} /></a></div>
              </div>
            </div>
            <div className='bok'>
              <ul className='wd1'>
                <h4 className='mb-lg-5 die'>Quick Links</h4>
                <li className='wd1'>
                  <p className='d-flex gap-4 die'>
                    <h5>Call us:</h5>
                    +1 123-456-0606
                  </p>
                </li>
                <li>
                  <p className='d-flex gap-4 die'>
                    <h5>Write to us:</h5>
                    info@travolagency.com
                  </p>
                  </li>
                <li>
                  <p  className='d-flex gap-4 die'>
                    <h5>Address:</h5>
                    24 King St, SC 29401 USA
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className='container-fluid pt-lg-3 border-top mt-lg-3'>
            <p className='die'>©2023 DuruThemes. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
