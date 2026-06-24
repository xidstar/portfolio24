import React from 'react'

const Footer = () => {
  function getCurrentYear() {
    const currentYear = new Date().getFullYear();
    return currentYear;
  }

  return (
    <div className="absolute bottom-1 w-full text-center md:w-auto md:text-left md:bottom-5 md:right-5 font-bold text-footer text-2xl md:text-3xl z-0">
      sidneyo&copy;{getCurrentYear()}
    </div>
  );
}

export default Footer