import React, { useState, useEffect } from 'react';
import { useSprings, animated, to } from '@react-spring/web';
import { projects } from "../config/constants";

// Configuration Constants
const CARD_WIDTH = 330;
const X_SPACING = 120;
const SCALE_SIDE_CARDS = 0.75;
const PERSPECTIVE = 1200; // Perspective value for 3D effect
const ROTATE_ANGLE = 50; // Degrees of rotation towards center

const Carousel = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(2);

  // Helper to derive styles based on an item's position relative to the active one
  const getCardStyles = (i, currentActiveIndex) => {
    const offset = i - currentActiveIndex;

    let x = 0;
    let scale = 1;
    let zIndex = 0;
    let opacity = 0;
    let rotateY = 0;

    if (offset === -1) { // Previous card (left)
      x = -X_SPACING;
      scale = SCALE_SIDE_CARDS;
      zIndex = 5;
      opacity = 1;
      rotateY = ROTATE_ANGLE; // Rotate left card towards center
    } else if (offset === 0) { // Current card (center)
      x = 0;
      scale = 1;
      zIndex = 10;
      opacity = 1;
      rotateY = 0; // No rotation for center card
    } else if (offset === 1) { // Next card (right)
      x = X_SPACING;
      scale = SCALE_SIDE_CARDS;
      zIndex = 5;
      opacity = 1;
      rotateY = -ROTATE_ANGLE; // Rotate right card towards center
    }

    return { x, scale, zIndex, opacity, rotateY };
  };

  // Track immediate z-index values separately from animations
  const getImmediateZIndex = (i, currentActiveIndex) => {
    const offset = i - currentActiveIndex;
    if (offset === 0) return 10; // Current card always on top
    if (Math.abs(offset) === 1) return 5; // Adjacent cards
    return 0; // Hidden cards
  };

  // React Spring setup - animate position, scale, and rotation
  const [springs, api] = useSprings(projects.length, (i) => ({
    x: getCardStyles(i, activeSlideIndex).x,
    scale: getCardStyles(i, activeSlideIndex).scale,
    opacity: getCardStyles(i, activeSlideIndex).opacity,
    rotateY: getCardStyles(i, activeSlideIndex).rotateY,
    config: { tension: 200, friction: 30 },
  }));

  // Update springs whenever activeSlideIndex changes
  useEffect(() => {
    api.start((i) => ({
      x: getCardStyles(i, activeSlideIndex).x,
      scale: getCardStyles(i, activeSlideIndex).scale,
      opacity: getCardStyles(i, activeSlideIndex).opacity,
      rotateY: getCardStyles(i, activeSlideIndex).rotateY,
    }));
  }, [activeSlideIndex, api]);

  // Navigation buttons
  const goToNext = () => {
    if (activeSlideIndex < projects.length - 1) {
      setActiveSlideIndex(prev => prev + 1);
    }
  };

  const goToPrev = () => {
    if (activeSlideIndex > 0) {
      setActiveSlideIndex(prev => prev - 1);
    }
  };

  // Handle card click to navigate
  const handleCardClick = (index) => {
    if (index === activeSlideIndex - 1) {
      // Clicked previous card - go to previous
      goToPrev();
    } else if (index === activeSlideIndex + 1) {
      // Clicked next card - go to next
      goToNext();
    }
    // Clicking the active card doesn't change navigation
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[600px] bg-transparent overflow-hidden relative">
      {/* Navigation Buttons */}
      <div className="flex justify-between w-full max-w-4xl absolute top-1/2 transform -translate-y-1/2 z-20 px-4">
        <button
          onClick={goToPrev}
          disabled={activeSlideIndex === 0}
          className={`p-3 rounded-full bg-white/80 shadow-lg hover:bg-white transition-all ${
            activeSlideIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
          }`}
        >
          ←
        </button>
        <button
          onClick={goToNext}
          disabled={activeSlideIndex === projects.length - 1}
          className={`p-3 rounded-full bg-white/80 shadow-lg hover:bg-white transition-all ${
            activeSlideIndex === projects.length - 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
          }`}
        >
          →
        </button>
      </div>

      {/* Carousel Container with Perspective */}
      <div 
        className="relative w-full h-[450px] flex items-center justify-center"
        style={{
          perspective: PERSPECTIVE,
        }}
      >
        {springs.map((props, i) => {
          // Only render the current, previous, and next slides
          if (i < activeSlideIndex - 1 || i > activeSlideIndex + 1) return null;

          const slide = projects[i];
          if (!slide) return null;

          const isCurrent = i === activeSlideIndex;
          const immediateZIndex = getImmediateZIndex(i, activeSlideIndex);

          return (
            <animated.div
              key={slide.id}
              className={`absolute top-0 will-change-transform transform-style-3d ${
                isCurrent ? 'cursor-default' : 'cursor-pointer'
              }`}
              style={{
                width: CARD_WIDTH,
                height: CARD_WIDTH * 1.4,
                zIndex: immediateZIndex,
                opacity: props.opacity,
                transform: to(
                  [props.x, props.scale, props.rotateY],
                  (xVal, scaleVal, rotateVal) => 
                    `translateX(${xVal}px) scale(${scaleVal}) rotateY(${rotateVal}deg)`
                ),
                left: `calc(50% - ${CARD_WIDTH / 2}px)`,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Card Content - Make entire card clickable if it has a URL */}
              {slide.url ? (
                <a 
                  href={slide.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full h-full transform-style-3d"
                  style={{ transformStyle: 'preserve-3d' }}
                  onClick={(e) => {
                    // Only prevent default if it's a side card (to allow navigation)
                    if (!isCurrent) {
                      e.preventDefault();
                      handleCardClick(i);
                    }
                    // For current card with URL, allow default link behavior
                  }}
                >
                  <div 
                    className={`w-full h-full rounded-[2rem] overflow-hidden shadow-2xl ${slide.bgColor} relative transform-style-3d`}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover select-none"
                      draggable="false"
                    />
                    <div className="absolute bottom-8 left-0 right-0 text-center z-20">
                      <h3 className="text-white text-xl font-bold tracking-widest uppercase">
                        {slide.title.split(" ")[0]}
                      </h3>
                      {slide.title.split(" ")[1] && (
                        <span className="text-gray-300 text-sm uppercase tracking-wider block mt-1">
                          {slide.title.split(" ").slice(1).join(" ")}
                        </span>
                      )}
                    </div>
                  </div>
                </a>
              ) : (
                // If no URL, make the card clickable for navigation only if it's a side card
                <div 
                  className={`w-full h-full rounded-[2rem] overflow-hidden shadow-2xl ${slide.bgColor} relative transform-style-3d ${
                    !isCurrent ? 'cursor-pointer' : ''
                  }`}
                  style={{ transformStyle: 'preserve-3d' }}
                  onClick={() => !isCurrent && handleCardClick(i)}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover select-none"
                    draggable="false"
                  />
                  <div className="absolute bottom-8 left-0 right-0 text-center z-20">
                    <h3 className="text-white text-xl font-bold tracking-widest uppercase">
                      {slide.title.split(" ")[0]}
                    </h3>
                    {slide.title.split(" ")[1] && (
                      <span className="text-gray-300 text-sm uppercase tracking-wider block mt-1">
                        {slide.title.split(" ").slice(1).join(" ")}
                      </span>
                    )}
                  </div>
                </div>
              )}
            </animated.div>
          );
        })}
      </div>

      {/* Active Title Indicator */}
      {/* <div className="mt-4 text-center">
        <h2 className="text-xl font-medium text-gray-800 transition-all duration-300">
          {projects[activeSlideIndex]?.title || ''}
        </h2>
      </div> */}

      {/* Dots Indicator */}
      <div className="flex space-x-2 mt-6">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlideIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === activeSlideIndex ? 'bg-blue-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;