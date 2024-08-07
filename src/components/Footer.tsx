import { MapPin } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <section className="bg-white pt-20">
      <div className="container mx-auto">
        <div className="md:flex items-center justify-between">
          <h2 className="inter font-bold md:text-3xl text-2xl">
            Let's Stay Connected
          </h2>
          <div className="mt-4 md:mt-0 flex gap-2 item-center md:justify-center">
            <a
              href="https://api.whatsapp.com/send/?phone=6285640943430&text=Halo Drabs! Saya ingin bertanya tentang pembuatan website.&type=phone_number&app_absent=0"
              target="_blank"
              className="flex items-center gap-1 rounded py-3 px-6 bg-green-400 hover:bg-green-500"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.88595 7.16985C9.06891 7.17475 9.27175 7.18465 9.46474 7.61303C9.59271 7.89821 9.80829 8.42321 9.9839 8.85087C10.1206 9.18366 10.233 9.45751 10.2611 9.51356C10.3254 9.64156 10.365 9.78926 10.2809 9.96156C10.271 9.98188 10.2617 10.0013 10.2526 10.02C10.1852 10.16 10.1372 10.2597 10.0237 10.3899C9.97709 10.4435 9.9285 10.5022 9.88008 10.5607C9.79494 10.6636 9.71035 10.7658 9.63785 10.838C9.50924 10.9659 9.37563 11.1039 9.52402 11.3599C9.6725 11.6159 10.1919 12.4579 10.9587 13.1373C11.783 13.8712 12.4998 14.1805 12.8622 14.3368C12.9325 14.3672 12.9895 14.3918 13.0313 14.4126C13.2886 14.5406 13.4419 14.5209 13.5903 14.3486C13.7388 14.1762 14.2334 13.6001 14.4066 13.3441C14.5748 13.0881 14.7479 13.1275 14.9854 13.2161C15.2228 13.3047 16.4892 13.9251 16.7464 14.0531C16.7972 14.0784 16.8448 14.1012 16.8889 14.1224C17.0678 14.2082 17.1895 14.2665 17.2411 14.3535C17.3054 14.4618 17.3054 14.9739 17.0927 15.5746C16.8751 16.1752 15.8263 16.7513 15.3514 16.7956C15.3064 16.7999 15.2617 16.8053 15.2156 16.8108C14.7804 16.8635 14.228 16.9303 12.2596 16.1555C9.83424 15.2018 8.23322 12.8354 7.90953 12.357C7.88398 12.3192 7.86638 12.2932 7.85698 12.2806L7.8515 12.2733C7.70423 12.0762 6.80328 10.8707 6.80328 9.62685C6.80328 8.43682 7.38951 7.81726 7.65689 7.53467C7.67384 7.51676 7.6895 7.50021 7.70366 7.48494C7.94107 7.22895 8.21814 7.16495 8.39125 7.16495C8.56445 7.16495 8.73756 7.16495 8.88595 7.16985Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.18418 21.3314C2.10236 21.6284 2.37285 21.9025 2.6709 21.8247L7.27824 20.6213C8.7326 21.409 10.37 21.8275 12.0371 21.8275H12.0421C17.5281 21.8275 22 17.3815 22 11.9163C22 9.26735 20.966 6.77594 19.0863 4.90491C17.2065 3.03397 14.7084 2 12.042 2C6.55607 2 2.08411 6.44605 2.08411 11.9114C2.08348 13.65 2.5424 15.3582 3.41479 16.8645L2.18418 21.3314ZM4.86092 17.2629C4.96774 16.8752 4.91437 16.4608 4.71281 16.1127C3.97266 14.8348 3.58358 13.3855 3.58411 11.9114C3.58411 7.28158 7.37738 3.5 12.042 3.5C14.3119 3.5 16.4296 4.37698 18.0281 5.96805C19.6248 7.55737 20.5 9.66611 20.5 11.9163C20.5 16.5459 16.7068 20.3275 12.0421 20.3275H12.0371C10.6206 20.3275 9.22863 19.9718 7.99266 19.3023C7.65814 19.1211 7.26726 19.0738 6.89916 19.17L4.13676 19.8915L4.86092 17.2629Z"
                  fill="white"
                />
              </svg>
              <p className="text-sm text-white font-medium">Whatsapp</p>
            </a>
          </div>
        </div>
        <hr className="rounded-full mt-6" />
        <div className="py-12 flex flex-wrap justify-between items-start">
          <div className="md:w-4/12 pr-10">
            <h2 className="text-xl text-cdark font-semibold md:mb-4 mb-2">
              Drabsky
            </h2>
            <p className="text-cdark md:mb-3 mb-1">
              Marison Regency Bojong, Blok F, Wangandowo - Bojong, Kabupaten
              Pekalongan, Jawa Tengah
            </p>
            <Link
              to="https://maps.app.goo.gl/HgSdvrhKC63ZnLxKA"
              target="_blank"
            >
              <div className="w-max flex items-center gap-2 bg-cprimary rounded-full py-2 px-4 text-white">
                <MapPin />
                <p className="text-sm font-semibold">Get Location</p>
              </div>
            </Link>
          </div>
          <div className="md:w-2/12 w-full mt-4">
            <h2 className="text-md font-semibold md:mb-4 mb-2 text-cdark">
              Quick Access
            </h2>
            <div className="flex flex-col">
              <Link to="/" className="hover:underline text-cdark ">
                Home
              </Link>
              <Link to="/portfolio" className="hover:underline text-cdark">
                Portfolio
              </Link>
              <Link to="/Blogs" className="hover:underline text-cdark">
                Blog
              </Link>
              <Link to="/about-us" className="hover:underline text-cdark">
                About Us
              </Link>
            </div>
          </div>
          <div className="md:w-2/12 w-full mt-4">
            <h2 className="text-md font-semibold md:mb-4 mb-2 text-cdark">
              Support
            </h2>
            <div className="flex flex-col text-sm capitalize">
              <Link to="/#faq">FaQ</Link>
            </div>
          </div>
          <div className="md:w-2/12 w-full mt-4">
            <h2 className="text-md font-semibold md:mb-4 mb-2 text-cdark">
              Social Media
            </h2>
            <div className="flex flex-col">
              <a
                href="https://web.facebook.com/profile.php?id=100072729001703"
                className="capitalize flex items-center md:gap-2 gap-3"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.99178 2.52513C7.64816 1.86875 8.5384 1.5 9.46666 1.5H11.2667C11.5428 1.5 11.7667 1.72386 11.7667 2V4.4C11.7667 4.67614 11.5428 4.9 11.2667 4.9H9.46666C9.44013 4.9 9.4147 4.91054 9.39595 4.92929C9.37719 4.94804 9.36666 4.97348 9.36666 5V6.3H11.2667C11.4206 6.3 11.566 6.37094 11.6608 6.49229C11.7555 6.61365 11.7891 6.7719 11.7517 6.92127L11.1517 9.32127C11.0961 9.54385 10.8961 9.7 10.6667 9.7H9.36666V14C9.36666 14.2761 9.1428 14.5 8.86666 14.5H6.46666C6.19051 14.5 5.96666 14.2761 5.96666 14V9.7H4.66666C4.39051 9.7 4.16666 9.47614 4.16666 9.2V6.8C4.16666 6.52386 4.39051 6.3 4.66666 6.3H5.96666V5C5.96666 4.07174 6.33541 3.1815 6.99178 2.52513ZM9.46666 2.5C8.80361 2.5 8.16773 2.76339 7.69889 3.23223C7.23005 3.70107 6.96666 4.33696 6.96666 5V6.8C6.96666 7.07614 6.7428 7.3 6.46666 7.3H5.16666V8.7H6.46666C6.7428 8.7 6.96666 8.92386 6.96666 9.2V13.5H8.36666V9.2C8.36666 8.92386 8.59051 8.7 8.86666 8.7H10.2763L10.6263 7.3H8.86666C8.59051 7.3 8.36666 7.07614 8.36666 6.8V5C8.36666 4.70826 8.48255 4.42847 8.68884 4.22218C8.89513 4.01589 9.17492 3.9 9.46666 3.9H10.7667V2.5H9.46666Z"
                    fill="black"
                  />
                </svg>
                <p className="text-cdark ">Facebook</p>
              </a>
              <a
                href="https://www.instagram.com/drab.sky/"
                className="capitalize flex items-center md:gap-2 gap-3"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6667 4.66666C10.6667 4.29847 10.9652 3.99999 11.3333 3.99999C11.7015 3.99999 12 4.29847 12 4.66666C12 5.03485 11.7015 5.33332 11.3333 5.33332C10.9652 5.33332 10.6667 5.03485 10.6667 4.66666Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.00001 4.83332C6.25111 4.83332 4.83334 6.25109 4.83334 7.99999C4.83334 9.74889 6.25111 11.1667 8.00001 11.1667C9.74891 11.1667 11.1667 9.74889 11.1667 7.99999C11.1667 6.25109 9.74891 4.83332 8.00001 4.83332ZM5.83334 7.99999C5.83334 6.80337 6.80339 5.83332 8.00001 5.83332C9.19663 5.83332 10.1667 6.80337 10.1667 7.99999C10.1667 9.19661 9.19663 10.1667 8.00001 10.1667C6.80339 10.1667 5.83334 9.19661 5.83334 7.99999Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.5055 1.88867C9.19446 1.63037 6.80557 1.63037 4.49452 1.88867C3.15315 2.03858 2.07026 3.09526 1.91256 4.44361C1.6362 6.80648 1.6362 9.1935 1.91256 11.5564C2.07026 12.9047 3.15315 13.9614 4.49452 14.1113C6.80557 14.3696 9.19446 14.3696 11.5055 14.1113C12.8469 13.9614 13.9298 12.9047 14.0875 11.5564C14.3638 9.1935 14.3638 6.80648 14.0875 4.44361C13.9298 3.09526 12.8469 2.03858 11.5055 1.88867ZM4.6056 2.88248C6.84283 2.63244 9.15721 2.63244 11.3944 2.88248C12.2812 2.98158 12.9915 3.68133 13.0942 4.55978C13.3616 6.84546 13.3616 9.15452 13.0942 11.4402C12.9915 12.3187 12.2812 13.0184 11.3944 13.1175C9.15721 13.3675 6.84283 13.3675 4.6056 13.1175C3.71886 13.0184 3.00853 12.3187 2.90579 11.4402C2.63846 9.15452 2.63846 6.84546 2.90579 4.55978C3.00853 3.68133 3.71886 2.98158 4.6056 2.88248Z"
                    fill="black"
                  />
                </svg>
                <p className="text-cdark ">Instagram</p>
              </a>
              <a
                href="https://www.twitter.com/drab.sky/"
                className="capitalize flex items-center md:gap-2 gap-3"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.0143 2.22895C10.3532 2.1709 10.7328 2.15152 11.0899 2.21194C11.7278 2.31987 12.3171 2.61635 12.7828 3.06086C13.0873 3.06774 13.3865 3.00776 13.6513 2.92225C13.8754 2.84989 14.0646 2.7625 14.1973 2.69341C14.2632 2.65906 14.3142 2.62975 14.3473 2.60991C14.3638 2.60001 14.3758 2.59251 14.383 2.58799L14.3893 2.58395C14.5872 2.45213 14.8507 2.47778 15.0193 2.64545C15.1879 2.81316 15.215 3.07644 15.0842 3.27504C14.9457 3.48524 14.7535 3.85995 14.5381 4.27979C14.5043 4.34581 14.4698 4.41294 14.4349 4.48072C14.3114 4.72069 14.1847 4.96323 14.0667 5.17132C13.9926 5.30198 13.9133 5.43463 13.8333 5.54926V5.73178C13.8384 6.40219 13.7615 7.06912 13.6055 7.71793C13.5073 8.12616 13.3778 8.52722 13.2176 8.91747C12.8027 9.92858 12.1904 10.8469 11.4166 11.6187C10.6427 12.3905 9.72289 13.0005 8.71072 13.4128C7.69945 13.8248 6.61628 14.0313 5.52439 14.0204C3.94151 14.0217 2.39193 13.5657 1.06212 12.7071C0.866252 12.5806 0.783786 12.3356 0.863344 12.1164C0.942901 11.8973 1.16336 11.7622 1.39474 11.7908C1.59498 11.8156 1.79659 11.8277 1.99836 11.827C2.72333 11.825 3.43449 11.6648 4.08373 11.3631C3.87736 11.2691 3.68034 11.1533 3.49623 11.0168C2.95509 10.6155 2.55248 10.0555 2.34444 9.41478C2.29038 9.24827 2.32733 9.06562 2.44188 8.93323C2.44393 8.93085 2.446 8.92851 2.44809 8.92618C2.32574 8.81708 2.21125 8.69829 2.10586 8.57054C1.63164 7.99574 1.37053 7.27478 1.36667 6.52962L1.36666 6.52704L1.36667 6.4937C1.36667 6.31646 1.4605 6.15246 1.6133 6.06265C1.65204 6.03988 1.69309 6.02275 1.73533 6.01125C1.50977 5.5612 1.39248 5.06423 1.39333 4.56006C1.39307 3.98888 1.54226 3.42757 1.82611 2.9319C1.90805 2.78881 2.05526 2.69532 2.21962 2.682C2.38397 2.66869 2.54432 2.73726 2.64823 2.86529C3.28993 3.65596 4.09079 4.3028 4.99878 4.76378C5.46554 5.00075 5.95524 5.18588 6.45911 5.31683C6.7416 5.39026 7.02854 5.44665 7.31838 5.4856C7.30562 5.00343 7.40083 4.52151 7.60065 4.07622C7.89377 3.42301 8.39542 2.88556 9.0269 2.54816C9.29434 2.40528 9.64935 2.29147 10.0143 2.22895ZM2.49552 7.26062C2.58195 7.50388 2.71053 7.73209 2.87723 7.93416C3.20478 8.33118 3.65941 8.60289 4.16422 8.70331C4.38908 8.74804 4.5547 8.93997 4.56605 9.16895C4.5774 9.39793 4.43157 9.6053 4.21224 9.67204C4.03057 9.72733 3.84446 9.76585 3.65622 9.78724C3.78061 9.94758 3.92693 10.0912 4.09186 10.2135C4.46599 10.4909 4.91728 10.6448 5.38296 10.6538C5.59424 10.6579 5.78015 10.7943 5.84736 10.9947C5.91458 11.195 5.84859 11.416 5.68252 11.5466C4.98308 12.097 4.17427 12.4808 3.31724 12.6767C4.02756 12.9042 4.77253 13.0213 5.52606 13.0204L5.53186 13.0204C6.4919 13.0303 7.4443 12.8489 8.33343 12.4867C9.22257 12.1245 10.0306 11.5887 10.7104 10.9107C11.3901 10.2327 11.928 9.42601 12.2925 8.53781C12.4332 8.19499 12.5469 7.84269 12.6332 7.48408C12.7704 6.91357 12.838 6.32712 12.8333 5.73761L12.8333 5.7337V5.38037C12.8333 5.25913 12.8774 5.14203 12.9573 5.05085C13.0035 4.99815 13.0842 4.87645 13.1969 4.67785C13.304 4.4891 13.4225 4.26249 13.5458 4.02304C13.5533 4.00856 13.5607 3.994 13.5683 3.97938C13.2485 4.04881 12.8862 4.0852 12.5063 4.04414C12.386 4.03114 12.2745 3.97495 12.1924 3.88599C11.8572 3.52243 11.4107 3.28043 10.9231 3.19793C10.7068 3.16133 10.4452 3.16971 10.1831 3.2146C9.89839 3.26337 9.65059 3.34872 9.49815 3.43016C9.06196 3.66321 8.71547 4.03444 8.513 4.48563C8.31053 4.93682 8.26355 5.44245 8.37942 5.92322C8.41635 6.0765 8.37884 6.23822 8.27818 6.35957C8.17753 6.48092 8.02554 6.5477 7.86807 6.53973C7.30579 6.51129 6.74948 6.42553 6.20756 6.28468C5.63429 6.13569 5.07714 5.92505 4.54609 5.65544C3.76424 5.2585 3.0522 4.74044 2.43564 4.12198C2.40751 4.26572 2.39323 4.41241 2.39333 4.56004L2.39333 4.56132C2.39264 4.92846 2.48273 5.29009 2.65561 5.61398C2.82848 5.93789 3.07876 6.21401 3.38417 6.41778C3.56952 6.54145 3.65067 6.77283 3.58317 6.98518C3.51567 7.19753 3.3158 7.33958 3.09307 7.33352C2.89134 7.32803 2.6913 7.30349 2.49552 7.26062Z"
                    fill="black"
                  />
                </svg>
                <p className="text-cdark ">Twitter</p>
              </a>
              <a
                href="https://www.linkedin.com/drab.sky/"
                className="capitalize flex items-center md:gap-2 gap-3"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.33333 0.833313C2.32081 0.833313 1.5 1.65412 1.5 2.66665C1.5 3.67917 2.32081 4.49998 3.33333 4.49998C4.34586 4.49998 5.16667 3.67917 5.16667 2.66665C5.16667 1.65412 4.34586 0.833313 3.33333 0.833313ZM2.5 2.66665C2.5 2.20641 2.8731 1.83331 3.33333 1.83331C3.79357 1.83331 4.16667 2.20641 4.16667 2.66665C4.16667 3.12688 3.79357 3.49998 3.33333 3.49998C2.8731 3.49998 2.5 3.12688 2.5 2.66665Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.5 5.33331C1.5 5.05717 1.72386 4.83331 2 4.83331H4.66667C4.94281 4.83331 5.16667 5.05717 5.16667 5.33331V14C5.16667 14.2761 4.94281 14.5 4.66667 14.5H2C1.72386 14.5 1.5 14.2761 1.5 14V5.33331ZM2.5 5.83331V13.5H4.16667V5.83331H2.5Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.16667 5.33331C6.16667 5.05717 6.39052 4.83331 6.66667 4.83331H9.33333C9.60948 4.83331 9.83333 5.05717 9.83333 5.33331V5.62266L10.1235 5.4983C10.6224 5.28449 11.1559 5.15041 11.6955 5.10136C13.5455 4.93318 15.1667 6.3869 15.1667 8.25348V14C15.1667 14.2761 14.9428 14.5 14.6667 14.5H12C11.7239 14.5 11.5 14.2761 11.5 14V9.33331C11.5 9.1123 11.4122 8.90034 11.2559 8.74406C11.0996 8.58778 10.8877 8.49998 10.6667 8.49998C10.4457 8.49998 10.2337 8.58778 10.0774 8.74406C9.92113 8.90034 9.83333 9.1123 9.83333 9.33331V14C9.83333 14.2761 9.60948 14.5 9.33333 14.5H6.66667C6.39052 14.5 6.16667 14.2761 6.16667 14V5.33331ZM7.16667 5.83331V13.5H8.83333V9.33331C8.83333 8.84708 9.02649 8.38077 9.3703 8.03695C9.71412 7.69313 10.1804 7.49998 10.6667 7.49998C11.1529 7.49998 11.6192 7.69313 11.963 8.03695C12.3068 8.38077 12.5 8.84708 12.5 9.33331V13.5H14.1667V8.25348C14.1667 6.98389 13.0594 5.98149 11.786 6.09725C11.35 6.13689 10.919 6.24536 10.5174 6.41744L9.53029 6.8405C9.37581 6.90671 9.1984 6.89087 9.05809 6.79835C8.91777 6.70583 8.83333 6.549 8.83333 6.38093V5.83331H7.16667Z"
                    fill="black"
                  />
                </svg>
                <p className="text-cdark ">Linkedin</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-cprimary">
        <div className="container mx-auto md:flex justify-end mt-2 py-4">
          <p className="text-sm text-white ">
            Copyright©2023<span className="font-semibold"> Drabs</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
