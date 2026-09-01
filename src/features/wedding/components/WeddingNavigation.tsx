import React from "react";

import { CalendarDays, Heart, Home, Images, MessageCircle } from "lucide-react";

const WeddingNavigation: React.FC = () => {
  const navigation = [
    {
      id: "home",
      label: "Home",
      icon: Home,
    },
    {
      id: "couple",
      label: "Couple",
      icon: Heart,
    },
    {
      id: "event",
      label: "Event",
      icon: CalendarDays,
    },
    {
      id: "gallery",
      label: "Gallery",
      icon: Images,
    },
    {
      id: "rsvp",
      label: "RSVP",
      icon: MessageCircle,
    },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-32px)] max-w-md -translate-x-1/2 rounded-2xl border border-white/40 bg-white/90 px-3 py-2 shadow-xl backdrop-blur-md">
      <div className="grid grid-cols-5">
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className="flex flex-col items-center gap-1 rounded-xl px-1 py-2 text-stone-500 transition hover:bg-stone-100 hover:text-[#a77b58]"
            >
              <Icon size={17} />

              <span className="text-[9px]">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default WeddingNavigation;
