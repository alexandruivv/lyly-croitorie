import React, { useEffect } from "react";
import ReactPixel from "react-facebook-pixel";

const PixelTracker = () => {
  useEffect(() => {
    const pixelId = "666932342680278";
    ReactPixel.init(pixelId);
    ReactPixel.pageView();
  }, []);
  return null;
};

export default PixelTracker;