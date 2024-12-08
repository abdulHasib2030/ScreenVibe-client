import React, { useContext, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';


const Banner = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const {user} = useContext(AuthContext)

    return (
        <div >



            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 "
            >
                <SwiperSlide>
                    <div className='absolute top-[30%] md:top-[20%] md:left-[35%] left-[20%] space-y-4'>
                        <h1 className='text-5xl text-white font-bold'>View Top Rated Movie</h1>
                       
                            <button>

                            <a  className=" px-6 py-3  mb-2 leading-loose  text-center text-black font-semibold bg-gradient-to-r  from-[#5FE1E7] to-[#D3F46D] uppercase  hover:opacity-70 hover:rounded-2xl hover:transform hover:duration-200 " href="#top-rated">Explore Now</a>
                          </button>

                    </div>
                    <img src="https://i.ibb.co.com/Fk1Rhcj/1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                <div className='absolute top-[30%] md:top-[20%] md:left-[35%] left-[20%] space-y-4'>
                        <h1 className='text-5xl text-white font-bold'>View Your Favorites Movie</h1>
                        
                          <button>

                            <Link to={`/my-favorite/${user?.email}`} className=" px-6 py-3  mb-2 leading-loose  text-center text-black font-semibold bg-gradient-to-r  from-[#5FE1E7] to-[#D3F46D] uppercase  hover:opacity-70 hover:rounded-2xl hover:transform hover:duration-200 " >Explore Now</Link>
                          </button>

                    </div>
                    <img src="https://i.ibb.co.com/5523FTG/2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                <div className='absolute top-[30%] md:top-[20%] md:left-[35%] left-[20%] space-y-4'>
                        <h1 className='text-5xl text-white font-bold'>View Action & Drama Movies</h1>
                       
                          <button>

                            <a  className=" px-6 py-3  mb-2 leading-loose  text-center text-black font-semibold bg-gradient-to-r  from-[#5FE1E7] to-[#D3F46D] uppercase  hover:opacity-70 hover:rounded-2xl hover:transform hover:duration-200 " href="#actionDrama-id">Explore Now</a>
                          </button>

                    </div>
                    <img src="https://i.ibb.co.com/JjMrvLL/3.jpg" />
                </SwiperSlide>

            </Swiper>
<div>



            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={3}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="md:w-1/2  absolute lg:h-44 md:h-32 h-32  md:-top-60 md:-right-44 lg:-right-56 object-cover"
            >


                <SwiperSlide>
                    <img src="https://i.ibb.co.com/0FmFMFt/1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co.com/t3CTk21/3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co.com/RgjsSJL/2.jpg" />
                </SwiperSlide>

            </Swiper>
            </div>

        </div>
    );
};

export default Banner;