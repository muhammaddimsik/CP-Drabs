import React from "react";
import {
  Pause,
  Play,
  Volume2,
} from "lucide-react";

interface Props {
  audioRef: React.RefObject<HTMLAudioElement | null>;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}

const JawaMusicPlayer: React.FC<Props> = ({
  audioRef,
  isPlaying,
  setIsPlaying,
}) => {
  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);

      return;
    }

    try {
      await audio.play();

      setIsPlaying(true);
    } catch (error) {
      console.error(
        "Gagal memainkan musik:",
        error,
      );
    }
  };

  return (
    <button
      type="button"
      onClick={toggleMusic}
      className="
        fixed
        bottom-24
        right-5
        z-[60]
        flex h-12 w-12
        items-center
        justify-center
        rounded-full
        border
        border-[#C4A065]/60
        bg-[#3A281D]/90
        text-[#E8C98F]
        shadow-xl
        backdrop-blur-md
        transition
        hover:scale-105
      "
    >
      {isPlaying ? (
        <Pause size={17} />
      ) : (
        <Play size={17} />
      )}

      <Volume2
        size={10}
        className="absolute -right-0.5 -top-0.5 rounded-full bg-[#B89558] p-[1px] text-white"
      />
    </button>
  );
};

export default JawaMusicPlayer;