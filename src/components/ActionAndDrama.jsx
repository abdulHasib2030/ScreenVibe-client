
import React, { useContext, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const ActionAndDrama = ({data}) => {
  const [swiperRef, setSwiperRef] = useState(null);
  const { user} = useContext(AuthContext)
  console.log(data.length);
  return (
    <>
      <section className="mb-10 relative md:-top-8 mt-6 md:mt-0 shadow-xl pb-4" id='actionDrama-id'>
        <div className='md:container mx-auto my-10 w-[90%] '>

        
       
        <h1 className='text-start text-5xl  font-bold font bottom-0  '>Action & Drama Movies</h1>
        <div className='divider   '></div> 
        <Swiper  
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}

          loop={true} 
          autoplay={{
            delay: 5000, 
            disableOnInteraction: false, 
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className=""
          
        >


          {data.map((item) => (
            <SwiperSlide>
              <div key={item.id} className='cursor-pointer hover:opacity-70 hover:duration-500 hover:ease-in-out' >
 <Link state={{title:`movie-details/${item._id}`}} to={`/movie-details/${item._id}`}>
                <figure>
                  <img src={item.poster}  className="w-full" />
                </figure>
                <div className="pl-2">
                <ul className="mt-2 text-sm text-start text-gray-600 md:flex  gap-2">
                    
                      <li className="">
                     {item.year},
                      </li>
                      <li className='md:flex flex-wrap'>{item.genres.map((gen, idx)=> <li>{gen}{idx === item.genres.length-1? '': ','}</li>)}</li>
                  
                  </ul>
                  
                  <h3 className=" text-start font-semibold text-gray-700">{item.title}</h3>
                  <div className="card-actions mt-2">
                  
                  </div>
                </div>
              </Link>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
        </div>
      </section>


    </>
  );
}

export default ActionAndDrama;