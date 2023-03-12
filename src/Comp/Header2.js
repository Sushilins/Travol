import React from 'react';
import { Link } from 'react-router-dom';
import './header2.css'

function Header2() {
    return (
        <>
            <div className='container-fluid aief mb-lg-5'>
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
                <div className='container py-lg-5 mt-lg-5'>
                    <p className='satr'>IMAGES & VIDEO</p>
                    <h1 className='cant'>IMAGES AND <span className='higher'>VIDEO GALLERY</span></h1>
                </div>
            </div>
        </>
    )
}

export default Header2
