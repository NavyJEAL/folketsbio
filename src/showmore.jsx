import React, { useState, useEffect } from 'react';

const ShowMoreButton = () => {
  const [currentItem, setCurrentItem] = useState(10);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Initially hide all items beyond the first 10
    const boxes = [...document.querySelectorAll(".movies-now a")];
    for (let i = 10; i < boxes.length; i++) {
      boxes[i].style.display = "none";
    }
  }, []);

  const handleShowMore = () => {
    const boxes = [...document.querySelectorAll(".movies-now a")];
    for (let i = currentItem; i < currentItem + 10 && i < boxes.length; i++) {
      boxes[i].style.display = "";
    }
    
    const newCurrentItem = currentItem + 10;
    setCurrentItem(newCurrentItem);
    
    if (newCurrentItem >= boxes.length) {
      setIsVisible(false);
    }
  };

  return isVisible ? (
    <button onClick={handleShowMore} className="button" id="show-more">
      Visa mer
    </button>
  ) : null;
};

export default ShowMoreButton;