import React from 'react'

const Suppliers = () => {
  return (
      <div className="flex justify-between items-center md:px-16 px-6 py-12 bg-[#E8FBFF] p-6">
          <div className="text-center">
              <h2 className="sm:text-2xl text-lg font-bold text-black">
                  Let Suppliers <span className="border-b-2 border-b-orange-400">Find You</span>
              </h2>
          </div>

          <button className="bg-orange-500 text-white rounded-sm sm:px-6 px-3 sm:py-2 py-1 sm:text-base text-sm hover:bg-orange-600">
              Get Verified
          </button>
      </div>
  )
}

export default Suppliers