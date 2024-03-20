import React from 'react'
import "./card.css"

const Card1 = () => {
  return (
    <div className='border rounded-lg'>
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="p-6 pt-10 fig">
  <p className='text-white text-center'>Setu RecruitEase</p>
  </div>
  <div className="card-body items-center text-center">
    <h2 className="card-title py-6">Swamped with resumes but struggling to find the right talent for your company ?</h2>
    <p className='pb-6'>Cut through the resume clutter. Find top talent, faster.</p>
    <div>
    <h2 className="card-title py-6">80 % hiring time and efforts saved</h2>
    <p className='pb-6'>60 % hiring cost savings</p>
    <p className='pb-6'>4X productivity gain</p>
    <p className='pb-6'>10X ROI</p>

    </div>
    <div className="card-actions p-8">
      <button className="btn btn-primary bg-yellow-400 text-black p-2 rounded-lg ">Buy Now</button>
    </div>
  </div>

</div>
    </div>
  )
}

export default Card1;