import { FaHeart, FaCommentDots, FaShareAlt, FaArrowRight } from "react-icons/fa";
import { useResponsive } from "../../helper/useResponsive";

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

  const { isDesktopOrLaptop, isMobile } = useResponsive();

  return (
    <>
      {isDesktopOrLaptop && (
        <section className="border-primary background-primary px-40 py-20 flex items-center gap-10">
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

          <section className="text-white flex flex-col gap-7 flex-1 min-w-0">
            <div>
              <p className="text-gray-400">{date}</p>
            </div>
            <div>
              <h1 className="text-2xl font-bold truncate">{title}</h1>
              <p className="text-gray-400 line-clamp-2">{content}</p>
            </div>

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

          <section className="flex items-center flex-shrink-0">
            <button className="flex cursor-pointer text-white items-center gap-2 bg-transparent border border-gray-700 hover:border-yellow-400 hover:text-yellow-400 px-6 py-3 rounded-xl transition-colors duration-300">
              View Blog <FaArrowRight className="text-yellow-400" />
            </button>
          </section>
        </section>
      )}

      {isMobile && (
        <section className="border-primary background-primary px-4 py-10 flex flex-col gap-10">
          <section className="flex justify-between gap-4">
            <section className="flex gap-2 items-center ">
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
            <section className="flex items-center">
              <button className="text-[14px] flex cursor-pointer text-white items-center gap-2 bg-transparent border border-gray-700 hover:border-yellow-400 hover:text-yellow-400 px-4 py-2 rounded-xl transition-colors duration-300">
                View Blog <FaArrowRight className="text-yellow-400" />
              </button>
            </section>
          </section>

          <section className="text-white flex flex-col gap-7 flex-1 min-w-0">
            <div>
              <p className="text-gray-400">{date}</p>
            </div>
            <div>
              <h1 className="text-2xl font-bold truncate">{title}</h1>
              <p className="text-gray-400 line-clamp-2">{content}</p>
            </div>

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
        </section>
      )}
    </>
  );
};

export default MoreBlogsSection;
