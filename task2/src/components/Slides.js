import React, { useState } from 'react';
import Slide from './Slide';

function Slides({ slides }) {
  const [slids, setSlides] = useState(
    slides.map((item, index) => {
      return { ...item, indx: index };
    })
  );
  const [slide, setSlide] = useState(slids[0]);
  const setDefaultSlide = () => {
    setSlide(slids[0]);
  };
  const getNextSlide = () => {
    let nextIndx = slide.indx;
    nextIndx += 1;
    setSlide(slids[nextIndx]);
  };
  const getPrevSlide = () => {
    let prevIndx = slide.indx;
    prevIndx -= 1;
    setSlide(slids[prevIndx]);
  };
  return (
    <div>
      <div id='navigation' className='text-center'>
        <button
          disabled={slide.indx === 0}
          onClick={setDefaultSlide}
          on='true'
          data-testid='button-restart'
          className='small outlined'
        >
          Restart
        </button>
        <button
          disabled={slide.indx === 0}
          data-testid='button-prev'
          className='small'
          onClick={getPrevSlide}
        >
          Prev
        </button>
        <button
          disabled={slide.indx === slids.length - 1}
          onClick={getNextSlide}
          data-testid='button-next'
          className='small'
        >
          Next
        </button>
      </div>
      <Slide slide={slide} />
    </div>
  );
}

export default Slides;
