import React from 'react'
import Card from './Card'

const Testimonials = () => {
  return (
      <div className='h-fit md:h-[80vh] flex flex-col items-center justify-start p-20' id="testimonials">
          <h1 className='uppercase  text-dark-greyish-blue font-bold text-xl md:mb-10 mb-8'>client testimonials</h1>
          <div className="flex md:flex-row flex-col justify-center gap-1 pt-20">
              <Card
                  image="/image-emily.jpg"
                  title="Marketing Director"
                  name="Emily R."
                  body="We put our trust in Sunnyside and they delivered, making usre our needs were met and deadlines were always hit."
              />
              <Card
                  image="/image-thomas.jpg"
                  title="Chief Operating Officer"
                  name="Thomas S."
                  body="Sunnyside's enthusiam coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience."
              />
              <Card
                  image="/image-jennie.jpg"
                  title="Business Owner"
                  name="Emily R."
                  body="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly Recommend"
              />

              
          </div>
          
      
    </div>
  )
}

export default Testimonials
