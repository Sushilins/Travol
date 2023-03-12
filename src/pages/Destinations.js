import React from 'react';
import Header1 from '../Comp/Header1';
import { Link } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'
import { MdOutlineLocationOn, } from "react-icons/md";

function Destinations() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
      <Header1/>
      <div className='container-fluid bg-success-subtle py-lg-5 mb-lg-5'>
        <div className='container p-lg-0 pt-lg-5 mb-lg-5'>
          <p className='oq'>TOP DESTINATIONS</p>
          <h1 className='oqpr'>POPULAR <span className='oiq'>DESTINATIONS</span></h1>
          <div className='my-lg-5'>
            <Carousel responsive={responsive}>
              <div className='category'>
                <div className='cate mb-lg-2'>
                  <img src='https://duruthemes.com/demo/html/travol/multipage-slideshow/img/destination/maldives1.jpg' alt='' className='imagi'/>
                </div>
                <div className='d-flex gap-lg-2'>
                  <MdOutlineLocationOn size={30} />
                  <p className='ches'><Link to='/maldives' className='bl'>Maldives</Link></p>
                </div>
              </div>
              <div className='category'>
                <div className='cate mb-lg-2'>
                  <img src='https://duruthemes.com/demo/html/travol/multipage-slideshow/img/destination/canada1.jpg' alt='' className='imagi'/>
                </div>
                <div className='d-flex gap-lg-2'>
                  <MdOutlineLocationOn size={30} />
                  <p className='ches'><Link to='/canada' className='bl'>Canada</Link></p>
                </div>
              </div>
              <div className='category'>
                <div className='cate mb-lg-2'>
                  <img src='https://duruthemes.com/demo/html/travol/multipage-slideshow/img/destination/italy1.jpg' alt='' className='imagi'/>
                </div>
                <div className='d-flex gap-lg-2'>
                  <MdOutlineLocationOn size={30} />
                  <p className='ches'><Link to='/italy' className='bl'>Italy</Link></p>
                </div>
              </div>
              <div className='category'>
                <div className='cate mb-lg-2'>
                  <img src='https://duruthemes.com/demo/html/travol/multipage-slideshow/img/destination/greece1.jpg' alt='' className='imagi'/>
                </div>
                <div className='d-flex gap-lg-2'>
                  <MdOutlineLocationOn size={30} />
                  <p className='ches'><Link to='/greece' className='bl'>Greece</Link></p>
                </div>
              </div>
              <div className='category'>
                <div className='cate mb-lg-2'>
                  <img src='https://duruthemes.com/demo/html/travol/multipage-slideshow/img/destination/france1.jpg' alt='' className='imagi'/>
                </div>
                <div className='d-flex gap-lg-2'>
                  <MdOutlineLocationOn size={30} />
                  <p className='ches'><Link to='/France' className='bl'>France</Link></p>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  )
}

export default Destinations
