import React from "react";
import { FaArrowRight } from "react-icons/fa";
import IconLatestNews from "../../assets/Home/icon-latest-news.png";
import Ebooks from "../../assets/Home/Ebooks.png";
import { useResponsive } from "../../helper/useResponsive";

function BlogContent({
  icon = IconLatestNews,
  title = "Ebooks",
  description = "Explore our collection of ebooks covering a wide spectrum of future technology topics.",
  buttonText = "Download Ebooks Now",
  downloadStat = { label: "Downloaded by", value: "10k + Users" },
  avatars = [
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/men/44.jpg",
    "https://randomuser.me/api/portraits/women/55.jpg",
    "https://randomuser.me/api/portraits/men/66.jpg",
    "https://randomuser.me/api/portraits/men/77.jpg",
    "https://randomuser.me/api/portraits/women/88.jpg",
  ],
  rightTitle = "Variety of Topics",
  rightDescription = "Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).",
  rightImage = Ebooks,
  stats = [
    { label: "Total Books", value: "Over 100 ebooks" },
    { label: "Download Formats", value: "PDF format for access." },
  ],
  expertise = "Ebooks are authored by renowned experts with an average of 15 years of experience",
}) {

  const { isDesktopOrLaptop, isMobile } = useResponsive();
  
  return (
    <>
      {isDesktopOrLaptop && (
        <section className="border-primary flex items-stretch justify-center">
          {/* Left Section */}
          <div className="flex flex-1 h-auto flex-col border-primary background-primary w-full gap-8 pl-40 py-20 pr-20 justify-center">
            <img src={icon} alt="Ebook Icon" className="w-16" />
            <h1 className="font-semibold text-3xl text-white">{title}</h1>
            <p className="text-gray-400">{description}</p>

            <button className="w-full bg-[#1A1A1A] flex items-center justify-center gap-2 text-yellow-400 border border-gray-700 hover:border-yellow-400 hover:text-yellow-400 px-6 py-3 rounded-xl transition-colors duration-300 cursor-pointer">
              {buttonText} <FaArrowRight className="color-primary" />
            </button>

            <div className="flex p-4 border-primary rounded-lg bg-[#1A1A1A] items-center justify-between">
              <div>
                <p className="text-gray-400">{downloadStat.label}</p>
                <h1 className="font-bold text-white text-2xl">{downloadStat.value}</h1>
              </div>
              <div className="flex -space-x-4 background-primary px-4 py-2 border-primary rounded-full ">
                {avatars.map((src, idx) => (
                  <img
                    key={idx}
                    className="w-14 h-14 rounded-full border-2 border-white"
                    src={src}
                    alt={`user${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-2 flex-col gap-6 border-primary background-primary w-full pl-20 py-20 pr-40">
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-white w-2xs">{rightTitle}</h1>
              <p className="text-gray-400">{rightDescription}</p>
            </div>

            <div>
              <img src={rightImage} alt="Ebooks" className="w-full" />
            </div>

            <div className="flex gap-4">
              {stats.map((item, idx) => (
                <section
                  key={idx}
                  className="p-6 flex flex-col gap-2 border-primary w-1/3 bg-[#1A1A1A] rounded-2xl justify-center w-full"
                >
                  <h1 className="text-gray">{item.label}</h1>
                  <h1 className="font-bold text-white">{item.value}</h1>
                </section>
              ))}
            </div>

            <section className="p-6 flex flex-col gap-2 border-primary w-full bg-[#1A1A1A] rounded-2xl">
              <h1 className="text-gray">Average Author Expertise</h1>
              <h1 className="font-bold text-white">{expertise}</h1>
            </section>
          </div>
        </section>
      )}

      {isMobile && (
        <section className="border-primary flex flex-col items-stretch justify-center">
          {/* Left Section */}
          <div className="flex flex-1 h-auto flex-col border-primary background-primary w-full gap-8 px-6 py-10 justify-center">
            <img src={icon} alt="Ebook Icon" className="w-16" />
            <h1 className="font-semibold text-3xl text-white">{title}</h1>
            <p className="text-gray-400">{description}</p>

            <button className="w-full bg-[#1A1A1A] flex items-center justify-center gap-2 text-yellow-400 border border-gray-700 hover:border-yellow-400 hover:text-yellow-400 px-6 py-3 rounded-xl transition-colors duration-300 cursor-pointer">
              {buttonText} <FaArrowRight className="color-primary" />
            </button>

            <div className="flex p-4 border-primary rounded-lg bg-[#1A1A1A] items-center justify-between">
              <div>
                <p className="text-gray-400">{downloadStat.label}</p>
                <h1 className="font-bold text-white text-2xl">{downloadStat.value}</h1>
              </div>
              <div className="flex -space-x-4 background-primary px-4 py-2 border-primary rounded-full ">
                {avatars.map((src, idx) => (
                  <img
                    key={idx}
                    className="w-14 h-14 rounded-full border-2 border-white"
                    src={src}
                    alt={`user${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-2 flex-col gap-6 border-primary background-primary w-full px-4 py-10">
            <div>
              <h1 className="font-bold text-white w-2xs">{rightTitle}</h1>
              <p className="text-gray-400">{rightDescription}</p>
            </div>

            <div>
              <img src={rightImage} alt="Ebooks" className="w-full" />
            </div>

            <div className="flex flex-col gap-4">
              {stats.map((item, idx) => (
                <section
                  key={idx}
                  className="p-6 flex flex-col gap-2 border-primary w-1/3 bg-[#1A1A1A] rounded-2xl justify-center w-full"
                >
                  <h1 className="text-gray">{item.label}</h1>
                  <h1 className="font-bold text-white">{item.value}</h1>
                </section>
              ))}
            </div>

            <section className="p-6 flex flex-col gap-2 border-primary w-full bg-[#1A1A1A] rounded-2xl">
              <h1 className="text-gray">Average Author Expertise</h1>
              <h1 className="font-bold text-white">{expertise}</h1>
            </section>
          </div>
        </section>
      )}
    </>
  );
}

export default BlogContent;
