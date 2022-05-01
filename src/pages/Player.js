import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

const Player = () => {
  
  const {state: currentlyPLaying} = useLocation();
  return (
  <>
  <video autoPlay controls className="videoPlayer">
    <source
     src={currentlyPLaying}
     type="video/mp4"
    >
    </source>
  </video>
    {currentlyPLaying}
  
 
  </>
)
}

export default Player;
