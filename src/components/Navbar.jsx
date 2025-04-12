import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navRef = useRef(null);
  const timeline = useRef(null);
  const mobileMenuRef = useRef(null);

  // check for mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1000);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleMouseEnter = () => {
    if (isMobile) return;
    //kill any ongoing animations
    if (timeline.current) {
      timeline.current.kill();
    }

    //create a new timeline
    timeline.current = gsap.timeline();

    timeline.current
      .to(navRef.current, {
        width: "75%",
        duration: 0.3,
        ease: "power2.out",
        delay: 0.2,
      })
      .add(() => setIsHovered(true));

    // animate nav links
    timeline.current.fromTo(
      ".nav-links",
      {
        opacity: 0,
        x: -20,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.3,
        stagger: 0.3,
        delay: 0.1,
        ease: "power2.out",
      }
    );
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    // kill any ongoing animations
    if (timeline.current) timeline.current.kill();

    setIsHovered(false);
    gsap.to(navRef.current, {
      width: "126px",
      duration: 0.3,
      ease: "power2.out",
      fade: 0.2,
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);

    if(!isMenuOpen) {
      gsap.to(mobileMenuRef.current, {
        height: 400,
        duration: 0.3,
        ease: "none"
      })
    } else {
      gsap.to(mobileMenuRef.current,{
        height: 0,
        duration: 0.3,
        ease:"power2.out"
      })
    }
  };


  return (
    <>
      <nav
        className=" bg-[#efefef] text-3xl font-[Syne] font-bold text-[#0a0a0a] cursor-pointer  "
        ref={navRef}
        onMouseEnter={!isMobile ? handleMouseEnter : undefined}
        onMouseLeave={!isMobile ? handleMouseLeave : undefined}
      >
        <div className="name-logo  flex justify-center items-start w-[126px]">
          <img
            src="../../logo.svg"
            alt="logo"
            className="w-[120px] h-[50px] rounded-full  object-cover "
          />
        </div>

        {/* Desktop menu */}
        {!isMobile && (
          <div className={`nav-links ${isHovered ? "flex" : "hidden"}`}>
            <ul className="flex gap-4">
              {["Home", "About", "Projects", "Contact"].map((item, idx) => (
                <li
                  key={idx}
                  className="nav-links text-2xl hover:text-[#ec4e39] hover:underline  transition-colors duration-300 "
                >
                  <a href={`#${item.toLowerCase()}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        )}


        {/* Hamburger Menu Icon */}
        {isMobile && (
          <div
            className="lg:hidden cursor-pointer menu-btn"
            onClick={toggleMenu}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        )}


      </nav>

        {/* Mobile Menu - Slides from top */}
        {isMobile && (
          <div
            ref={mobileMenuRef}
            className="overflow-hidden bg-[#efefef] text-[#0a0a0a] w-full fixed  left-0 h-0 z-50"
          >
            <ul className="flex flex-col items-center justify-center h-full gap-6 text-4xl font-[Syne]  pt-10">
              {["Home", "About", "Projects", "Contact"].map((item, idx) => (
                <li key={idx} className="hover:text-[#ec4e39]">
                  <a href={`#${item.toLowerCase()}`} onClick={toggleMenu}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
    </>
  );
};

export default Navbar;

