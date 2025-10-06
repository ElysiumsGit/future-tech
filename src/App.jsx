import { Outlet } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

import TopHeader from "./components/TopHeader/TopHeader";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TopFooter from "./components/TopFooter/TopFooter";
import ScrollToTop from "./helper/ScrollTop";

function App() {
  const controls = useAnimation();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
        controls.start({ opacity: 1, y: 0 });
      } else {
        setIsSticky(false);
        controls.start({ opacity: 0, y: -50 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <>
    <ScrollToTop/>
      <TopHeader />
      
      <Header />

      {isSticky && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed top-0 left-0 w-full z-50 shadow-md bg-white"
        >
          <Header />
        </motion.div>
      )}

      <Outlet />
      <TopFooter />
      <Footer />
    </>
  );
}

export default App;
