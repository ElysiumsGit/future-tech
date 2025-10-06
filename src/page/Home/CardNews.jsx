import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import IconLatestNews from "../../assets/Home/icon-latest-news.png";
import { useResponsive } from '../../helper/useResponsive';

const CardNews = () => {

  const features = [
    {
      icon: IconLatestNews,
      title: "Latest News Updates",
      subtitle: "Stay Current",
      description: "Over 1,000 articles published monthly",
    },
    {
      icon: IconLatestNews,
      title: "Expert Contributors",
      subtitle: "Trusted Insights",
      description: "50+ renowned AI experts on our team",
    },
    {
      icon: IconLatestNews,
      title: "Global Readership",
      subtitle: "Worldwide Impact",
      description: "2 million monthly readers",
    },
  ];

  const { isDesktopOrLaptop, isMobile } = useResponsive();

  return (
    <>
      {isDesktopOrLaptop && (
        <div className="background-primary text-white w-full grid grid-cols-1 md:grid-cols-3 divide-gray-800">
          {features.map((item, index) => (
            <section
              key={index}
              className="flex justify-between items-center px-40 py-12 border-primary"
            >
              <div className="flex flex-col gap-2">
                <img src={item.icon} alt={item.title} className="w-8 h-8" />
                <h1 className="text-lg font-semibold">{item.title}</h1>
                <p className="text-gray-400 text-sm">{item.subtitle}</p>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>

              <div className="flex-shrink-0">
                <div className="bg-yellow-400 rounded-full p-3 hover:bg-yellow-500 transition-colors">
                  <FaArrowRight className="text-black" />
                </div>
              </div>
            </section>
          ))}
        </div>
      )}

      {isMobile && (
        <div className="background-primary text-white w-full grid grid-cols-1 divide-gray-800">
          {features.map((item, index) => (
            <section
              key={index}
              className="flex justify-between items-center px-4 py-8 border-primary"
            >
              <div className="flex flex-col gap-2">
                <img src={item.icon} alt={item.title} className="w-8 h-8" />
                <h1 className="text-lg font-semibold">{item.title}</h1>
                <p className="text-gray-400 text-sm">{item.subtitle}</p>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>

              <div className="flex-shrink-0">
                <div className="bg-yellow-400 rounded-full p-3 hover:bg-yellow-500 transition-colors">
                  <FaArrowRight className="text-black" />
                </div>
              </div>
            </section>
          ))}
        </div>
      )}
    </>
  );
};

export default CardNews;
