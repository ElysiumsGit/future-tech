import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const SubContainer = ({
    title = "Title", 
    subtitle = "Subtitle",
    hasButton = false,
    buttonTitle = "Button",
}) => {
  return (
    <section className="background-secondary px-40 py-28 border-primary flex items-center justify-between">
        <div className="flex flex-col gap-2 shrink-0">
            <p className="font-semibold bg-[#333333] px-4 py-2 w-fit rounded-[4px]">
                {title}
            </p>
            <h1 className="text-5xl font-semibold">
                {subtitle}
            </h1>
        </div>

        {hasButton && (
            <div>
                <button className="flex items-center gap-2 bg-transparent border border-gray-700 hover:border-yellow-400 hover:text-yellow-400 px-6 py-3 rounded-xl transition-colors duration-300">
                    {buttonTitle}<FaArrowRight className="color-primary"/>
                </button>
            </div>
        )}
    </section>
  )
}

export default SubContainer