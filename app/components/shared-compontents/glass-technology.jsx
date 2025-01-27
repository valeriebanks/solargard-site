"use client";

import { useState, useRef } from "react";
import { Popover } from "@headlessui/react";
import Link from "next/link";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";

const windowFilms = [
  {
    name: "Switchable Glass",
    description: "Dynamic Privacy, Light Control, Modern Aesthetics",
    href: "/",
    icon: ChartPieIcon,
  },
  {
    name: "Cloaking Film",
    description: "Cloaking Film, Obscures Content on Digital Screens",
    href: "/Casper",
    icon: FingerPrintIcon,
  },
];

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function GlassTechonlogyMenu() {
  let [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200); // 200ms delay
  };

  return (
    <Popover className="relative antialiased z-10">
      {({ open }) => (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Popover.Button className="flex items-center gap-x-1 lg:text-sm xl:text-base xxl:text-base nav:text-sm font-semibold text-secondary">
            <span className="hover:text-HoverColor">Advanced Films</span>
            <ChevronDownIcon aria-hidden="true" className="size-5" />
          </Popover.Button>

          {isOpen && (
            <Popover.Panel
              static
              className="absolute left-1/2 z-20 mt-7 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="w-[300px] max-w-md flex-auto overflow-hidden rounded-2xl bg-white text-base shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {windowFilms.map((item) => (
                    <div
                      key={item.name}
                      className="group text-lg relative flex gap-x-4 rounded-lg p-4 hover:bg-gray-50"
                    >
                      <div>
                        <Link
                          href={item.href}
                          className="font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          )}
        </div>
      )}
    </Popover>
  );
}
