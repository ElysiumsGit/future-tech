import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Heading from "../../assets/Home/Heading.png";
import Logo from "../../assets/Home/Logo.png";
import { useResponsive } from "../../helper/useResponsive";
import { FaBars, FaTimes } from "react-icons/fa"; // ✅ react-icons

const Header = () => {
  const navigation = [
    { name: "Home", link: "/" },
    { name: "News", link: "/news" },
    { name: "Podcasts", link: "/podcasts" },
    { name: "Resources", link: "/resources" },
  ];

  const { isDesktopOrLaptop, isMobile } = useResponsive();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="background-secondary w-full h-24 text-white flex items-center justify-between border border-[#262626] px-6 md:px-40 relative">
      {/* Left side logo */}
      <section className="flex items-center gap-4">
        <img src={Logo} alt="Logo" className="w-12" />
        <img src={Heading} alt="Heading" />
      </section>

      {/* Desktop Navigation */}
      {isDesktopOrLaptop && (
        <section>
          <ul className="flex items-center gap-10 text-[18px]">
            {navigation.map((nav) => (
              <li key={nav.name}>
                <NavLink
                  to={nav.link}
                  className={({ isActive }) =>
                    `px-6 py-3 rounded-xl transition-colors duration-200 border border-[#1A1A1A] ${
                      isActive
                        ? "background-primary text-white border border-[#262626]"
                        : "text-gray"
                    }`
                  }
                >
                  {nav.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Desktop Contact Button */}
      {isDesktopOrLaptop && (
        <section>
          <button className="px-5 py-3 btn-primary text-black rounded-xl font-medium text-[18px]">
            Contact Us
          </button>
        </section>
      )}

      {/* Mobile Menu Button */}
      {isMobile && (
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 border border-[#262626] rounded-lg"
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      )}

      {/* Mobile Dropdown Menu */}
      {isMobile && menuOpen && (
        <div className="absolute top-24 left-0 w-full bg-[#1A1A1A] border-t border-[#262626] flex flex-col items-center gap-6 py-6 z-50">
          {navigation.map((nav) => (
            <NavLink
              key={nav.name}
              to={nav.link}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `w-full text-center px-6 py-3 transition-colors duration-200 ${
                  isActive ? "background-primary text-white" : "text-gray"
                }`
              }
            >
              {nav.name}
            </NavLink>
          ))}
          <button className="px-5 py-3 btn-primary text-black rounded-xl font-medium text-[18px]">
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
