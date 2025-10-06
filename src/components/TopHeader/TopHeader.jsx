import React from 'react'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { useResponsive } from '../../helper/useResponsive';

const TopHeader = () => {

  const { isDesktopOrLaptop, isMobile } = useResponsive();
  
  return (
    <>
      {isDesktopOrLaptop && (
        <div className='background-primary w-full h-16 text-white flex items-center justify-center gap-4'>
          <h1>Subscribe to our Newsletter For New & latest Blogs and Resources</h1>
          <FaArrowUpRightFromSquare className="w-4 h-4 color-primary" />
        </div>
      )}

       {isMobile && (
        <div className='background-primary w-full h-16 px-6 text-gray flex items-center justify-center gap-4'>
          <h1 className='text-[12px]'>Subscribe to our Newsletter For New & latest Blogs and Resources</h1>
          <FaArrowUpRightFromSquare className="w-[20px] h-[20px] color-primary" />
        </div>
      )}
    </>
  )
}

export default TopHeader
