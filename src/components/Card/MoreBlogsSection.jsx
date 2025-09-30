import React from "react";
import { FaHeart, FaCommentDots, FaShareAlt, FaArrowRight } from "react-icons/fa";

const MoreBlogsSection = ({
  avatar = "https://randomuser.me/api/portraits/men/32.jpg",
  name = "Name",
  subtitle = "Subtitle",
  date = "October 15, 2023",
  title = "The Quantum Leap in Computing",
  content = "Explore the revolution in quantum computing, its applications, and its potential impact on various industries.",
  likes = "24.5k",
  comments = "50",
  shares = "20",
}) => {
  return (
    <section className="border-primary bg-black px-40 py-20 flex items-center gap-10">
      {/* User Info - fixed width */}
      <section className="flex items-center gap-4 w-96">
        <div>
          <img
            className="w-14 h-14 rounded-full border-2 border-black"
            src={avatar}
            alt={name}
          />
        </div>
        <div>
          <h1 className="font-semibold text-white">{name}</h1>
          <p className="text-gray-400">{subtitle}</p>
        </div>
      </section>

      {/* Blog Content - flexible */}
      <section className="text-white flex flex-col gap-7 flex-1 min-w-0">
        <div>
          <p className="text-gray-400">{date}</p>
        </div>
        <div>
          <h1 className="text-2xl font-bold truncate">{title}</h1>
          <p className="text-gray-400 line-clamp-2">{content}</p>
        </div>

        {/* Social Actions */}
        <div className="flex items-center gap-4 text-white">
          <button className="flex items-center gap-2 hover:text-yellow-400 transition-colors px-4 p-2 rounded-full bg-[#262626]">
            <FaHeart className="text-lg" />
            <span>{likes}</span>
          </button>
          <button className="flex items-center gap-2 hover:text-yellow-400 transition-colors px-4 p-2 rounded-full bg-[#262626]">
            <FaCommentDots className="text-lg" />
            <span>{comments}</span>
          </button>
          <button className="flex items-center gap-2 hover:text-yellow-400 transition-colors px-4 p-2 rounded-full bg-[#262626]">
            <FaShareAlt className="text-lg" />
            <span>{shares}</span>
          </button>
        </div>
      </section>

      {/* CTA Button - fixed width */}
      <section className="flex items-center flex-shrink-0">
        <button className="flex items-center gap-2 bg-transparent border border-gray-700 hover:border-yellow-400 hover:text-yellow-400 px-6 py-3 rounded-xl transition-colors duration-300">
          View Blog <FaArrowRight className="text-yellow-400" />
        </button>
      </section>
    </section>
  );
};

export default MoreBlogsSection;
