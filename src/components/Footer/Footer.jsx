import React from "react";
import { FaTwitter, FaMedium, FaLinkedin } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import { useResponsive } from "../../helper/useResponsive";

const Footer = () => {
  const { isDesktopOrLaptop, isMobile } = useResponsive();

  return (
    <>
      {isDesktopOrLaptop && (
        <footer className="background-primary text-gray-400 px-40 pt-20 pb-10 ">
          <div className="flex justify-between mb-20">
            <div>
              <h1 className="font-semibold text-white mb-6">Home</h1>
              <ul className="flex flex-col gap-3">
                <li className="hover:text-white cursor-pointer">Features</li>
                <li className="hover:text-white cursor-pointer">Blogs</li>
                <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                  Resources{" "}
                  <span className="text-xs bg-gray-800 px-2 py-0.5 rounded-full text-yellow-300">
                    New
                  </span>
                </li>
                <li className="hover:text-white cursor-pointer">Testimonials</li>
                <li className="hover:text-white cursor-pointer">Contact Us</li>
                <li className="hover:text-white cursor-pointer">Newsletter</li>
              </ul>
            </div>

            <div>
              <h1 className="font-semibold text-white mb-6">News</h1>
              <ul className="flex flex-col gap-3">
                <li className="hover:text-white cursor-pointer">Trending Stories</li>
                <li className="hover:text-white cursor-pointer">Featured Videos</li>
                <li className="hover:text-white cursor-pointer">Technology</li>
                <li className="hover:text-white cursor-pointer">Health</li>
                <li className="hover:text-white cursor-pointer">Politics</li>
                <li className="hover:text-white cursor-pointer">Environment</li>
              </ul>
            </div>

            <div>
              <h1 className="font-semibold text-white mb-6">Blogs</h1>
              <ul className="flex flex-col gap-3">
                <li className="hover:text-white cursor-pointer">Quantum Computing</li>
                <li className="hover:text-white cursor-pointer">AI Ethics</li>
                <li className="hover:text-white cursor-pointer">Space Exploration</li>
                <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                  Biotechnology{" "}
                  <span className="text-xs bg-gray-800 px-2 py-0.5 rounded-full text-yellow-300">
                    New
                  </span>
                </li>
                <li className="hover:text-white cursor-pointer">Renewable Energy</li>
                <li className="hover:text-white cursor-pointer">Biohacking</li>
              </ul>
            </div>

            <div>
              <h1 className="font-semibold text-white mb-6">Podcasts</h1>
              <ul className="flex flex-col gap-3 mb-8">
                <li className="hover:text-white cursor-pointer">AI Revolution</li>
                <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                  AI Revolution{" "}
                  <span className="text-xs bg-gray-800 px-2 py-0.5 rounded-full text-yellow-300">
                    New
                  </span>
                </li>
                <li className="hover:text-white cursor-pointer">TechTalk AI</li>
                <li className="hover:text-white cursor-pointer">AI Conversations</li>
              </ul>
            </div>

            <div>
                <h1 className="font-semibold text-white mb-6">Resources</h1>
                <ul className="flex flex-col gap-3">
                    <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                        Whitepapers <HiArrowUpRight />
                    </li>
                    <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                        Ebooks <HiArrowUpRight />
                    </li>
                    <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                        Reports <HiArrowUpRight />
                    </li>
                    <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                        Research Papers <HiArrowUpRight />
                    </li>
                </ul>
            </div>
          </div>

          <div className="border-primary w-full"></div>
            
          <div className="flex justify-between items-center pt-6 text-sm text-gray-500">
            <div className="flex gap-6">
              <p className="hover:text-white cursor-pointer">Terms & Conditions</p>
              <p className="hover:text-white cursor-pointer">Privacy Policy</p>
            </div>
            <div className="flex gap-6 text-white text-lg">
              <FaTwitter className="cursor-pointer hover:text-gray-400" />
              <FaMedium className="cursor-pointer hover:text-gray-400" />
              <FaLinkedin className="cursor-pointer hover:text-gray-400" />
            </div>
            <p>© 2024 FutureTech. All rights reserved.</p>
          </div>
        </footer>
      )}

      {isMobile && (
        <footer className="background-primary text-gray-400 px-6 py-10">
          <div className="grid grid-cols-2 gap-5">
            <div>
              <h1 className="font-semibold text-white mb-6">Home</h1>
              <ul className="flex flex-col gap-3">
                <li className="hover:text-white cursor-pointer">Features</li>
                <li className="hover:text-white cursor-pointer">Blogs</li>
                <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                  Resources{" "}
                  <span className="text-xs bg-gray-800 px-2 py-0.5 rounded-full text-yellow-300">
                    New
                  </span>
                </li>
                <li className="hover:text-white cursor-pointer">Testimonials</li>
                <li className="hover:text-white cursor-pointer">Contact Us</li>
                <li className="hover:text-white cursor-pointer">Newsletter</li>
              </ul>
            </div>

            <div>
              <h1 className="font-semibold text-white mb-6">News</h1>
              <ul className="flex flex-col gap-3">
                <li className="hover:text-white cursor-pointer">Trending Stories</li>
                <li className="hover:text-white cursor-pointer">Featured Videos</li>
                <li className="hover:text-white cursor-pointer">Technology</li>
                <li className="hover:text-white cursor-pointer">Health</li>
                <li className="hover:text-white cursor-pointer">Politics</li>
                <li className="hover:text-white cursor-pointer">Environment</li>
              </ul>
            </div>

            <div>
              <h1 className="font-semibold text-white mb-6">Blogs</h1>
              <ul className="flex flex-col gap-3">
                <li className="hover:text-white cursor-pointer">Quantum Computing</li>
                <li className="hover:text-white cursor-pointer">AI Ethics</li>
                <li className="hover:text-white cursor-pointer">Space Exploration</li>
                <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                  Biotechnology{" "}
                  <span className="text-xs bg-gray-800 px-2 py-0.5 rounded-full text-yellow-300">
                    New
                  </span>
                </li>
                <li className="hover:text-white cursor-pointer">Renewable Energy</li>
                <li className="hover:text-white cursor-pointer">Biohacking</li>
              </ul>
            </div>

            <div>
              <h1 className="font-semibold text-white mb-6">Podcasts</h1>
              <ul className="flex flex-col gap-3 mb-8">
                <li className="hover:text-white cursor-pointer">AI Revolution</li>
                <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                  AI Revolution{" "}
                  <span className="text-xs bg-gray-800 px-2 py-0.5 rounded-full text-yellow-300">
                    New
                  </span>
                </li>
                <li className="hover:text-white cursor-pointer">TechTalk AI</li>
                <li className="hover:text-white cursor-pointer">AI Conversations</li>
              </ul>
            </div>
          </div>

          <div className="w-full mt-5 flex flex-col gap-5 mb-5">
                <h1 className="font-semibold text-white">Resources</h1>
                <div className="grid grid-cols-2 gap-5">
                  <div className="flex gap-2 items-center background-secondary px-4 py-2 border-primary rounded-lg">
                    <p>WhitePapers</p>
                    <HiArrowUpRight className="color-primary" size={20}/>
                  </div>
                  <div className="flex gap-2 items-center background-secondary px-4 py-2 border-primary rounded-lg">
                    <p>Ebooks</p>
                    <HiArrowUpRight className="color-primary" size={20}/>
                  </div>
                  <div className="flex gap-2 items-center background-secondary px-4 py-2 border-primary rounded-lg">
                    <p>Reports</p>
                    <HiArrowUpRight className="color-primary" size={20}/>
                  </div>
                  <div className="flex gap-2 items-center background-secondary px-4 py-2 border-primary rounded-lg">
                    <p>Research Paper</p>
                    <HiArrowUpRight className="color-primary" size={20}/>
                  </div>
                </div>
            </div>

          <div className="border-primary w-full"></div>
            
          <div className="flex flex-col justify-between items-center pt-6 text-sm text-gray-500 gap-5">
            <div className="flex gap-6 text-white text-lg">
              <FaTwitter className="cursor-pointer hover:text-gray-400" />
              <FaMedium className="cursor-pointer hover:text-gray-400" />
              <FaLinkedin className="cursor-pointer hover:text-gray-400" />
            </div>
            <div className="flex gap-6">
              <p className="hover:text-white cursor-pointer">Terms & Conditions</p>
              <p className="hover:text-white cursor-pointer">Privacy Policy</p>
            </div>
            <p>© 2024 FutureTech. All rights reserved.</p>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
