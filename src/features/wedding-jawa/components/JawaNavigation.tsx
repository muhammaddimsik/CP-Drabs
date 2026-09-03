import React from "react";

import {
  CalendarDays,
  Heart,
  Home,
  Images,
  MessageCircle,
  Users,
} from "lucide-react";

interface Props {
  activeSection: string;
}

const JawaNavigation: React.FC<Props> = ({
  activeSection,
}) => {
  const items = [
    {
      id: "jawa-home",
      label: "Awal",
      icon: Home,
    },
    {
      id: "jawa-couple",
      label: "Temanten",
      icon: Users,
    },
    {
      id: "jawa-event",
      label: "Acara",
      icon: CalendarDays,
    },
    {
      id: "jawa-story",
      label: "Crita",
      icon: Heart,
    },
    {
      id: "jawa-gallery",
      label: "Galeri",
      icon: Images,
    },
    {
      id: "jawa-rsvp",
      label: "Rawuh",
      icon: MessageCircle,
    },
  ];

  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <nav
      className="
        fixed
        bottom-4
        left-1/2
        z-[70]
        w-[calc(100%-24px)]
        max-w-lg
        -translate-x-1/2
        border
        border-[#C4A065]/30
        bg-[#342219]/95
        px-2
        py-2
        shadow-[0_15px_40px_rgba(0,0,0,0.25)]
        backdrop-blur-xl
      "
    >
      <div className="grid grid-cols-6">
        {items.map((item) => {
          const Icon = item.icon;

          const active =
            activeSection === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() =>
                scrollTo(item.id)
              }
              className={`
                relative
                flex
                flex-col
                items-center
                gap-1
                px-1
                py-2
                transition
                ${
                  active
                    ? "text-[#E4C687]"
                    : "text-[#AA998B]"
                }
              `}
            >
              {active && (
                <span className="absolute -top-1 h-1.5 w-1.5 rotate-45 bg-[#D2B06E]" />
              )}

              <Icon size={16} />

              <span className="text-[8px] tracking-wide">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default JawaNavigation;