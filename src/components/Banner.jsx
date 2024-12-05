import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Link } from 'react-router-dom';


const Banner = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className='relative'>



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
                    <div className='absolute top-[20%] left-[35%] space-y-4'>
                        <h1 className='text-5xl text-white font-bold'>American Made</h1>
                        <ul className='flex text-[14px] text-white'>
                            <li>2017</li> <div className='divider divider-horizontal  divider-primary'></div>
                            <li>Comedy</li> <div className='divider divider-horizontal  divider-primary'></div>
                            <li>1hr 55 mins</li>
                            </ul>
                            <button>

                            <Link  className=" px-6 py-3  mb-2 leading-loose  text-center text-black font-semibold bg-gradient-to-r  from-[#5FE1E7] to-[#D3F46D] uppercase  hover:opacity-70 hover:rounded-2xl hover:transform hover:duration-200 " href="#">Movie Details</Link>
                          </button>

                    </div>
                    <img src="https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/04/slider-8-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                <div className='absolute top-[20%] left-[35%] space-y-4'>
                        <h1 className='text-5xl text-white font-bold'>The Convenient Groom</h1>
                        <ul className='flex text-[14px] text-white'>
                            <li>2016</li> <div className='divider divider-horizontal  divider-primary'></div>
                            <li>Action, Adventure, Romance</li> <div className='divider divider-horizontal  divider-primary'></div>
                            <li>1hr 24 mins</li>
                            </ul>
                          <button>

                            <Link  className=" px-6 py-3  mb-2 leading-loose  text-center text-black font-semibold bg-gradient-to-r  from-[#5FE1E7] to-[#D3F46D] uppercase  hover:opacity-70 hover:rounded-2xl hover:transform hover:duration-200 " href="#">Movie Details</Link>
                          </button>

                    </div>
                    <img src="https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/04/slider-1-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                <div className='absolute top-[20%] left-[35%] space-y-4'>
                        <h1 className='text-5xl text-white font-bold'>Black Mirror</h1>
                        <ul className='flex text-[14px] text-white'>
                            <li>2018</li> <div className='divider divider-horizontal  divider-primary'></div>
                            <li>Action, Mystery</li> <div className='divider divider-horizontal  divider-primary'></div>
                            <li>30 min</li>
                            </ul>
                          <button>

                            <Link  className=" px-6 py-3  mb-2 leading-loose  text-center text-black font-semibold bg-gradient-to-r  from-[#5FE1E7] to-[#D3F46D] uppercase  hover:opacity-70 hover:rounded-2xl hover:transform hover:duration-200 " href="#">Movie Details</Link>
                          </button>

                    </div>
                    <img src="https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/04/slider-6-1.jpg" />
                </SwiperSlide>

            </Swiper>

            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={3}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="md:w-1/2  md:absolute lg:h-44 md:h-32 h-32  md:-top-60 md:-right-44 lg:-right-56 object-cover"
            >


                <SwiperSlide>
                    <img src="https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/04/slider-8-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/04/slider-1-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/04/slider-6-1.jpg" />
                </SwiperSlide>

            </Swiper>


        </div>
    );
};

export default Banner;