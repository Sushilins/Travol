import React from 'react';
import './gallery.css';
import Header2 from '../Comp/Header2';

function Gallery() {
  return (
    <>
    <Header2/>
      <div className='container-fluid pb-lg-5 bg-success-subtle pt-lg-5 drug'>
        <div className='container p-lg-0 pt-lg-5'>
          <p className='cant'>IMAGES</p>
          <h1 className='higher'>IMAGE &<span className='moth'> GALLERY</span></h1>
        </div>
        <div className='container p-lg-0 mb-lg-5 mt-lg-3'>
          <div className='container-fluid p-lg-0 d-flex justify-content-between gap-4'>
            <div className='flex-grow-1 nams '>
              <div className='fra'>
              </div>
            </div>
            <div className='flex-grow-1 namsa '>
              <div className='gree'></div>
            </div>
            <div className='flex-grow-1 namsb '>
              <div className='cana'></div>
            </div>
          </div>
          <div className='container-fluid p-lg-0 d-flex justify-content-between mt-lg-4 mb-lg-3 gap-3'>
            <div className='mal1 '>
              <div className='mal'>
              </div>
            </div>
            <div className='ital1 '>
              <div className='ital'>
              </div>
            </div>
          </div>
          <div className='container-fluid p-lg-0 d-flex justify-content-between gap-4'>
            <div className='flex-grow-1 nams3 '>
              <div className='fra3'>
              </div>
            </div>
            <div className='flex-grow-1 namsa3 '>
              <div className='gree3'></div>
            </div>
            <div className='flex-grow-1 namsb3 '>
              <div className='cana3'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Gallery
