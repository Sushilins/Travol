import React from 'react';
import Header from '../Comp/Header';
import "./body.css";
import { Link } from 'react-router-dom';
import { AiOutlineCheck, } from 'react-icons/ai';
import { FiPhoneCall, } from "react-icons/fi";
import { BiTime } from "react-icons/bi";
import { RxPerson, } from "react-icons/rx";
import { GrLocation, } from "react-icons/gr";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'
import { MdOutlineLocationOn, } from "react-icons/md";

import "react-multi-carousel/lib/styles.css";

function Body() {
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
      <Header/>
      <div className='container-fluid pt-lg-5 pb-lg-3'>
        <div className='container py-lg-5 d-flex justify-content-between mb-lg-5'>
          <div className='wiiio pt-lg-2'>
            <p className='oq mb-lg-2'>THE BEST TRAVEL AGENCY</p>
            <h1 className='oqp mb-lg-4'>DISCOVER THE <span className='oiq'>WORLD<br /></span>WITH OUR GUIDE</h1>
            <p className='her'>You can choose any country with good tourism.
              Agency elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat.
              Donec in quis the pellentesque velit. Donec id velit ac arcu posuere blane.
            </p>
            <p className='her'>Hotel ut nisl quam nestibulum ac quam nec odio elementum ceisue
              the miss varius natoque penatibus et magnis dis parturient monte.
            </p>
            <div className='container-fluid d-flex p-lg-0 gap-lg-3'>
              <div className='ins'><AiOutlineCheck style={{ fill: 'white' }} /></div>
              <div className=''><p className='hers'>20 Years of Experience</p></div>
            </div>
            <div className='container-fluid d-flex p-lg-0 gap-lg-3 mb-lg-4'>
              <div className='ins'><AiOutlineCheck style={{ fill: 'white' }} /></div>
              <div className=''><p className='hers'>150+ Tour Destinations</p></div>
            </div>
            <div className='container-fluid d-flex p-lg-0 gap-lg-3 align-items-center'>
              <div className=''><FiPhoneCall size={40} /></div>
              <div className='p-lg-0 gap-lg-0'>
                <p className='hers m-lg-0'>For information</p>
                <a href='tel:555-666-7777'>555-666-7777</a>
              </div>
            </div>
          </div>
          <div className='wiio pt-lg-2 position-'>
            <div className='container-fluid hot position-absolute'>
              <img className='hotn' src='https://duruthemes.com/demo/html/travol/multipage-slider/img/about.jpeg' alt='' />
              <div className='oran'></div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid pb-lg-5 bg-success-subtle pt-lg-5'>
        <div className='container p-lg-0 pt-lg-5'>
          <p className='oq'>CHOOSE YOUR PLACE</p>
          <h1 className='oqpr'>POPULAR <span className='oiq'>TOURS</span></h1>
        </div>
        <div className='container p-lg-0 mb-lg-5 mt-lg-3'>
          <div className='container-fluid p-lg-0 d-flex justify-content-between mb-lg-3 gap-3'>
            <div className='mal1 position-relative'>
              <div className='sr px-lg-3'>
                <div className='snor'>
                  <h3 className='pt-lg-2'><Link to='/maldives' className='bl'>Maldives Tour</Link></h3>
                </div>
                <div className='d-flex mt-lg-2 gap-lg-3'>
                  <div className='d-flex'>
                    <div className=''>
                      <BiTime />
                    </div>
                    <div className='wyy'>
                      <p>10 Days</p>
                    </div>
                  </div>
                  <div className='d-flex'>
                    <div className=''>
                      <RxPerson />
                    </div>
                    <div className='wyy'>
                      <p>12+</p>
                    </div>
                  </div>
                  <div className='d-flex'>
                    <div className=''>
                      <GrLocation />
                    </div>
                    <div className='wyy'>
                      <p>Maldives</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mal'>
              </div>
            </div>
            <div className='ital1 position-relative'>
              <div className='sra px-lg-3'>
                <div className='snor'>
                  <h3 className='pt-lg-2'><Link to='/italy' className='bl'>Italy Tour</Link></h3>
                </div>
                <div className='d-flex mt-lg-2 gap-lg-3'>
                  <div className='d-flex'>
                    <div className=''>
                      <BiTime />
                    </div>
                    <div className='wyy'>
                      <p>6 Days</p>
                    </div>
                  </div>
                  <div className='d-flex'>
                    <div className=''>
                      <RxPerson />
                    </div>
                    <div className='wyy'>
                      <p>6+</p>
                    </div>
                  </div>
                  <div className='d-flex'>
                    <div className=''>
                      <GrLocation />
                    </div>
                    <div className='wyy'>
                      <p>Italy</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='ital'>
              </div>
            </div>
          </div>
          <div className='container-fluid p-lg-0 d-flex justify-content-between gap-4'>
            <div className='flex-grow-1 nams position-relative'>
            <div className='srb px-lg-3'>
                <div className='snor'>
                  <h3 className='pt-lg-2'><Link to='/france' className='bl'>France Tour</Link></h3>
                </div>
                <div className='d-flex mt-lg-2 gap-lg-3'>
                  <div className='d-flex'>
                    <div className=''>
                      <BiTime />
                    </div>
                    <div className='wyyy'>
                      <p>10 Days</p>
                    </div>
                  </div>
                  <div className='d-flex'>
                    <div className=''>
                      <RxPerson />
                    </div>
                    <div className='wyyy'>
                      <p>6+</p>
                    </div>
                  </div>
                  <div className='d-flex'>
                    <div className=''>
                      <GrLocation />
                    </div>
                    <div className='wyyy'>
                      <p>France</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='fra'>
              </div>
            </div>
            <div className='flex-grow-1 namsa position-relative'>
            <div className='src px-lg-3'>
                <div className='snor'>
                  <h3 className='pt-lg-2'><Link to='/greece' className='bl'>Greece Tour</Link></h3>
                </div>
                <div className='d-flex mt-lg-2 gap-lg-3'>
                  <div className='d-flex'>
                    <div className=''>
                      <BiTime />
                    </div>
                    <div className='wyyy'>
                      <p>8 Days</p>
                    </div>
                  </div>
                  <div className='d-flex'>
                    <div className=''>
                      <RxPerson />
                    </div>
                    <div className='wyyy'>
                      <p>6+</p>
                    </div>
                  </div>
                  <div className='d-flex'>
                    <div className=''>
                      <GrLocation />
                    </div>
                    <div className='wyyy'>
                      <p>Greece</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='gree'></div>
            </div>
            <div className='flex-grow-1 namsb position-relative'>
            <div className='srd px-lg-3'>
                <div className='snor'>
                  <h3 className='pt-lg-2'><Link to='/canada' className='bl'>Canada Tour</Link></h3>
                </div>
                <div className='d-flex mt-lg-2 gap-lg-3'>
                  <div className='d-flex'>
                    <div className=''>
                      <BiTime />
                    </div>
                    <div className='wyyy'>
                      <p>6 Days</p>
                    </div>
                  </div>
                  <div className='d-flex'>
                    <div className=''>
                      <RxPerson />
                    </div>
                    <div className='wyyy'>
                      <p>7+</p>
                    </div>
                  </div>
                  <div className='d-flex'>
                    <div className=''>
                      <GrLocation />
                    </div>
                    <div className='wyyy'>
                      <p>Canda</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='cana'></div>
            </div>
          </div>
        </div>
      </div>
      <div className='c ontainer-fluid p-lg-0 mb-lg-5'>
        <div className='container-fluid p-lg-0 ugh mb-lg-5'>
          <div className='overlay text-center pt-lg-5'>
            <h1 className='mt-lg-5 pt-lg-5'>"CHOOSE US IF TRAVELLING IS YOU'RE PASSION.<br/>WE WILL HELP IN MAKING IT COMFORTABLE"</h1>
          </div>
        </div>
      </div>
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

export default Body
