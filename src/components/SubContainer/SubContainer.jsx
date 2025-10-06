import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { useResponsive } from '../../helper/useResponsive';

const SubContainer = ({
    title = "Title", 
    subtitle = "Subtitle",
    hasButton = false,
    buttonTitle = "Button",
}) => {

    const { isDesktopOrLaptop, isMobile } = useResponsive();
    
  return (
    <>
        {isDesktopOrLaptop && (
            <section className="background-secondary px-40 py-28 border-primary flex items-center justify-between">
                <div className="flex flex-col gap-2 shrink-0">
                    <p className="font-semibold bg-[#333333] px-4 py-2 w-fit rounded-[4px] text-white">
                        {title}
                    </p>
                    <h1 className="text-5xl font-semibold text-white">
                        {subtitle}
                    </h1>
                </div>

                {hasButton && (
                    <div>
                        <button className="flex items-center gap-2 bg-transparent border border-gray-700 hover:border-yellow-400 hover:text-yellow-400 px-6 py-3 rounded-xl transition-colors duration-300 text-white cursor-pointer">
                            {buttonTitle}<FaArrowRight className="color-primary"/>
                        </button>
                    </div>
                )}
            </section>
        )}

         {isMobile && (
            <section className="background-secondary px-4 py-10 border-primary flex flex-col gap-7">
                <div className="flex flex-col gap-2 shrink-0">
                    <p className="font-semibold bg-[#333333] px-4 py-2 w-fit rounded-[4px] text-white text-[14px]">
                        {title}
                    </p>
                    <h1 className="font-semibold text-white text-2xl">
                        {subtitle}
                    </h1>
                </div>

                {hasButton && (
                    <div>
                        <button className="w-full flex items-center justify-center gap-2 bg-transparent border border-gray-700 hover:border-yellow-400 hover:text-yellow-400 px-6 py-3 rounded-xl transition-colors duration-300 text-white cursor-pointer">
                            {buttonTitle}<FaArrowRight className="color-primary"/>
                        </button>
                    </div>
                )}
            </section>
        )}
    </>
  )
}

export default SubContainer