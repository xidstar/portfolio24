import React from 'react'

const Footer = () => {
  function getCurrentYear() {
    const currentYear = new Date().getFullYear();
    return currentYear;
  }

  return (
    <div className="absolute bottom-5 right-5 font-bold text-footer text-3xl">
      sidneyo&copy;{getCurrentYear()}
    </div>
  );
}

export default Footer