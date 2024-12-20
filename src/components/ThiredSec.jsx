import React, { useState } from 'react'

function ThiredSec() {

  const [activeLink, setActiveLink] = useState('buyer');
  
  return (
    <div className="flex flex-col md:flex-row bg-blue-900 text-white mx-6 md:mx-12 md:px-14 py-14 my-12 items-start justify-between">

      <div className="md:w-1/2 h-full mb-6 md:mb-0 px-3 md:px-0" >
        <div className='w-full  h-full flex relative justify-center rounded-md overflow-hidden items-center' style={{backgroundImage: "url('/y.png')"}}>
           <img src="/y.png" alt="" className='rounded-md'/>
           <img src="/Group 32.png" alt="" className='w-20 absolute translate-y-[-50%] translate-x-[-50%]'/>
        </div>
      </div>

      <div className="md:w-2/5 px-3 md:px-0">
        <div className="flex justify-between gap-3 mb-4">
          <h2 className={`font-bold ${activeLink === 'buyer' && 'text-[#EB7150] border-b-4 border-[#EB7150]'} cursor-pointer text-xl py-2 text-center w-1/2 transition-colors `}
            onClick={() => { setActiveLink('buyer')}}
          >Buyer</h2>
          {/* <h2 className="text-gray-300 font-bold text-lg mx-4">|</h2> */}
          <h2 className={`font-bold ${activeLink === 'supplier' && 'text-[#EB7150] border-b-4 border-[#EB7150]'} cursor-pointer text-xl py-2 text-center w-1/2 transition-colors `}
            onClick={() => { setActiveLink('supplier') }}
          >Supplier</h2>
        </div>
        <ul className="list-none">
          <li className="flex items-center mb-2 text-lg">
           <img src="/checked.png" alt="" className='mr-3 w-5' />
            Post your requirements.
          </li>
          <li className="flex items-center mb-2 text-lg">
           <img src="/checked.png" alt="" className='mr-3 w-5' />
            Sit back for multiple suppliers to contact you.
          </li>
          <li className="flex items-center mb-2 text-lg">
           <img src="/checked.png" alt="" className='mr-3 w-5' />
            Choose among the suppliers based on the ratings and reviews.
          </li>
        </ul>
      </div>
      </div>
  )
}

export default ThiredSec
