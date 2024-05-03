import React, { useState, useRef, useEffect } from 'react';
import Lottie from "lottie-react";
import Wave from "../data/Wave.json";

const Music = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume] = useState(0.1); // Set initial volume to 0.1
  const [currentSongIndex, setCurrentSongIndex] = useState(null);
  const audioRef = useRef(new Audio());
  
  const songs = [
    { url: 'Mindspray_dog.mp3', title: 'Mindspray Mix-Dog' },
    { url: 'Mindspray.mp3', title: 'Mindspray Mix-Sunday Morning' },
    // Add more songs as needed
  ];

  useEffect(() => {
    const storedState = localStorage.getItem('audioPlaybackState');
    if (storedState) {
      setIsPlaying(JSON.parse(storedState));
    }

    const storedTime = localStorage.getItem('audioCurrentTime');
    if (storedTime) {
      audioRef.current.currentTime = parseFloat(storedTime);
    }

    const randomIndex = Math.floor(Math.random() * songs.length);
    setCurrentSongIndex(randomIndex);
    audioRef.current.src = songs[randomIndex].url;
    audioRef.current.volume = volume; // Set initial volume
  }, []);

  useEffect(() => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
    };
  }, [isPlaying, currentSongIndex]);

  useEffect(() => {
    const audio = audioRef.current;

    const handleSongEnd = () => {
      const nextSongIndex = (currentSongIndex + 1) % songs.length;
      setCurrentSongIndex(nextSongIndex);
      audio.src = songs[nextSongIndex].url;
      audio.play();
    };

    audio.addEventListener('ended', handleSongEnd);

    return () => {
      audio.removeEventListener('ended', handleSongEnd);
    };
  }, [currentSongIndex, songs]);

  const toggleAudio = () => {
    setIsPlaying(prevIsPlaying => !prevIsPlaying);
  };

  const handleTimeUpdate = () => {
    localStorage.setItem('audioCurrentTime', audioRef.current.currentTime.toString());
  };

  return (
    <div>
      <button className="audio-button" onClick={toggleAudio}>
        {isPlaying ? <Lottie animationData={Wave} loop={true} /> : <Lottie animationData={Wave} loop={false} />}
      </button>
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        loop={false}
        style={{ display: 'none' }}
      />
      {isPlaying && currentSongIndex !== null && (
        <div className="now-playing active">
          <a href="/"></a>
          Now playing: {songs[currentSongIndex].title}
        </div>
      )}
    </div>
  );
};

export default Music;
