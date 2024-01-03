import React from 'react';
import { pin } from '../assets';
import Underline from './Underline';

const Bio = () => {
  return (
    <div className="tabcontent-container xl:p-5 h-full relative text-gray-800">
      <h4 className="font-bold italic text-xl xl:text-2xl pb-5 xl:pb-10 [text-shadow:_1px_1px_0_rgb(0_0_0_/_40%)]">
        "Passionately Curious..."
      </h4>
      <p className="text-xl xl:text-2xl text-left [text-shadow:_1px_1px_0_rgb(0_0_0_/_40%)]">
        I'm a creative web developer with a keen focus on interactivity, motion
        design and building appealing web experiences. I believe in crafting web
        experiences that are not just functional but also captivating.
      </p>
      <br />
      <p className="text-xl xl:text-2xl text-left [text-shadow:_1px_1px_0_rgb(0_0_0_/_40%)]">
        I'm passionate about translating ideas and brand values into
        eye-catching, user-centered digital solutions. I'm a strong advocate for
        great design, in all its forms.
      </p>

      <div className="py-2 xl:mt-[2rem]">
        <div className="img-wrapper gap-5 flex flex-col">
          <div className="flex items-center">
            <img src={pin} alt="blender" className="w-14 h-auto" />
            <div>
              <p className="color-text xl:text-2xl pb-2">Maryland, US</p>
              <Underline />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio