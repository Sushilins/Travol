import React from 'react';
import Header4 from '../Comp/Header4';
import "./durations.css";

function Duration() {
  return (
    <>
      <Header4 />
      <div className='container-fluid bg-success-subtle mt-lg-5 py-lg-5 p-lg-0'>
        <div className='container p-lg-0 py-lg-5'>
          <h1 className='higher'>AVAILABLE STAYING DATES</h1>
          <div className='container-fluid p-lg-0'>
            <div className='p-lg-0 gap-lg-0'>
              <p className='satrz m-lg-0'>For more information:</p>
              <a href='tel:555-666-7777'>555-666-7777</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Duration
