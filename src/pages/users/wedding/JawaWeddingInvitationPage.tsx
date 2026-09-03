import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import JawaCover from "@/features/wedding-jawa/components/JawaCover";
import JawaOpeningSection from "@/features/wedding-jawa/components/JawaOpeningSection";
import JawaCoupleSection from "@/features/wedding-jawa/components/JawaCoupleSection";
import JawaCountdownSection from "@/features/wedding-jawa/components/JawaCountdownSection";
import JawaEventSection from "@/features/wedding-jawa/components/JawaEventSection";
import JawaStorySection from "@/features/wedding-jawa/components/JawaStorySection";
import JawaGallerySection from "@/features/wedding-jawa/components/JawaGallerySection";
import JawaGiftSection from "@/features/wedding-jawa/components/JawaGiftSection";
import JawaRsvpSection from "@/features/wedding-jawa/components/JawaRsvpSection";
import JawaClosingSection from "@/features/wedding-jawa/components/JawaClosingSection";
import JawaMusicPlayer from "@/features/wedding-jawa/components/JawaMusicPlayer";
import JawaNavigation from "@/features/wedding-jawa/components/JawaNavigation";

import { jawaWeddingData } from "@/features/wedding-jawa/data/jawaWeddingData";

const JawaWeddingInvitationPage: React.FC =
  () => {
    const [isOpened, setIsOpened] =
      useState(false);

    const [isPlaying, setIsPlaying] =
      useState(false);

    const [
      activeSection,
      setActiveSection,
    ] = useState("jawa-home");

    const audioRef =
      useRef<HTMLAudioElement>(null);

    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
        easing: "ease-out-cubic",
      });
    }, []);

    useEffect(() => {
      if (!isOpened) {
        document.body.style.overflow =
          "hidden";
      } else {
        document.body.style.overflow =
          "auto";
      }

      return () => {
        document.body.style.overflow =
          "";
      };
    }, [isOpened]);

    useEffect(() => {
      if (!isOpened) return;

      const sectionIds = [
        "jawa-home",
        "jawa-couple",
        "jawa-countdown",
        "jawa-event",
        "jawa-story",
        "jawa-gallery",
        "jawa-gift",
        "jawa-rsvp",
        "jawa-closing",
      ];

      const sections = sectionIds
        .map((id) =>
          document.getElementById(id),
        )
        .filter(
          (
            element,
          ): element is HTMLElement =>
            element !== null,
        );

      const observer =
        new IntersectionObserver(
          (entries) => {
            const visibleEntries =
              entries
                .filter(
                  (entry) =>
                    entry.isIntersecting,
                )
                .sort(
                  (a, b) =>
                    b.intersectionRatio -
                    a.intersectionRatio,
                );

            if (
              visibleEntries.length > 0
            ) {
              setActiveSection(
                visibleEntries[0].target.id,
              );
            }
          },
          {
            threshold: [
              0.2,
              0.4,
              0.6,
            ],
            rootMargin:
              "-20% 0px -45% 0px",
          },
        );

      sections.forEach((section) => {
        observer.observe(section);
      });

      return () => {
        observer.disconnect();
      };
    }, [isOpened]);

    const params =
      new URLSearchParams(
        window.location.search,
      );

    const guestName =
      params.get("to") ||
      "Tamu Undangan";

    const handleOpenInvitation =
      async () => {
        setIsOpened(true);

        const audio =
          audioRef.current;

        if (audio) {
          try {
            audio.volume = 0.7;

            await audio.play();

            setIsPlaying(true);
          } catch (error) {
            console.error(
              "Gagal memainkan musik:",
              error,
            );

            setIsPlaying(false);
          }
        }

        window.setTimeout(() => {
          AOS.refresh();
        }, 350);
      };

    return (
      <div className="min-h-screen bg-[#F5EFE3] text-[#4A382B]">
        <audio
          ref={audioRef}
          src={
            jawaWeddingData.music.file
          }
          preload="auto"
          loop
        />

        {!isOpened && (
          <JawaCover
            guestName={guestName}
            onOpen={
              handleOpenInvitation
            }
          />
        )}

        <main>
          <JawaOpeningSection />

          <JawaCoupleSection />

          <JawaCountdownSection />

          <JawaEventSection />

          <JawaStorySection />

          <JawaGallerySection />

          <JawaGiftSection />

          <JawaRsvpSection />

          <JawaClosingSection />
        </main>

        {isOpened && (
          <>
            <JawaNavigation
              activeSection={
                activeSection
              }
            />

            <JawaMusicPlayer
              audioRef={audioRef}
              isPlaying={isPlaying}
              setIsPlaying={
                setIsPlaying
              }
            />
          </>
        )}
      </div>
    );
  };

export default JawaWeddingInvitationPage;