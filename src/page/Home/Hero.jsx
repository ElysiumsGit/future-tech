import { FaArrowRight } from "react-icons/fa6";
import HeroImage from "../../assets/Home/HeroImage.png";
import { useResponsive } from "../../helper/useResponsive";

const Hero = () => {

    const { isDesktopOrLaptop, isMobile } = useResponsive();

  return (
    <>
    {isDesktopOrLaptop && (
      <div className="background-primary text-white poppins-regular">
      <section className="flex">
        <div className="flex flex-col">
          <section className="px-40 border-primary border border-b-0 pt-40 pb-30">
            <h3 className="text-[#666666] font-medium text-3xl">
              Your Journey to Tomorrow Begins Here
            </h3>
            <h1 className="font-semibold text-5xl lg:text-7xl leading-tight">
              Explore the Frontiers of <br /> Artificial Intelligence
            </h1>
            <p className="text-[#666666] text-lg leading-relaxed">
              Welcome to the epicenter of AI innovation. FutureTech AI News is
              your passport to a world where 
            </p>
            <p className="text-[#666666] text-lg leading-relaxed">machines think, learn, and reshape
              the future. Join us on this visionary expedition into the heart of
              AI.</p>
          </section>
          
          <section className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-800">
            <div className="py-10 pl-21 text-center border-primary">
              <h2 className="text-3xl font-bold">
                300<span className="text-yellow-400">+</span>
              </h2>
              <p className="text-gray-400 mt-2">Resources available</p>
            </div>
            <div className="py-10 border-primary text-center">
              <h2 className="text-3xl font-bold">
                12k<span className="text-yellow-400">+</span>
              </h2>
              <p className="text-gray-400 mt-2">Total Downloads</p>
            </div>
            <div className="py-10 border-primary text-center">
              <h2 className="text-3xl font-bold">
                10k<span className="text-yellow-400">+</span>
              </h2>
              <p className="text-gray-400 mt-2">Active Users</p>
            </div>
          </section>
        </div>

        <div>
          <div className="relative">
            <img src={HeroImage} alt="Hero Visual" className="max-w-lg" />
          </div>

          <section className="flex flex-col items-start gap-4 absolute p-20 top-[500px]">
            <div className="flex -space-x-4  background-secondary p-2 border-primary rounded-full">
              <img
                className="w-14 h-14 rounded-full border-2 border-black"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="user1"
              />
              <img
                className="w-14 h-14 rounded-full border-2 border-black"
                src="https://randomuser.me/api/portraits/men/44.jpg"
                alt="user2"
              />
              <img
                className="w-14 h-14 rounded-full border-2 border-black"
                src="https://randomuser.me/api/portraits/women/55.jpg"
                alt="user3"
              />
              <img
                className="w-14 h-14  rounded-full border-2 border-black"
                src="https://randomuser.me/api/portraits/men/66.jpg"
                alt="user4"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Explore <span className="text-yellow-400">1000+ resources</span>
              </h3>
              <p className="text-gray-400 mt-1">
                Over 1,000 articles on emerging tech trends and breakthroughs.
              </p>
            </div>

            <button className="flex items-center gap-2 bg-transparent border border-gray-700 hover:border-yellow-400 hover:text-yellow-400 px-6 py-3 rounded-xl transition-colors duration-300">
              Explore Resources <FaArrowRight className="color-primary"/>
            </button>
          </section>
        </div>
      </section>
    </div>
    )}

    {isMobile && (
      <div className="background-primary text-white poppins-regular">
        <section className="flex">
          <div className="flex flex-col">
            <section className="px-4 border-primary border border-b-0 py-10">
              <h3 className="text-[#666666] font-medium text-[18px] mb-[14px]">
                Your Journey to Tomorrow Begins Here
              </h3>
              <h1 className="font-semibold text-3xl leading-tight">
                Explore the Frontiers of <br /> Artificial Intelligence
              </h1>
              <p className="text-[#666666] text-[14px] leading-relaxed">
                Welcome to the epicenter of AI innovation. FutureTech AI News is
                your passport to a world where machines think, learn, and reshape
                the future. Join us on this visionary expedition into the heart of
                AI.
              </p>
            </section>
            
            <section className="flex w-full background-primary text-white divide-x divide-gray-800">
              <div className="flex flex-col px-4 flex-1 py-6">
                <h2 className="text-3xl font-bold">
                  300<span className="text-yellow-400">+</span>
                </h2>
                <p className="text-gray mt-2">Resources available</p>
              </div>

              <div className="flex flex-col px-4 flex-1 py-6">
                <h2 className="text-3xl font-bold">
                  12k<span className="text-yellow-400">+</span>
                </h2>
                <p className="text-gray mt-2">Total Downloads</p>
              </div>

              <div className="flex flex-col px-4 flex-1 py-6">
                <h2 className="text-3xl font-bold">
                  10k<span className="text-yellow-400">+</span>
                </h2>
                <p className="text-gray mt-2">Active Users</p>
              </div>
            </section>
          </div>
        </section>

        <section>
            <div className="h-[390px]">
              <img src={HeroImage} alt="Hero Visual" className="max-w-xs" />
            </div>

            <section className="flex flex-col items-start gap-4 absolute px-10 top-[700px]">
              <div className="flex -space-x-4  background-secondary p-2 border-primary rounded-full">
                <img
                  className="w-10 h-10 rounded-full border-2 border-black"
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="user1"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-black"
                  src="https://randomuser.me/api/portraits/men/44.jpg"
                  alt="user2"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-black"
                  src="https://randomuser.me/api/portraits/women/55.jpg"
                  alt="user3"
                />
                <img
                  className="w-10 h-10  rounded-full border-2 border-black"
                  src="https://randomuser.me/api/portraits/men/66.jpg"
                  alt="user4"
                />
              </div>

              <div>
                <h3 className="text-[18px] font-semibold">
                  Explore <span className="text-yellow-400">1000+ resources</span>
                </h3>
                <p className="text-gray text-[14px] mt-1">
                  Over 1,000 articles on emerging tech trends and breakthroughs.
                </p>
              </div>

              <button className="flex w-full justify-center items-center gap-2 bg-transparent border border-gray-700 hover:border-yellow-400 hover:text-yellow-400 px-6 py-3 rounded-xl transition-colors duration-300">
                Explore Resources <FaArrowRight className="color-primary"/>
              </button>
            </section>
          </section>
      </div>
      )}
    </>
  );
};

export default Hero;
