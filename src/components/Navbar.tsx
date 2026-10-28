import React from "react";
import { Coffee, Search, ShoppingCart, Menu, X } from "lucide-react";

interface NavbarProps {
  cartCount: number;
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  onOpenCart: () => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (val: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  searchQuery,
  setSearchQuery,
  onOpenCart,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  return (
    <header className="w-full bg-white sticky top-0 z-40 shadow-[0_5px_20px_rgba(0,0,0,0.1)]">
      <nav className="max-w-[1200px] w-[90%] h-[80px] mx-auto flex justify-between items-center">
        <div className="text-2xl md:text-[28px] font-bold text-[#6f4e37] flex items-center">
          <Coffee className="text-[#d4a373] mr-2" />
          Coffee <span className="text-[#d4a373] ml-1">Heaven</span>
        </div>

        {/* Navigation Links (Desktop + Mobile) */}
        <ul
          className={`fixed md:static top-[80px] left-0 w-full md:w-auto bg-white md:bg-transparent flex flex-col md:flex-row md:items-center gap-6 md:gap-[35px] py-6 md:py-0 text-center transition-all duration-300 shadow-md md:shadow-none ${isMenuOpen ? "left-0" : "left-[-100%] md:left-0"}`}
        >
          {["Home", "Products", "About", "Contact"].map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-[17px] font-medium hover:text-[#d4a373] transition-colors relative after:content-[''] after:absolute after:w-0 after:h-[3px] after:bg-[#d4a373] after:bottom-[-8px] after:left-0 hover:after:w-full after:transition-all"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 md:gap-5">
          <div className="hidden md:flex items-center border border-[#ddd] rounded-full px-4 py-2 bg-white">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="border-none outline-none w-[120px] lg:w-[180px] text-sm"
            />
            <Search className="w-4 h-4 text-[#6f4e37]" />
          </div>

          <div className="relative cursor-pointer" onClick={onOpenCart}>
            <ShoppingCart className="w-[22px] h-[22px] text-[#6f4e37]" />
            <span className="absolute -top-3 -right-3 w-[22px] h-[22px] bg-[#d4a373] text-white rounded-full flex justify-center items-center text-xs font-bold">
              {cartCount}
            </span>
          </div>

          <button
            className="md:hidden text-[#6f4e37]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
