import React from 'react'
import { NavLink } from 'react-router-dom'
import Heading from "../../assets/Home/Heading.png";
import Logo from "../../assets/Home/Logo.png";

const Header = () => {
  const navigation = [
    { name: "Home", link: "/" },
    { name: "News", link: "/news" },
    { name: "Podcasts", link: "/podcasts" },
    { name: "Resources", link: "/resources" },
  ];

  return (
    <header className="background-secondary w-full h-24 text-white flex items-center justify-between border border-[#262626] px-40">
      <section className="flex items-center gap-4">
        <img src={Logo} alt="Logo" className="w-12" />
        <img src={Heading} alt="Heading" />
      </section>

      <section>
        <ul className="flex items-center gap-10 text-[18px]">
          {navigation.map((nav) => (
            <li key={nav.name}>
              <NavLink
                to={nav.link}
                className={({ isActive }) =>
                  `px-6 py-3  rounded-xl transition-colors duration-200 border border-[#1A1A1A]
                  ${isActive ? "bg-black text-white border border-[#262626]" :  "text-gray"}`
                }
              >
                {nav.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <button className="px-5 py-3 btn-primary text-black rounded-xl font-medium text-[18px]">
          Contact Us
        </button>
      </section>
    </header>
  );
};

export default Header;
