import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IG1 from './IG1.jsx';

const Container1Aa = ({style, zoomHandler}) => {
  // hold state for current focused image index
  let [currentIndex, setCurrentIndex] = useState(0)

  // Needs to format all data for image gallery IMAGE GALLERY

  // HANDLERS
  let indexHandler = () => {
    // changes the index based on which image was clicked
  }

  return (
    <div>
      Container1Aa
      <IG1 style={style} zoomHandler={zoomHandler} currentIndex={currentIndex} indexHandler={indexHandler}/>
    </div>
  )
}

export default Container1Aa;