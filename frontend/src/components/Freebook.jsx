import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json"
import Cards from './Cards';
const Freebook = () => {
    const filterData=list.filter((data)=>data.category==="Free")
    // console.log(filterData);
    // console.log(filterData[0].image);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
   <>
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
    <div>

    <h1 className='text-3xl underline font-bold text-center'>Free Offered Courses</h1>
    <p className='text-xl leading-2 m-2 px-2 py-3 text-center'>
Explore our collection of free courses designed to ignite your curiosity and expand your knowledge. Dive into a range of topics without any cost, from history and literature
 to technology and wellness.
  Enrich your learning journey with these engaging resources, accessible to all at no charge.</p>
    </div>
   
   <div>
   <Slider {...settings}>
        {
            filterData.map((item)=>(
                <Cards item={item} key={item.id} />
            ))
        }
      </Slider>
   </div></div>
   </>
  )
}

export default Freebook