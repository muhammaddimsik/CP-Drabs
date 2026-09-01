import React from "react";

import { Music2, Pause, Play } from "lucide-react";

import { weddingData } from "../data/weddingData";

interface Props {
  audioRef: React.RefObject<HTMLAudioElement>;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

const MusicPlayer: React.FC<Props> = ({
  audioRef,
  isPlaying,
  setIsPlaying,
}) => {
  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("Tidak dapat memainkan musik:", error);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={weddingData.music.file} loop preload="auto" />

      <button
        type="button"
        onClick={toggleMusic}
        className="fixed bottom-24 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#c49a73] text-white shadow-lg transition hover:scale-105 md:bottom-6 md:right-6"
        title={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <Pause size={18} /> : <Play size={18} />}

        <Music2
          size={10}
          className="absolute -right-1 -top-1 rounded-full bg-white p-0.5 text-[#c49a73]"
        />
      </button>
    </>
  );
};

export default MusicPlayer;
