import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css";

function Header() {
    return (
        <>
            <div className='container-fluid chi'>
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
                <div className='container p-lg-0 text-center pt-lg-5'>
                    <div className='mt-lg-5'>
                        <p className='o'>LET'S TRAVEL THE WORLD WITH US</p>
                        <h1 className='p'>EXPLORE THE WORLD<br /> WITH <span className='oiui'>TRAVOL</span></h1>
                        <div className='container-fluid nazi p-lg-3 mt-lg-4'>
                            <div className='search d-flex justify-content-evenly gap-1 '>
                                <div className='flex-grow-1'>
                                    <input className='w-100 hih ps-lg-3 border-0 bof fw-semibold' type='text' placeholder='Destination .&nbsp;.&nbsp;.&nbsp;.'></input>
                                    <div className='ser'></div>
                                </div>
                                <div className="btn-group flex-grow-1 dropup py-lg-0">
                                    <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        Transportation
                                    </button>
                                    <ul className="dropdown-menu py-lg-0 numb">
                                        <li className='so'>Transportation</li>
                                        <Link to="/transportation" className='bl'><li className='stop pt-2'>Air-Way</li></Link>
                                        <li><hr className="dropdown-divider" /></li>
                                        <Link to="/transportation" className='bl'><li className='stop'>Water-Way</li></Link>
                                        <li><hr className="dropdown-divider" /></li>
                                        <Link to="/transportation" className='bl'><li className='stop'>Rail-Way</li></Link>
                                        <li><hr className="dropdown-divider" /></li>
                                        <Link to="/transportation" className='bl'><li className='stop'>Others</li></Link>
                                    </ul>
                                </div>
                                <div className="btn-group flex-grow-1 dropup">
                                    <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        Duration
                                    </button>
                                    <ul className="dropdown-menu py-lg-0 numb1">
                                        <li className='so'>Duration</li>
                                        <Link to="/duration" className='bl'><li className='stop pt-2'>1 DAY</li></Link>
                                        <li><hr className="dropdown-divider" /></li>
                                        <Link to="/duration" className='bl'><li className='stop'>1 DAY 1 NIGHT</li></Link>
                                        <li><hr className="dropdown-divider" /></li>
                                        <Link to="/duration" className='bl'><li className='stop'>2 DAYS 1 NIGHT</li></Link>
                                        <li><hr className="dropdown-divider" /></li>
                                        <Link to="/duration" className='bl'><li className='stop'>4 DAYS</li></Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header
