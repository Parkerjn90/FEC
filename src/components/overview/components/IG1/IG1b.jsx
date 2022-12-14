import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IG1bZ from './IG1bZ.jsx';

const IG1b = ({currentPhoto, zoomHandler, zoom, currentIndex, indexHandler}) => {
  // THIS IS THE CURRENT DISPLAYED PHOTO
  let [mouse, setMouse] = useState('none')
  let [magnified, setMagnified] = useState('zoom-in')

  // useEffect(() => {
  //   if (zoom) {
  //     setMagnified('zoom-out')
  //   } else {
  //     setMagnified('zoom-in')
  //   }
  // }, [zoom])

  return (
    <div id="IG1b">
      <img id="mainPhoto" class={mouse} src={`${currentPhoto.url}`}
      onMouseEnter={() => {
        setMouse(magnified)
      }}
      onMouseLeave={() => {
        setMouse(magnified)
      }}
      onClick={(e) => {
        e.preventDefault()
        zoomHandler()
      }}/>
      < IG1bZ currentPhoto={currentPhoto}/>
    </div>
  )
}

export default IG1b;