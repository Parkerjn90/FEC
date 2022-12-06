import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ATC1A from './ATC1A.jsx';
import ATC1B from './ATC1B.jsx';

const ATC1 = ({style}) => {

  // style obj > sku property, obj of objs (SKUs as keys) > sku value obj contains key value pairs {quantity: 8, size: 'XS'}

  return (
    <div id="ATC1">
      < ATC1A style={style}/>
      < ATC1B style={style}/>
    </div>
  )
}

export default ATC1;