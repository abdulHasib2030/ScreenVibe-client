import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';

const FeatureMovie = ({data}) => {
    const sortData = data.sort((a, b)=> b.rating - a.rating)
   
    return (
        // <div className='relative  mt-6 '>
        //     <h1 className='text-center text-5xl  font-bold font bottom-0  '>Features Movie
        //     <div className='divider  md:container mx-auto'></div>

        //     </h1>

        //     <div className=' md:container mx-auto w-[90%]'>
               
        //     <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14 items-center'>
        //         {
        //             data.map(item =>   
        //             <div className="card card-compact text-black   bg-gradient-to-r  to-[#5FE1E7] from-[#D3F46D] rounded-none  duration-300 ease-in-out transition-transform transform hover:-translate-y-2 ">
        //                 <figure>
        //                     <img className='h-96 w-full mx-auto hover:opacity-70 transition-opacity'
        //                         src={item.poster}
        //                         alt="Shoes" />
        //                 </figure>
        //                 <div className=" px-2 py-2 pb-0 ">
        //                     <h2 className="card-title text-2xl">{item.title}</h2>
        //                     <div className='   '>
        //                     <p className='flex gap-1 flex-wrap'> <span className=' font-semibold text-black'>Genre:</span> {item.genres.map((gen,idx)=> <li className='list-none'>{gen}{idx === item.genres.length-1? '': ','}</li>)}</p>

        //                     <p> <span className=' font-semibold text-black'> Duration:</span> {item.duration} minutes</p>
        //                     <p> <span className=' font-semibold text-black'> Release Year:</span> {item.year}</p>
        //                     </div>
        //                     <div className='rating-container'> <span className=' font-semibold text-black'> Rating:</span> 
        
        //                     <Rating size={20} initialValue={item.rating} tooltipArray={['Terrible', 'Bad', 'Average', 'Great', 'Prefect']}
        //                      readonly  showTooltip
        //                     ></Rating>

        //                     </div>
        //                     <Link state={{title:`movie-details/${item._id}`}} to={`/movie-details/${item._id}`} className="block px-4 py-1 my-3   text-center text-white font-semibold  bg-[#333333]  hover:opacity-70 hover:rounded-2xl hover:transform hover:duration-200 ">See Detail</Link>

                            
                            
        //                 </div>
        //             </div>)
        //         }
            
              

        //         </div>

        //        <div className='my-11  '>
        //         <div class="divider "> <Link to={'/all-movies'}>
                
        //         <button  className='border-2 cursor-pointer hover:opacity-70  hover:transform hover:duration-300 text-black    bg-gray-200 px-6 py-2 text-xl   '>All Movies</button>
        //         </Link>
        //         </div>
        //        </div>
        //     </div>
        // </div>

            <div className='md:container mx-auto w-[90%]   mt-16'>
                <div className='grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-3'>
        
                    <div className=' gap-4 ml-5  md:col-span-2 col-span-2'>
        
                        <div className='flex flex-col items-center justify-center h-full'>
                        <h1 className='text-start text-4xl font-bold '>Feature Movie</h1>
                        <div className='divider'></div>
                        <button className='hover:text-indigo-500 '><Link to={'/all-movies'}>VIEW ALL</Link> </button>
                        </div>
                    </div>
        
                    {
                        sortData.slice(0, 10).map((item)=>(
                           
                            <div className=' cursor-pointer  mb-28'>
                            <Link to={`/movie-details/${item._id}`}>
                               <div className='relative h-full  hover:opacity-60'>
                                 <img src={item.poster} className='h-full opacity-90 ' alt="" />
                               <div className=''>
                                <button className='font-bold text-white hover:bg-black h-full w-full absolute opacity-0  hover:opacity-60  z-20 top-0 uppercase '><Link to={`/movie-details/${item._id}`}> view details</Link> </button>
                               </div>
                                </div> 
                                <ul className="mt-2 text-sm text-gray-600 flex  gap-2">

                                
                        
                          <li className="">
                         {item.year}
                          </li>
                          <li className='flex flex-wrap'>{item.genres.map((gen,idx)=> <li>{gen}{idx === item.genres.length - 1? '':','}</li>)}</li>
                      
                      </ul>
        
                      <h4 className='text-xl'>{item.title}</h4>
                            </Link>
                            </div>
        
                        ))
                    }
                  
        
                </div>
            </div>
    );
};

export default FeatureMovie;