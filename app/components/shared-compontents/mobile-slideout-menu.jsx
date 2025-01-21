"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function MobileSlideMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div>
        <button
          className="font-bold text-lg text-secondary flex items-center"
          onClick={() => setOpen(true)}
        >
          Menu
        </button>
      </div>
      <Dialog open={open} onClose={setOpen} className="relative z-30">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
        />
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <DialogPanel
                transition
                className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
              >
                <TransitionChild>
                  <div className="absolute right-0 top-0 -ml-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="relative text-4xl rounded-full bg-zinc-100 p-2 text-zinc-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                    >
                      <span className="absolute -inset-2.5" />
                      <span className="sr-only">Close panel</span>
                      <XMarkIcon aria-hidden="true" className="size-8" />
                    </button>
                  </div>
                </TransitionChild>
                <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                  <div className="px-4 sm:px-6">
                    <DialogTitle className="text-base inline-flex items-center font-semibold text-gray-900"></DialogTitle>
                  </div>
                  <div className="relative mt-4 flex-1 px-4 sm:px-6 antialiased">
                    <div className="border-b-1 pb-1">
                      <a href="/Solar-Films">
                        <button className="text-lg text-zinc-500 font-semibold rounded-md w-full  text-left p-2 pl-4 hover:bg-zinc-100">
                          Solar Films
                        </button>
                      </a>
                    </div>
                    <div className="mt-2 border-b-1 pb-1">
                      <a href="/Privacy-Films">
                        <button className="text-lg text-zinc-500 font-semibold rounded-md w-full text-left p-2 pl-4 hover:bg-zinc-100">
                          Privacy Films
                        </button>
                      </a>
                    </div>
                    <div className="mt-2 border-b-1 pb-1">
                      <a href="/Safety-Films">
                        <button className="text-lg text-zinc-500 font-semibold rounded-md w-full text-left p-2 pl-4 hover:bg-zinc-100">
                          Safety Films
                        </button>
                      </a>
                    </div>
                    <div className="mt-2 border-b-1 pb-1">
                      <a href="/Casper">
                        <button className="text-lg text-zinc-500 font-semibold rounded-md w-full text-left p-2 pl-4 hover:bg-zinc-100">
                          Casper Cloaking
                        </button>
                      </a>
                    </div>
                    <div className="mt-6 border-b-1 pb-1">
                      <a href="/Manifestations-Graphics">
                        <button className="text-lg text-zinc-500 font-semibold rounded-md w-full text-left p-2 pl-4 hover:bg-zinc-100">
                          Manifestations & Graphics
                        </button>
                      </a>
                    </div>
                    <div className="mt-2 border-b-1 pb-1">
                      <a href="/CoverStyl">
                        <button className="text-lg text-zinc-500 font-semibold rounded-md w-full text-left p-2 pl-4 hover:bg-zinc-100">
                          CoverStyl&rsquo;
                        </button>
                      </a>
                    </div>
                    <div className="mt-6 border-b-1 pb-1">
                      <a href="/Vehicle-tinting">
                        <button className="text-lg text-zinc-500 font-semibold rounded-md w-full text-left p-2 pl-4 hover:bg-zinc-100">
                          Vehicle Tinting
                        </button>
                      </a>
                    </div>
                    <div className="mt-2 border-b-1 pb-1">
                      <a href="/Vehicle-Wrapping">
                        <button className="text-lg text-zinc-500 font-semibold rounded-md w-full text-left p-2 pl-4 hover:bg-zinc-100">
                          Vehicle Wraps
                        </button>
                      </a>
                    </div>
                    <div className="mt-6 border-b-1 pb-1">
                      <a href="/Contact-Us">
                        <button className="text-lg text-zinc-500 font-semibold rounded-md w-full text-left p-2 pl-4 hover:bg-zinc-100">
                          Contact Us
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
function PhoneIcon() {
  return (
    <svg
      width="28"
      height="26"
      viewBox="0 0 36 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.003 0C8.07584 0 0 7.62465 0 16.9972C0 21.8895 2.23537 26.5482 6.13302 29.779C6.44507 30.0354 6.91765 30.0057 7.1922 29.7139C7.46524 29.4193 7.43524 28.9731 7.12319 28.7139C3.54959 25.7521 1.49875 21.4816 1.49875 16.9972C1.49875 8.40793 8.90248 1.41643 18.0015 1.41643C27.099 1.41643 34.5042 8.40793 34.5042 16.9972C34.5042 25.5878 27.099 32.5779 18.0015 32.5779C15.7676 32.5779 14.3454 32.194 13.8938 31.4646C13.3192 30.5411 14.2164 28.8924 14.926 27.6813L15.3326 27.8513C15.7436 28.0227 16.1772 28.1105 16.6243 28.1105C17.892 28.1105 19.0412 27.4037 19.5543 26.3102L20.2129 24.898C20.927 23.3754 20.1919 21.5878 18.5791 20.9122L16.3377 19.9773C16.1007 19.8796 15.8681 19.3924 15.8771 18.5269C15.8891 17.5255 16.2222 16.255 16.7908 15.0397C18.0645 12.3187 19.7703 11.1629 20.3539 11.4009L22.5953 12.3343C24.175 12.9901 26.1254 12.2705 26.8155 10.7918L27.4756 9.3796C27.8191 8.64164 27.8416 7.82011 27.5311 7.06657C27.2235 6.31445 26.6234 5.71955 25.8403 5.39377L23.6019 4.45751C23.1474 4.26912 22.6553 4.17422 22.1347 4.17422C18.9136 4.17422 14.92 7.89377 12.4266 13.2195C9.48008 19.517 9.76963 25.5354 13.0867 26.9207L13.5458 27.1119C12.6411 28.6572 11.6254 30.6232 12.5946 32.187C13.3522 33.4065 15.1195 34 17.997 34C27.9241 34 36 26.3739 36 17.0028C36.006 7.62465 27.9302 0 18.003 0Z"
        fill="#5C5C5C"
      />
    </svg>
  );
}
