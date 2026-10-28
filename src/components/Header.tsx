import { useState } from "react";
import { Coffee, Search, ShoppingCart, Menu, X, User } from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderProps {
  cartCount: number;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onOpenCart: () => void;
}

export default function Header({
  cartCount,
  searchQuery,
  setSearchQuery,
  onOpenCart,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white sticky top-0 z-40 shadow-sm">
      <nav className="max-w-[1200px] w-[90%] mx-auto h-20 flex justify-between items-center relative">
        <Link
          to="/"
          className="text-2xl font-bold text-[#6f4e37] flex items-center gap-2"
        >
          <Coffee className="text-[#d4a373]" /> Coffee{" "}
          <span className="text-[#d4a373]">Heaven</span>
        </Link>

        <ul
          className={`md:flex gap-8 list-none absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent flex-col md:flex-row p-5 md:p-0 shadow-md md:shadow-none transition-all duration-300 ${menuOpen ? "flex" : "hidden"}`}
        >
          <li>
            <a
              href="/#home"
              className="hover:text-[#d4a373] text-[17px] font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/#products"
              className="hover:text-[#d4a373] text-[17px] font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="/#about"
              className="hover:text-[#d4a373] text-[17px] font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/#contact"
              className="hover:text-[#d4a373] text-[17px] font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-5">
          <div className="hidden md:flex items-center border border-[#ddd] rounded-full px-4 py-2 bg-white">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="outline-none text-sm w-[120px] lg:w-[180px]"
            />
            <Search size={16} className="text-[#6f4e37]" />
          </div>

          {/* Sign In Link */}
          <Link
            to="/signin"
            className="text-[#6f4e37] hover:text-[#d4a373] transition-colors"
          >
            <User size={24} />
          </Link>

          <div
            className="relative cursor-pointer text-[#6f4e37]"
            onClick={onOpenCart}
          >
            <ShoppingCart size={22} />
            <span className="absolute -top-3 -right-3 w-[22px] h-[22px] bg-[#d4a373] text-white rounded-full flex items-center justify-center text-xs font-bold">
              {cartCount}
            </span>
          </div>
          <button
            className="md:hidden text-[#6f4e37]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
