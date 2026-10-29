import { X, Trash2 } from "lucide-react";
import { type CartItem } from "../types";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  updateQuantity: (id: number, delta: number) => void;
  removeItem: (id: number) => void;
  onCheckout: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  updateQuantity,
  removeItem,
  onCheckout,
}: CartDrawerProps) {
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-[1500] transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={onClose}
      />
      <div
        className={`fixed top-0 right-0 w-full sm:w-[420px] h-screen bg-white z-[2000] flex flex-col transition-transform duration-400 shadow-[-5px_0_20px_rgba(0,0,0,0.2)] ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-[25px] border-b border-[#ddd]">
          <h2 className="text-[#6f4e37] text-xl font-bold">Shopping Cart</h2>
          <button onClick={onClose} className="text-[#555] hover:text-black">
            <X size={25} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {cart.length === 0 ? (
            <p className="text-center text-[#777] mt-[50px]">
              Your cart is empty.
            </p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-[15px] mb-5 border-b border-[#eee] pb-[15px]"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[70px] h-[70px] rounded-[10px] object-cover"
                />
                <div className="flex-1">
                  <h4 className="text-[#6f4e37] font-semibold mb-1">
                    {item.name}
                  </h4>
                  <p className="text-[#d4a373] font-bold">
                    ${item.price.toFixed(2)}
                  </p>
                  <div className="flex items-center gap-[10px] mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-[25px] h-[25px] rounded-full bg-[#6f4e37] text-white flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="font-bold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-[25px] h-[25px] rounded-full bg-[#6f4e37] text-white flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
                <Trash2
                  size={18}
                  className="text-red-500 cursor-pointer hover:text-red-700"
                  onClick={() => removeItem(item.id)}
                />
              </div>
            ))
          )}
        </div>

        <div className="p-[25px] border-t border-[#ddd] bg-gray-50">
          <div className="flex justify-between mb-3 text-[16px]">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-3 text-[16px]">
            <span>Tax (5%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-[22px] font-bold text-[#6f4e37] mb-4">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            onClick={onCheckout}
            className="w-full py-[15px] bg-[#d4a373] hover:bg-[#6f4e37] text-white rounded-[30px] text-[18px] transition-colors"
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}
