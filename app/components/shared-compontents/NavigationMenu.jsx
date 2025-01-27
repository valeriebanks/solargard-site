import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const NavigationMenuDemo = () => {
  return (
    <div className="w-10/12 absolute z-10 top-10 left-1/2 transform -translate-x-1/2 p-1 bg-white">
      <div className="flex flex-row mx-auto">
        <div className="basis-40">01</div>
        <div className="basis-11/12">
          <NavigationMenu.Root className="flex relative z-20 items-center">
            <NavigationMenu.List className="center m-0 flex justify-center list-none rounded-md p-1">
              <NavigationMenu.Item>
                <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-[15px] font-medium leading-none text-secondary outline-none hover:text-blue-500 focus:shadow-[0_0_0_2px]">
                  Window Films
                  <CaretDownIcon
                    className="relative top-px text-secondary transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                    aria-hidden
                  />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="absolute left-0 top-0 w-full data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto">
                  <ul className="one m-0  grid list-none items-center gap-x-2.5 p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
                    <ListItem href="https://stitches.dev/" title="Solar Films">
                      CSS-in-JS with best-in-class developer experience.
                    </ListItem>
                    <ListItem href="/colors" title="Colors">
                      Beautiful, thought-out palettes with auto dark mode.
                    </ListItem>
                    <ListItem href="https://icons.radix-ui.com/" title="Icons">
                      A crisp set of 15x15 icons, balanced and consistent.
                    </ListItem>
                  </ul>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link
                  className="block select-none rounded px-3 py-2 text-[15px] font-medium leading-none text-violet11 no-underline outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7"
                  href="https://github.com/radix-ui"
                >
                  Manifestations & Graphics
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link
                  className="block select-none rounded px-3 py-2 text-[15px] font-medium leading-none text-violet11 no-underline outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7"
                  href="https://github.com/radix-ui"
                >
                  CoverStyl’
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link
                  className="block select-none rounded px-3 py-2 text-[15px] font-medium leading-none text-violet11 no-underline outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7"
                  href="https://github.com/radix-ui"
                >
                  Vehicle Tinting
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-[15px] font-medium leading-none text-violet11 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7">
                  Overview
                  <CaretDownIcon
                    className="relative top-px text-violet10 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                    aria-hidden
                  />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="absolute left-0 top-0 w-full sm:w-auto">
                  <ul className="m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
                    <ListItem
                      title="Introduction"
                      href="/primitives/docs/overview/introduction"
                    >
                      Build high-quality, accessible design systems and web
                      apps.
                    </ListItem>
                    <ListItem
                      title="Getting started"
                      href="/primitives/docs/overview/getting-started"
                    >
                      A quick tutorial to get you up and running with Radix
                      Primitives.
                    </ListItem>
                    <ListItem
                      title="Styling"
                      href="/primitives/docs/guides/styling"
                    >
                      Unstyled and compatible with any styling solution.
                    </ListItem>
                    <ListItem
                      title="Animation"
                      href="/primitives/docs/guides/animation"
                    >
                      Use CSS keyframes or any animation library of your choice.
                    </ListItem>
                    <ListItem
                      title="Accessibility"
                      href="/primitives/docs/overview/accessibility"
                    >
                      Tested in a range of browsers and assistive technologies.
                    </ListItem>
                    <ListItem
                      title="Releases"
                      href="/primitives/docs/overview/releases"
                    >
                      Radix Primitives releases and their changelogs.
                    </ListItem>
                  </ul>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link
                  className="block select-none rounded px-3 py-2 text-[15px] font-medium leading-none text-violet11 no-underline outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7"
                  href="https://github.com/radix-ui"
                >
                  Github
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link
                  className="block select-none rounded px-3 py-2 text-[15px] font-medium leading-none text-violet11 no-underline outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7"
                  href="https://github.com/radix-ui"
                >
                  Github
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Indicator className="top-full z-10 flex h-2.5 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn">
                <div className="relative top-[70%] size-2.5 rotate-45 rounded-tl-sm bg-white" />
              </NavigationMenu.Indicator>
            </NavigationMenu.List>

            <div className="perspective-[2000px] absolute left-0 top-full flex w-full justify-center">
              <NavigationMenu.Viewport className="relative mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md bg-white transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]" />
            </div>
          </NavigationMenu.Root>
        </div>
      </div>
    </div>
  );
};

const ListItem = React.forwardRef(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames(
            "block select-none rounded-md p-3 text-[15px] leading-none no-underline outline-none transition-colors hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-violet7",
            className
          )}
          {...props}
          ref={forwardedRef}
        >
          <div className="mb-[5px] font-medium leading-[1.2] text-violet12">
            {title}
          </div>
          <p className="leading-[1.4] text-mauve11">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

export default NavigationMenuDemo;

function LogoLatest() {
  return (
    <svg
      width="180"
      height="56"
      viewBox="0 0 211 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1028_34932)">
        <path
          d="M8.33895 37.3625C5.97835 35.0019 3.61858 32.6405 1.25714 30.2807C0.0239556 29.0475 0.252588 27.0061 1.79411 26.1869C2.47586 25.8251 3.2626 25.7796 4.04324 26.2012C4.85378 26.6376 5.41277 27.3342 6.04048 27.9569C7.36984 29.2745 8.66647 30.6248 9.98493 31.9533C12.3432 34.33 14.709 36.6992 17.0664 39.0767C17.7992 39.8162 18.6378 40.3965 19.6086 40.7415C20.6186 41.1005 21.6628 41.1984 22.7269 41.0595C24.0149 40.8895 25.1442 40.3897 26.0804 39.5206C26.6758 38.9683 27.1904 38.3504 27.5452 37.5811C27.9852 36.6251 28.1852 35.6339 28.1741 34.5993C28.1681 34.0464 28.0185 33.4874 27.8979 32.9372C27.5621 31.4035 26.5059 30.3389 25.4346 29.2844C24.1552 28.0252 22.8801 26.7634 21.6066 25.4983C21.0287 24.9238 20.3995 24.3869 19.9041 23.7472C19.1705 22.8005 19.1527 21.4371 19.9615 20.501C20.5895 19.7733 21.3761 19.4459 22.3224 19.5986C23.0126 19.7099 23.5705 20.1101 24.0694 20.6258C25.2859 21.8809 26.5359 23.1024 27.7726 24.339C28.6893 25.2558 29.6035 26.175 30.5236 27.0884C31.4067 27.9648 32.2948 28.8361 33.1829 29.7075C34.0057 30.5152 35.4636 30.416 36.227 29.5133C36.8648 28.7603 36.8981 27.4732 36.0789 26.6791C34.7972 25.4377 33.5398 24.1719 32.274 22.9145C30.6437 21.2942 29.0234 19.6639 27.3804 18.0561C26.8156 17.503 26.2304 16.9565 25.592 16.4959C25.1669 16.1883 24.6407 16.0076 24.1415 15.8239C23.3754 15.5427 22.5693 15.4664 21.7689 15.5032C21.2468 15.5265 20.7216 15.6304 20.2188 15.7685C19.7338 15.9009 19.2476 16.0741 18.8141 16.3201C18.3418 16.5877 17.9044 16.9322 17.497 17.2932C16.7401 17.9641 16.1488 18.7687 15.81 19.737C15.5246 20.5539 15.3617 21.3927 15.3591 22.2759C15.3566 23.1039 15.5092 23.9025 15.7828 24.6694C16.1101 25.5839 16.6593 26.378 17.3651 27.0688C18.2936 27.9771 19.1902 28.9174 20.1087 29.8341C21.1733 30.8988 22.2505 31.9508 23.3185 33.0121C24.1707 33.8592 24.5348 34.871 24.1266 35.993C23.8482 36.7598 23.2751 37.3226 22.4189 37.5184C21.3493 37.7625 20.5022 37.3969 19.7384 36.6197C17.6835 34.5296 15.611 32.4588 13.5301 30.3946C12.7451 29.6163 12.1334 28.711 11.6348 27.751C10.7613 26.0688 10.2498 24.2738 10.2756 22.3802C10.2884 21.43 10.336 20.4675 10.5054 19.5396C10.6445 18.7744 10.9342 18.0272 11.2498 17.3143C11.5868 16.5507 11.944 15.767 12.4532 15.1185C13.1513 14.226 13.9504 13.396 14.8023 12.6473C15.3719 12.1464 16.0965 11.8123 16.773 11.4419C17.2328 11.1903 17.7149 10.9644 18.2131 10.7999C18.7731 10.6149 19.3539 10.4692 19.9389 10.3847C20.6425 10.283 21.3594 10.2163 22.0712 10.2235C22.7932 10.2307 23.5236 10.3001 24.236 10.4286C24.9383 10.5554 25.638 10.7518 26.3119 10.9945C26.8707 11.196 27.396 11.5031 27.9319 11.7739C29.5796 12.6046 30.7679 13.9824 32.0499 15.2442C33.7213 16.8888 35.3759 18.5502 37.0357 20.2082C38.0633 21.2359 39.0968 22.2577 40.1043 23.3038C40.7221 23.945 41.0802 24.7393 41.4054 25.5612C41.8403 26.6605 41.9443 27.7846 41.8489 28.9274C41.7625 29.9718 41.4125 30.9238 40.9468 31.8641C40.2268 33.3169 38.967 34.255 37.8722 35.3498C35.7196 37.5024 33.5335 39.6232 31.3499 41.7448C30.2313 42.8325 29.123 43.9339 27.938 44.9469C27.3616 45.4408 26.6483 45.7997 25.9482 46.118C25.3275 46.3999 24.6523 46.6056 23.9778 46.728C23.2507 46.86 22.4956 46.9203 21.7538 46.8949C20.9908 46.8685 20.2116 46.7722 19.4712 46.5753C18.7349 46.3793 18.0276 46.0444 17.3247 45.7308C15.6901 45.0005 14.5926 43.6128 13.3613 42.3949C11.6768 40.7289 10.0083 39.047 8.33312 37.3718C8.33563 37.3693 8.33815 37.3667 8.33983 37.3651L8.33895 37.3625Z"
          fill="url(#paint0_linear_1028_34932)"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M64.145 18.9372L61.9466 22.5646H55.3515C54.1459 22.5646 52.9215 22.4466 52.4204 23.3551C52.1605 23.8651 52.1605 24.509 52.4204 25.0094C52.9403 25.8732 54.1459 25.7999 54.9758 25.7999H57.863C60.2743 25.7999 61.9278 26.2079 63.2681 28.6113C64.2139 30.221 64.1168 33.23 63.099 35.0055C61.8025 37.2877 59.5792 37.3164 57.4059 37.3164H47.864V33.689H55.9684C56.7732 33.689 58.6146 33.807 59.2034 32.7806C59.4883 32.2706 59.4883 31.6267 59.2034 31.0976C58.6585 30.1891 57.4528 30.3071 56.6292 30.3071H53.6981C51.6688 30.3071 49.7492 29.899 48.4527 27.569C47.507 25.886 47.4882 23.0204 48.4527 21.3406C49.9433 18.7204 53.1532 18.9404 54.8066 18.9404L64.145 18.9372Z"
        fill="#414040"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M72.9821 18.8928C75.2243 18.657 79.6461 18.5836 81.8351 21.4397C84.0052 24.251 84.1211 29.4977 83.1316 32.5258C82.3017 35.0535 81.1492 36.4911 78.6189 37.1446C76.5646 37.6546 70.8276 37.9351 68.3443 35.6974C66.0019 33.5777 65.5133 28.8506 65.9142 26.2209C66.2712 23.8654 67.0761 20.9105 69.979 19.5813C70.9717 19.1287 72.0865 18.9661 72.9821 18.8928ZM70.2201 27.7605C70.2483 25.8321 70.7212 23.8877 73.1074 23.0207C74.1972 22.6382 76.5302 22.7561 77.7171 23.7219C79.3424 25.0415 79.4676 27.9326 79.2985 29.1503C79.1294 30.6866 78.6377 32.1784 76.7964 33.0422C75.5719 33.616 73.5364 33.6415 72.2587 32.8063C70.3109 31.4899 70.195 29.3256 70.2201 27.7605Z"
        fill="#414040"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M90.2536 18.9374V31.2253V33.6988H98.1169L96.1346 37.3262H85.957V25.0383V18.9278H90.2536V18.9374Z"
        fill="#414040"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M111.582 18.9376C112.672 22.0104 114.861 28.1495 115.951 31.2255C116.495 32.7523 117.595 35.8091 118.149 37.3359C117.015 37.3359 114.745 37.3359 113.611 37.3359C113.308 36.5008 112.691 34.8274 112.387 33.9986C111.35 33.9986 109.287 33.9986 108.25 33.9986C107.724 33.0902 106.678 31.2605 106.149 30.3425C105.497 32.0893 104.182 35.5892 103.531 37.3359C102.369 37.3359 100.055 37.3359 98.9023 37.3359C100.011 34.2632 102.219 28.124 103.315 25.0481C103.869 23.5212 104.978 20.4644 105.538 18.9376C107.041 18.9376 110.069 18.9376 111.582 18.9376ZM106.246 30.0525C106.863 28.3153 108.087 24.8409 108.704 23.1037C109.302 24.8409 110.508 28.3153 111.115 30.0525C109.891 30.0525 107.461 30.0525 106.246 30.0525Z"
        fill="#414040"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M119.73 18.9373H129.441C131.211 18.9373 133.033 18.8385 134.615 20.8849C135.892 22.5679 135.911 25.4494 135.535 26.9412C135.204 28.3341 134.543 29.3254 133.105 29.998C132.185 30.4347 131.615 30.4538 130.979 30.508L135.448 37.3389H130.444L124.046 27.3811V37.3389H119.749V25.051V18.9405M124.027 26.8519V22.5679H127.735C128.439 22.5679 130.425 22.4213 131.067 23.5784C131.352 24.1043 131.37 25.2327 130.995 25.8893C130.378 26.9444 128.94 26.8519 127.644 26.8519H124.027Z"
        fill="#414040"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M154.315 18.9374L152.189 22.8835H147.792C146.095 22.8835 143.94 22.7369 142.662 25.0191C141.814 26.5842 141.77 29.8769 142.662 31.3942C143.843 33.4406 145.666 33.3864 147.335 33.3864H149.461V30.0937H144.876V26.173H153.758V37.3325H145.822C143.48 37.3325 140.621 37.1604 138.851 34.1323C137.01 31.0021 137.057 25.2104 138.807 22.1376C140.558 18.9629 143.749 18.9374 146.01 18.9374H154.315Z"
        fill="#414040"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M167.781 18.9376L172.15 31.2255L174.348 37.3359H169.81L168.586 33.9986H164.449L162.348 30.3425L159.73 37.3359H155.102L159.514 25.0481L161.737 18.9376H167.781ZM162.439 30.0525L164.897 23.1037L167.308 30.0525H162.439Z"
        fill="#414040"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M175.93 18.9373H185.641C187.41 18.9373 189.233 18.8385 190.814 20.8849C192.092 22.5679 192.11 25.4494 191.735 26.9412C191.403 28.3341 190.742 29.3254 189.305 29.998C188.384 30.4347 187.814 30.4538 187.178 30.508L191.647 37.3389H186.643L180.245 27.3811V37.3389H175.948V25.051V18.9405M180.229 26.8519V22.5679H183.937C184.642 22.5679 186.627 22.4213 187.269 23.5784C187.554 24.1043 187.573 25.2327 187.197 25.8893C186.58 26.9444 185.143 26.8519 183.846 26.8519H180.229Z"
        fill="#414040"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M202.084 18.9376C204.495 18.9376 207.658 18.8643 209.543 22.1857C211.313 25.2872 211.338 30.9354 209.641 33.9636C207.871 37.1383 205.316 37.2818 202.554 37.3296H193.933V25.0417V18.9312H202.081M198.232 33.4185V22.9858H200.759C202.789 22.9858 204.467 22.8391 205.673 24.9333C206.594 26.4506 206.594 29.8357 205.673 31.4709C204.511 33.6066 202.482 33.4185 200.644 33.4185H198.232Z"
        fill="#414040"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1028_34932"
          x1="2.23732"
          y1="24.1218"
          x2="44.2009"
          y2="32.4901"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00DBDE" />
          <stop offset="0.96" stopColor="#FC00FF" />
        </linearGradient>
        <clipPath id="clip0_1028_34932">
          <rect
            width="39.5982"
            height="39.5982"
            fill="white"
            transform="translate(28 -0.000488281) rotate(45)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
