
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
      <section className="mb-10 relative md:-top-24 mt-6 md:mt-0 shadow-xl pb-4">
        <div className='md:container mx-auto my-10'>

        
       
        <h1 className='text-start text-5xl  font-bold font bottom-0  '>Action & Drama Movies</h1>
        <div className='divider   '></div> 
        <Swiper  
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}

          loop={true} // Enable infinite loop
          autoplay={{
            delay: 5000, // Set autoplay delay in milliseconds
            disableOnInteraction: false, // Autoplay will not stop when the user interacts
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="md:container mx-auto w-[90%]"
          
        >


          {data.map((item) => (
            <SwiperSlide>
              <div key={item.id} className='cursor-pointer hover:opacity-70 hover:duration-500 hover:ease-in-out ' >
 <Link to={`/movie-details/${item._id}`}>
                <figure>
                  <img src={item.poster}  className="w-full object-cover" />
                </figure>
                <div className="pl-2">
                <ul className="mt-2 text-sm text-gray-600 flex  gap-2">
                    
                      <li className="">
                     {item.year},
                      </li>
                      <li>{item.genre}</li>
                  
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