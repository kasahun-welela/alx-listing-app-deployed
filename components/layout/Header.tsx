import React, { useState } from "react";
// import Link from 'next/link';

interface AccommodationType {
  icon: string;
  label: string;
  key: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const accommodationTypes: AccommodationType[] = [
    { icon: "🏠", label: "Rooms", key: "rooms" },
    { icon: "🏛️", label: "Mansion", key: "mansion" },
    { icon: "🌾", label: "Countryside", key: "countryside" },
    { icon: "🏖️", label: "Villa", key: "villa" },
    { icon: "🌴", label: "Tropical", key: "tropical" },
    { icon: "✨", label: "New", key: "new" },
    { icon: "🏊", label: "Amazing pool", key: "pool" },
    { icon: "🏖️", label: "Beach house", key: "beach" },
    { icon: "🏝️", label: "Island", key: "island" },
    { icon: "⛺", label: "Camping", key: "camping" },
    { icon: "🏢", label: "Apartment", key: "apartment" },
    { icon: "🏡", label: "House", key: "house" },
    { icon: "🏞️", label: "Lakefront", key: "lakefront" },
    { icon: "🚜", label: "Farm house", key: "farm" },
    { icon: "🏘️", label: "Treehouse", key: "treehouse" },
    { icon: "🛖", label: "Cabins", key: "cabins" },
    { icon: "🏰", label: "Castles", key: "castles" },
  ];

  const handleMenuToggle = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAccommodationClick = (key: string): void => {
    console.log(`Selected accommodation: ${key}`);
    // accommodation selection logic
  };

  const handleAuthAction = (action: "signin" | "signup"): void => {
    console.log(`${action} clicked`);
    //authentication logic
  };

  const handleSearch = (): void => {
    console.log("Search triggered");
    // search logic
  };

  return (
    <div className="w-full">
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Top Banner */}
      <div className="bg-teal-500 text-white px-4 py-2 text-center text-sm">
        <div className="flex items-center justify-center gap-2">
          <span>✈️</span>
          <span>
            Overseas trip? Get the latest information on travel guides
          </span>
          <button
            className="bg-black text-white px-3 py-1 rounded text-xs hover:bg-gray-800 transition-colors"
            onClick={() => console.log("More info clicked")}
          >
            More info
          </button>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Navigation */}
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-gray-900">
                al<span className="text-teal-500">x</span>
              </div>
            </div>

            {/* Desktop Search Bar */}
            <div className="hidden md:flex items-center flex-1 max-w-2xl mx-8">
              <div className="flex items-center w-full border border-gray-300 rounded-full shadow-sm">
                <div className="flex-[2] px-4 py-2 border-r border-gray-200">
                  <p>Location</p>
                  <input
                    type="text"
                    placeholder="Search for destination"
                    className="w-full text-sm text-gray-700 placeholder-gray-500 border-none outline-none"
                  />
                </div>
                <div className="flex-1 px-4 py-2 border-r border-gray-200">
                  <p>Check in</p>
                  <input
                    type="text"
                    placeholder="Add date"
                    className="w-full text-sm text-gray-700 placeholder-gray-500 border-none outline-none"
                  />
                </div>
                <div className="flex-1 px-4 py-2 border-r border-gray-200">
                  <p>Check out</p>
                  <input
                    type="text"
                    placeholder="Add date"
                    className="w-full text-sm text-gray-700 placeholder-gray-500 border-none outline-none"
                  />
                </div>
                <div className="flex-1 px-4 py-2 border-r border-gray-200">
                  <p>People</p>
                  <input
                    type="text"
                    placeholder="Add guest"
                    className="w-full text-sm text-gray-700 placeholder-gray-500 border-none outline-none"
                  />
                </div>
                <button
                  className="bg-orange-400 hover:bg-orange-500 text-white p-3 rounded-full m-1 transition-colors"
                  onClick={handleSearch}
                  aria-label="Search"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <button
                className="text-gray-700 hover:text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => handleAuthAction("signin")}
              >
                Sign in
              </button>
              <button
                className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg transition-colors"
                onClick={() => handleAuthAction("signup")}
              >
                Sign up
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={handleMenuToggle}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6 6 18M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12h16M4 6h16M4 18h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Search Bar */}
          <div className="md:hidden pb-4">
            <div className="flex items-center w-full border border-gray-300 rounded-full shadow-sm">
              <div className="flex-1 px-4 py-3">
                <input
                  type="text"
                  placeholder="Where to"
                  className="w-full text-sm text-gray-700 placeholder-gray-500 border-none outline-none"
                />
                <div className="text-xs text-gray-400 mt-1">
                  Anywhere • Any week • Add guests
                </div>
              </div>
              <button
                className="bg-orange-400 hover:bg-orange-500 text-white p-3 rounded-full m-1 transition-colors"
                onClick={handleSearch}
                aria-label="Search"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col gap-2">
                <button
                  className="text-left text-gray-700 hover:text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                  onClick={() => handleAuthAction("signin")}
                >
                  Sign in
                </button>
                <button
                  className="text-left bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg transition-colors"
                  onClick={() => handleAuthAction("signup")}
                >
                  Sign up
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Accommodation Types */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop View - All Items */}
          <div className="hidden lg:flex items-center justify-between py-4 overflow-x-auto">
            {accommodationTypes.map((type: AccommodationType) => (
              <button
                key={type.key}
                className={`flex flex-col items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors min-w-0 ${
                  type.key === "villa" ? "border-b-2 border-gray-900" : ""
                }`}
                onClick={() => handleAccommodationClick(type.key)}
                aria-label={`Select ${type.label}`}
              >
                <span className="text-xl" role="img" aria-label={type.label}>
                  {type.icon}
                </span>
                <span className="text-xs text-gray-700 whitespace-nowrap">
                  {type.label}
                </span>
              </button>
            ))}
          </div>

          {/* Tablet View - Scrollable */}
          <div className="hidden md:flex lg:hidden items-center py-4 overflow-x-auto gap-2 scrollbar-hide">
            <div className="flex items-center gap-2 min-w-max">
              {accommodationTypes.map((type: AccommodationType) => (
                <button
                  key={type.key}
                  className={`flex flex-col items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0 ${
                    type.key === "villa" ? "border-b-2 border-gray-900" : ""
                  }`}
                  onClick={() => handleAccommodationClick(type.key)}
                  aria-label={`Select ${type.label}`}
                >
                  <span className="text-xl" role="img" aria-label={type.label}>
                    {type.icon}
                  </span>
                  <span className="text-xs text-gray-700 whitespace-nowrap">
                    {type.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile View - Scrollable */}
          <div className="md:hidden py-4 overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-3 min-w-max px-2">
              {accommodationTypes.map((type: AccommodationType) => (
                <button
                  key={type.key}
                  className={`flex flex-col items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0 ${
                    type.key === "villa" ? "border-b-2 border-gray-900" : ""
                  }`}
                  onClick={() => handleAccommodationClick(type.key)}
                  aria-label={`Select ${type.label}`}
                >
                  <span className="text-lg" role="img" aria-label={type.label}>
                    {type.icon}
                  </span>
                  <span className="text-xs text-gray-700 text-center whitespace-nowrap">
                    {type.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
