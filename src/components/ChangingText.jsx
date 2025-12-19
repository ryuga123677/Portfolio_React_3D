import React, { useState, useEffect } from "react";

const ChangingText = () => {
  const texts = ["Click on TV, Resume, Projects", "Try Rotating the Screen"];
  const [currentText, setCurrentText] = useState(0);
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      
      setIsBlurred(true);
      
      setTimeout(() => {
        setIsBlurred(true);
        setCurrentText((prevText) => (prevText + 1) % texts.length); 
        setIsBlurred(false); 
      }, 700);
    }, 3000); 

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div
      className={`text-lg text-white bg-transparent transition-all duration-500 ${
        isBlurred ? "blur-sm opacity-50" : "blur-0 opacity-100"
      }`}
    >
      {texts[currentText]}
    </div>
  );
};

export default ChangingText;

