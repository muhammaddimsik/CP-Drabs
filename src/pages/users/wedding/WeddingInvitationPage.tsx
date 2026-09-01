import React, { useEffect, useRef, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import CoupleSection from "@/features/wedding/components/CoupleSection";
import CountdownSection from "@/features/wedding/components/CountdownSection";
import EventSection from "@/features/wedding/components/EventSection";
import GallerySection from "@/features/wedding/components/GallerySection";
import MusicPlayer from "@/features/wedding/components/MusicPlayer";
import QuoteSection from "@/features/wedding/components/QuoteSection";
import RsvpSection from "@/features/wedding/components/RsvpSection";
import StorySection from "@/features/wedding/components/StorySection";
import WeddingCover from "@/features/wedding/components/WeddingCover";
import WeddingNavigation from "@/features/wedding/components/WeddingNavigation";
import ClosingSection from "@/features/wedding/components/ClosingSection";

import { weddingData } from "@/features/wedding/data/weddingData";
import GiftSection from "@/features/wedding/components/GiftSection";
import Seo from "@/components/Seo";

const WeddingInvitationPage: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const params = new URLSearchParams(window.location.search);

  const guestName = params.get("to") || "Tamu Undangan";

  const handleOpenInvitation = async () => {
    try {
      if (audioRef.current) {
        audioRef.current.volume = 0.7;

        await audioRef.current.play();

        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Gagal memainkan musik:", error);

      setIsPlaying(false);
    }

    setIsOpened(true);

    setTimeout(() => {
      AOS.refresh();
    }, 300);
  };

  return (
    <>
      <Seo
        title="The Wedding of Arjun & Roi"
        description="Dengan penuh kebahagiaan, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dalam acara pernikahan kami."
        type="website"
        name="Wedding Invitation"
        image="https://drabsky.com/wedding/images/wedding-preview.jpg"
        url="https://drabsky.com/undangan/"
      />
      <div className="min-h-screen overflow-hidden bg-[#f8f6f2] font-sans text-stone-700">
        {/* AUDIO SELALU TERSEDIA */}
        <audio
          ref={audioRef}
          src={weddingData.music.file}
          loop
          preload="auto"
        />

        {!isOpened && (
          <WeddingCover guestName={guestName} onOpen={handleOpenInvitation} />
        )}

        <main>
          <QuoteSection />

          <CoupleSection />

          <CountdownSection />

          <EventSection />

          <StorySection />

          <GallerySection />

          <GiftSection />
          <RsvpSection />

          <ClosingSection />
        </main>

        {isOpened && (
          <>
            <WeddingNavigation />

            <MusicPlayer
              audioRef={audioRef}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
            />
          </>
        )}
      </div>
    </>
  );
};

export default WeddingInvitationPage;
