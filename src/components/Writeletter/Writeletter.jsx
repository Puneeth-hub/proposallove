import React, { useState } from 'react';
import ReactHowler from 'react-howler';
import './Writeletter.css';
import audioFile from '../Audio/anuvanu.mp3';

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showText, setShowText] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsFullSize(true);
      setIsPlaying(true);
      setTimeout(() => {
        setShowText(true);
      }, 800); 
    }, 800);
  };

  const handleClose = () => {
    setShowText(false);
    setIsFullSize(false);
    setTimeout(() => {
      setIsPlaying(false);
      setIsOpen(false);
    }, 800);
  };

  return (
    <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={!isFullSize ? handleOpen : handleClose}>
      <div className="flap"></div>
      <div className="body"></div>
      <div className={`letter ${isFullSize ? 'fullSize' : ''}`}>
        {showText && (
          <>
            ఇంత చిన్న సంతోషాన్ని అందించిన నీ ప్రేమకు కృతజ్ఞతలు.<br/>
            నువ్వు నా జీవితంలో కలిసిపోయి, నాకు సంతోషాన్నిచ్చావు. <br/>
            ప్రతి రోజు నీతో గడపడం ఒక అద్భుతం.<br/>
            మనం జీవితాంతం కలిసి ఉండాలని, నీ ప్రేమని జీవితాంతం గౌరవించాలని కోరుకుంటున్నాను.<br/>
            @Puneet shetty
          </>
        )}
      </div>
      <ReactHowler
        src={audioFile}
        playing={isPlaying}
        onPlay={() => console.log("music started")}
        onEnd={() => console.log("music ended")}
        onLoadError={(id, e) => console.error('Audio error:', e.message)}
      />
    </div>
  );
};

export default LoveLetter;
