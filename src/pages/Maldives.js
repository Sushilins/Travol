import React from 'react';
import "./maldives.css";
import Header4 from '../Comp/Header4'
import { BiTime } from "react-icons/bi";
import { RxPerson, } from "react-icons/rx";
import { GrLocation, } from "react-icons/gr";

function Maldives() {
  return (
    <>
      <Header4 />
      <div className='container-fluid p-lg-0'>
        <div className='container p-lg-0 mt-lg-5'>
          <div className='d-flex'>
          <p className='paca'>TRAVEL AGENCY</p>
          <h1 className='higher'>SONEVA JANI <span className='pacas'>MALDIVES</span></h1>
          <div className='container-fluid okk d-flex p-lg-0 justify-content-between'>
            <div className=''>
                <div className='d-flex mb-lg-4 gap-lg-2'>
                  <BiTime size={30} />
                  <p className='wyyyz'>8 Days</p>
                </div>
                <div className='d-flex gap-lg-2'>
                  <GrLocation size={30}  />
                  <p  className='wyyyz'>Maldives</p>
                </div>
            </div>
            <div className=''>
              <div className='d-flex gaplg-3'>
                <RxPerson size={30}/>
                <p  className='wyyyz'>Group: 5 - 10 people</p>
              </div>
            </div>
          </div>
          <div className='container-fluid okkc mt-lg-5 p-lg-0'>
            <h2 className='higher'>Information</h2>
            <p className='wyyyz'>
            Travel non lorem ac erat suscipit bibendum nulla facilisi. Sedeuter nunc volutpat miss sapien conseyen turpeutionyer masin libero sevenion vusetion viventa augue sit amet hendrerit vestibulum. Duisterione venenatis lacus gravida eros ut turpis interdum ornare.
            </p>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Maldives
