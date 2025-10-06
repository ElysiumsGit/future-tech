import TestimonialCard from '../../components/Card/TestimonialCard'
import { useResponsive } from '../../helper/useResponsive';

const Testimonial = () => {

  const { isDesktopOrLaptop, isMobile } = useResponsive();
  
  return (
    <>
      {isDesktopOrLaptop && (
        <div className="grid grid-cols-3 divide-x divide-y divide-[#222] background-primary">
        <div className="pr-10 pl-40">
          <TestimonialCard
            profile="https://randomuser.me/api/portraits/women/32.jpg"
            name="Sarah Thompson"
            location="San Francisco, USA"
            comment="The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated."
          />
        </div>
        <div className="px-10">
          <TestimonialCard
            profile="https://randomuser.me/api/portraits/men/31.jpg"
            name="Raj Patel"
            location="Mumbai, India"
            comment="The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis, helping me make informed decisions."
          />
        </div>
        <div className="pl-10 pr-40">
          <TestimonialCard
            profile="https://randomuser.me/api/portraits/women/33.jpg"
            name="Emily Adams"
            location="London, UK"
            comment="The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care."
          />
        </div>
        <div className="px-10 pl-40">
          <TestimonialCard
            profile="https://randomuser.me/api/portraits/men/31.jpg"
            name="Raj Patel"
            location="Mumbai, India"
            comment="The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis, helping me make informed decisions."
          />
        </div>
        <div className="px-10">
          <TestimonialCard
            profile="https://randomuser.me/api/portraits/men/31.jpg"
            name="Raj Patel"
            location="Mumbai, India"
            comment="The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis, helping me make informed decisions."
          />
        </div>
        <div className="px-10 pr-40">
          <TestimonialCard
            profile="https://randomuser.me/api/portraits/men/31.jpg"
            name="Raj Patel"
            location="Mumbai, India"
            comment="The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis, helping me make informed decisions."
          />
        </div>
      </div>
      )}

      {isMobile && (
        <div className="flex flex-col background-primary px-6">
          <TestimonialCard
            profile="https://randomuser.me/api/portraits/women/32.jpg"
            name="Sarah Thompson"
            location="San Francisco, USA"
            comment="The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated."
          />
          <div className='border-primary w-full'></div>
          <TestimonialCard
            profile="https://randomuser.me/api/portraits/men/31.jpg"
            name="Raj Patel"
            location="Mumbai, India"
            comment="The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis, helping me make informed decisions."
          />
          <div className='border-primary w-full'></div>
          <TestimonialCard
            profile="https://randomuser.me/api/portraits/women/33.jpg"
            name="Emily Adams"
            location="London, UK"
            comment="The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care."
          />
      </div>
      )}
    </>
  )
}

export default Testimonial