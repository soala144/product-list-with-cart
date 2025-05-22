import React, { useEffect, useState } from "react";

const useResponsiveImage = (imageObj) => {
  const [currentImage, setCurrentImage] = useState(imageObj.desktop);
  useEffect(() => {
    const updateImage = () => {
      const width = window.innerWidth;

      // CONDITIONALS FOR BREAK POINTS
      if (width < 768) {
        setCurrentImage(imageObj.mobile);
      } else if (width < 1024) {
        setCurrentImage(imageObj.tablet);
      } else {
        setCurrentImage(imageObj.desktop);
      }
    };
    updateImage();

    window.addEventListener("resize", updateImage);

    return () => window.removeEventListener("resize", updateImage); // Clean Up
  }, [imageObj]);
  return currentImage;
};

export default useResponsiveImage;
