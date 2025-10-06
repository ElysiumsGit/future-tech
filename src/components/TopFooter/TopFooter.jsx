import React from 'react'
import { FaArrowRight } from 'react-icons/fa6';
import Logo from "../../assets/Home/logoBig.png";
import { useResponsive } from '../../helper/useResponsive';

const TopFooter = () => {

    const { isDesktopOrLaptop, isMobile } = useResponsive();
  
  return (
    <>
      {isDesktopOrLaptop && (
        <section className="background-secondary px-40 py-28 flex flex-col gap-10">
        <section className="flex gap-10 items-center">
          <div>
            <img src={Logo} alt="" className="w-[150px]" />
          </div>
          <div className="flex flex-col gap-7 text-white">
            <div>
              <p>
              Learn, Connect, and Innovate
              </p>
            </div>
            <h1 className="font-semibold text-5xl text-white">Be Part of the Future Tech Revolution</h1>
            <p className="text-gray text-lg">Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the industry. Join a dynamic community of forward-thinkers.</p>
          </div>
        </section>

        <section className="background-primary w-full p-5 flex gap-5">
          <div className="p-7 background-secondary border-primary flex">
            <div className="flex flex-col gap-5">
              <h1 className="font-bold text-2xl text-white">Resource Access</h1>
              <h3 className="text-gray">Visitors can access a wide range of resources, including ebooks, whitepapers, reports.</h3>
            </div>
            <div className="flex-shrink-0">
              <div className="bg-yellow-400 rounded-full p-3 hover:bg-yellow-500 transition-colors">
                <FaArrowRight className="text-black" />
              </div>
            </div>
          </div>
          <div className="p-7 background-secondary border-primary flex">
            <div className="flex flex-col gap-5">
              <h1 className="font-bold text-2xl text-white">Resource Access</h1>
              <h3 className="text-gray">Visitors can access a wide range of resources, including ebooks, whitepapers, reports.</h3>
            </div>
            <div className="flex-shrink-0">
              <div className="bg-yellow-400 rounded-full p-3 hover:bg-yellow-500 transition-colors">
                <FaArrowRight className="text-black" />
              </div>
            </div>
          </div>
          <div className="p-7 background-secondary border-primary flex">
            <div className="flex flex-col gap-5">
              <h1 className="font-bold text-2xl text-white">Resource Access</h1>
              <h3 className="text-gray">Visitors can access a wide range of resources, including ebooks, whitepapers, reports.</h3>
            </div>
            <div className="flex-shrink-0">
              <div className="bg-yellow-400 rounded-full p-3 hover:bg-yellow-500 transition-colors">
                <FaArrowRight className="text-black" />
              </div>
            </div>
          </div>
        </section>
      </section>
      )}

      {isMobile && (
        <section className="background-secondary px-4 py-10 flex flex-col gap-10">
          <section className="flex flex-col gap-5">
            <div className='flex gap-4 items-center'>
              <img src={Logo} alt="" className="w-[60px]" />
              <p className='text-white text-[14px]'>Learn, Connect, and Innovate</p>
            </div>
            <div className='flex flex-col gap-2'>
              <h1 className="font-semibold text-2xl text-white">Be Part of the Future Tech Revolution</h1>
              <p className="text-gray text-[14px]">Immerse yourself in the world of future technology. Explore our comprehensive resources.</p>
            </div> 
          </section>

        <section className="background-primary w-full p-3 rounded-md flex flex-col gap-3">
          <div className="p-7 background-secondary border-primary flex">
            <div className="flex flex-col gap-5">
              <h1 className="font-bold text-2xl text-white">Resource Access</h1>
              <h3 className="text-gray">Visitors can access a wide range of resources, including ebooks, whitepapers, reports.</h3>
            </div>
            <div className="flex-shrink-0">
              <div className="bg-yellow-400 rounded-full p-3 hover:bg-yellow-500 transition-colors">
                <FaArrowRight className="text-black" />
              </div>
            </div>
          </div>
          <div className="p-7 background-secondary border-primary flex">
            <div className="flex flex-col gap-5">
              <h1 className="font-bold text-2xl text-white">Resource Access</h1>
              <h3 className="text-gray">Visitors can access a wide range of resources, including ebooks, whitepapers, reports.</h3>
            </div>
            <div className="flex-shrink-0">
              <div className="bg-yellow-400 rounded-full p-3 hover:bg-yellow-500 transition-colors">
                <FaArrowRight className="text-black" />
              </div>
            </div>
          </div>
          <div className="p-7 background-secondary border-primary flex">
            <div className="flex flex-col gap-5">
              <h1 className="font-bold text-2xl text-white">Resource Access</h1>
              <h3 className="text-gray">Visitors can access a wide range of resources, including ebooks, whitepapers, reports.</h3>
            </div>
            <div className="flex-shrink-0">
              <div className="bg-yellow-400 rounded-full p-3 hover:bg-yellow-500 transition-colors">
                <FaArrowRight className="text-black" />
              </div>
            </div>
          </div>
        </section>
      </section>
      )}
    </>
  )
}

export default TopFooter