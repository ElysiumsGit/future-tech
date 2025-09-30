import React from 'react'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const TopHeader = () => {
  return (
    <div className='background-primary w-full h-16 text-white flex items-center justify-center gap-4'>
      <h1>Subscribe to our Newsletter For New & latest Blogs and Resources</h1>
      <FaArrowUpRightFromSquare className="w-4 h-4 color-primary" />
    </div>
  )
}

export default TopHeader
