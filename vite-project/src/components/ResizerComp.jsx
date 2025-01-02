import React, { useState, useEffect } from 'react';

const ResizerComp = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    console.log("Event Listener Added"); // Only runs once
    window.addEventListener('resize', handleResize);
    
    return () => {
      console.log("Event Listener Removed");
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <h1>Window Width: {windowWidth}px</h1>
    </div>
  );
};
export default ResizerComp;
