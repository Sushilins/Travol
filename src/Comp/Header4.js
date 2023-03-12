import React from 'react'
import './header4.css'
import { Link } from 'react-router-dom';

function Header4() {
  return (
    <>
      <div className='container-fluid aiepp mb-lg-5'>
                <div className='container d-flex justify-content-between py-lg-3 var border-bottom'>
                    <div className='p-lg-0 '>
                        <Link to='/'>
                            <img src='https://duruthemes.com/demo/html/travol/multipage-slider/img/logo-light.png' width={150} alt=''></img>
                        </Link>
                    </div>
                    <div className='p-lg-0'>
                        <ul className='gap-5 d-flex mt-lg-1'>
                            <li>
                                <Link to='/' className='d'>Home</Link>
                            </li>
                            <li>
                                <Link to='/destinations' className='d'>Destinations</Link>
                            </li>
                            <li>
                                <Link to='/gallery' className='d'>Gallery</Link>
                            </li>
                            <li>
                                <Link to='/blog' className='d'>Blog</Link>
                            </li>
                            <li>
                                <Link to='/durations' className='d'>Durations</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Header4
