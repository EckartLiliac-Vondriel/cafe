import { useState, useMemo } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Filter from "../components/Filter";
import ProductCard from "../components/ProductCard";
import CartDrawer from "../components/CartDrawer";
import CheckoutModal from "../components/CheckoutModal";
import Toast from "../components/Toast";
import { About, Contact } from "../components/AboutContact";
import Footer from "../components/Footer";
import { products } from "../data/products";
import { useCart } from "../hooks/useCart";

export default function HomePage() {
  // Use exact same logic from previous App.tsx here...
  const { cart, addToCart, updateQuantity, removeFromCart, clearCart } =
    useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState<"all" | "coffee" | "cake">("all");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(""), 2500);
  };

  const handleAddToCart = (productId: number) => {
    const product = products.find((p) => p.id === productId);
    if (product) {
      addToCart(product);
      showToast(`${product.name} Added!`);
    }
  };

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchSearch = p.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchCat = category === "all" || p.category === category;
      return matchSearch && matchCat;
    });
  }, [searchQuery, category]);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="bg-[#fffaf5] min-h-screen text-[#333] font-sans selection:bg-[#d4a373] selection:text-white">
      <Header
        cartCount={cartCount}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onOpenCart={() => setIsCartOpen(true)}
      />
      <Hero />

      <main id="products" className="max-w-300 w-[90%] mx-auto pb-20">
        <Filter activeCategory={category} onCategoryChange={setCategory} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7.5">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAdd={() => handleAddToCart(product.id)}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12.5 text-[20px] text-[#777]">
              No Products Found 😢
            </div>
          )}
        </div>
      </main>

      <About />
      <Contact />
      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        updateQuantity={updateQuantity}
        removeItem={removeFromCart}
        onCheckout={() => {
          if (cart.length === 0) {
            showToast("Your cart is empty");
            return;
          }
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />
      {isCheckoutOpen && (
        <CheckoutModal
          onClose={() => {
            setIsCheckoutOpen(false);
            clearCart();
            showToast("Order Completed 🎉");
          }}
        />
      )}
      <Toast message={toastMsg} isVisible={!!toastMsg} />
    </div>
  );
}
