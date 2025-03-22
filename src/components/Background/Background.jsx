import "./Background.css";
import video from "../../assets/video.mp4";
import music from "../../assets/music.mp3";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";

import React, { useRef, useEffect } from "react";

export const Background = ({ playStatus, heroCount }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (playStatus) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [playStatus]);

  if (playStatus) {
    return (
      <>
        <video className="background" autoPlay loop muted playsInline>
          <source src={video} type="video/mp4" />
        </video>
        <audio ref={audioRef} src={music} loop />
      </>
    );
  }

  const images = [image1, image2, image3];
  return heroCount >= 0 && heroCount < images.length ? (
    <img src={images[heroCount]} className="background" alt={`Image ${heroCount + 1}`} />
  ) : null;
};

export default Background;
