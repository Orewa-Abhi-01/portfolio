import React from "react";

const Footer = () => {
  return (
    <footer className="footer  h-screen w-full flex items-center justify-evenly text-center flex-col">
       <p className="text-[#fff] text-[1.5vw] w-3/4 font-bold font-[Syne]  text-center p-4  ">"Each project, a chapter. Each bug, a plot twist. <span className="text-[#ec4e39]"> This is how my journey begins. </span>"</p>
      <div>
        <h2 className="footer-text font-[Syne] font-bold text-center tracking-wider text-[#ec4e39] text-[7vw]">
          The Future is Here
        </h2>
        
        <div className="copyright-info font-[Syne] font-bold tracking-wider">
          <p>Copyright &copy; 2025 Abhishek</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
