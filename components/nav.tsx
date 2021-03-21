import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const showMobileMenu = () => {
    setMobileMenuVisible(true);
  };

  const hideMobileMenu = () => {
    setMobileMenuVisible(false);
  };

  return (
    <>
      <div className="py-2 bg-blue-700">
        <nav
          className="relative flex items-center justify-between px-4 mx-auto max-w-7xl sm:px-6"
          aria-label="Global"
        >
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="/">
                <span className="sr-only">Workflow</span>
                <img
                  className="w-auto h-10 sm:h-16"
                  src="/images/edeltech-flower.svg"
                  alt="Edeltech"
                />
              </a>
              <div className="flex items-center -mr-2 md:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
                  aria-expanded="false"
                  onClick={showMobileMenu}
                >
                  <span className="sr-only">Open main menu</span>
                  {/* Heroicon name: outline/menu */}
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="hidden space-x-8 md:flex md:ml-10">
              <Link href="/">
                <a className="text-base font-medium text-white hover:text-gray-300">
                  Home
                </a>
              </Link>

              <Link href="/blog">
                <a className="text-base font-medium text-white hover:text-gray-300">
                  Blog
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </div>

      {/*
        Mobile menu, show/hide based on menu open state.

        Entering: "duration-150 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
        */}
      <div
        className={`${
          mobileMenuVisible ? "" : "hidden"
        } absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden`}
      >
        <div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
          <div className="flex items-center justify-between px-5 pt-4">
            <div>
              <img
                className="w-auto h-10 sm:h-16"
                src="/images/edeltech-flower.svg"
                alt="Edeltech"
              />
            </div>
            <div className="-mr-2">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                onClick={hideMobileMenu}
              >
                <span className="sr-only">Close menu</span>
                {/*} Heroicon name: outline/x */}
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="pt-5 pb-6">
            <div className="px-2 space-y-1">
              <a
                href="/"
                className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
              >
                Home
              </a>
              <a
                href="/blog"
                className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
              >
                Blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
