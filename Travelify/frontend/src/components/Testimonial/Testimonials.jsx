import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-01.jpeg'
import ava02 from '../../assets/images/ava-02.jpeg'
import ava03 from '../../assets/images/ava-03.jpeg'
import ava04 from '../../assets/images/ava-04.jpg'

const Testimonials = () => {
   const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 1000,
      swipeToSlide: true,
      autoplaySpeed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1,

      responsive: [
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
         },
         {
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
         },
      ],
   }

   return (
      <Slider {...settings}>
         <div className="testimonial py-4 px-3">
            <p>Travelify helped me organize a summer vacation to Orlando for my family. The family-friendly itinerary included theme park tickets, kid-friendly restaurants, and comfortable accommodations. My kids had a blast, and we enjoyed a hassle-free trip.</p>
            <div className='d-flex align-items-center gap-4 mt-3'>
               <img src={ava04} className='w-25 h-25 rounded-2' alt="" />
               <div>
                  <h6 className='mb-0 mt-3'>Sanya Desai</h6>
                  <p>User since 5+ years</p>
               </div>
            </div> 
         </div>

         <div className="testimonial py-4 px-3">
            <p>I used Travelify to plan my honeymoon to the Maldives, and it was incredible. The personalized itinerary included everything from overwater bungalows to private beach dinners. It was a dream come true, and every detail was perfectly tailored to our needs.</p>
            <div className='d-flex align-items-center gap-4 mt-3'>
               <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
               <div>
                  <h6 className='mb-0 mt-3'>Aarav Sharma</h6>
                  <p>User since 3+ years</p>
               </div>
            </div> 
         </div>

         <div className="testimonial py-4 px-3">
            <p>I turned to Travelify for a quick weekend getaway to Barcelona. I was impressed with how efficiently everything was planned. The tailored recommendations for local dining and sightseeing made my short trip both enjoyable and relaxing.</p>
            <div className='d-flex align-items-center gap-4 mt-3'>
               <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
               <div>
                  <h6 className='mb-0 mt-3'>Aisha Khan</h6>
                  <p>User since 4+ years</p>
               </div>
            </div> 
         </div>

         <div className="testimonial py-4 px-3">
            <p>As a solo traveler, I used Travelify for my trip to Japan. The curated itinerary balanced cultural experiences, local cuisine, and activities suited for solo adventurers. The detailed guides and tips made my journey both exciting and safe.</p>
            <div className='d-flex align-items-center gap-4 mt-3'>
               <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
               <div>
                  <h6 className='mb-0 mt-3'>Rajiv Menon</h6>
                  <p>User since 7+ years</p>
               </div>
            </div> 
         </div>
      </Slider>
   )
}

export default Testimonials;
