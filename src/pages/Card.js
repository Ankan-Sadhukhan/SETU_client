import React from 'react'
import "./card.css"

const Card = () => {
  return (
    <div className='border rounded-lg'>
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="p-6 pt-10 fig">
  <p className='text-white text-center'>Setu AI Academy</p>
  </div>
  <div className="card-body items-center text-center">
    <h2 className="card-title py-6">Is your current skilling method outcome oriented ? What is the ROI
              of LnD ?</h2>
    <p className='pb-6'>Upskill your talent with purpose. Measure the impact of your training investment.</p>
    <div>
    <h2 className="card-title py-6">Strengthen your talent in 1/3rd time</h2>
    <p className='pb-6'>Upskill internal talents and sharpen your competitive edge</p>
    <p className='pb-6'>NeoSkill senior management to drive innovation and AI driven strategic initiatives</p>

    </div>
    <div className="card-actions p-8">
      <button className="btn btn-primary bg-yellow-400 text-black p-2 rounded-lg ">Buy Now</button>
    </div>
  </div>

</div>
    </div>
  )
}

export default Card