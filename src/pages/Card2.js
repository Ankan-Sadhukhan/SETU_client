import React from 'react'
import "./card.css"

const Card2 = () => {
  return (
    <div className='border rounded-lg'>
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="p-6 pt-10 fig">
  <p className='text-white text-center'>Setu SkillScan</p>
  </div>
  <div className="card-body items-center text-center">
    <h2 className="card-title py-6">Are you able to measure the natural strength of your data talent ? What about attitude?</h2>
    <p className='pb-6'> Build high-performance data teams with confidence.</p>
    <div>
    <h2 className="card-title py-6">Assess 8 Technical Skills </h2>
    <p className='pb-6'>Evaluate 5 attitudinal attributes</p>

    </div>
    <div className="card-actions p-8">
      <button className="btn btn-primary bg-yellow-400 text-black p-2 rounded-lg ">Buy Now</button>
    </div>
  </div>

</div>
    </div>
  )
}

export default Card2