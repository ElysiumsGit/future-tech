import React from 'react'

const TestimonialCard = ({
    profile="https://randomuser.me/api/portraits/women/32.jpg",
    name= "Sarah Thompson",
    location= "San Francisco, USA",
    comment = "The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated."
}) => {
  return (
    <section className="background-primary py-20 flex justify-center">
        <div className="max-w-lg text-center text-white">
          {/* Profile Section */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <img
              src={profile}
              alt="Profile"
              className="w-14 h-14 rounded-full border-2 border-white"
            />
            <div className="text-left">
              <h1 className="font-semibold">{name}</h1>
              <p className="text-gray-400 text-sm">{location}</p>
            </div>
          </div>

          {/* Stars */}
          <div className="flex justify-center -mb-6 relative z-10">
            <div className="background-primary px-4 py-1 rounded-full flex  border-primary gap-1">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
            </div>
          </div>

          {/* Review Box */}
          <div className="bg-[#333333] rounded-xl p-7 mt-[-1rem] border-primary">
            <p className="text-gray-200 leading-relaxed line-clamp-3">
              {comment}
            </p>
          </div>
        </div>
      </section>
  )
}

export default TestimonialCard