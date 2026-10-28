import { CheckCircle2 } from "lucide-react";

export default function CheckoutModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 bg-black/60 flex justify-center items-center z-[2500]"
      onClick={onClose}
    >
      <div
        className="bg-white w-[350px] p-[40px] text-center rounded-[20px] animate-[zoom_0.4s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-[#6f4e37] text-2xl font-bold mb-5">
          Order Successful
        </h2>
        <CheckCircle2 size={70} className="text-green-500 mx-auto mb-5" />
        <p className="mb-[25px] text-gray-700">
          Thank you for shopping with Coffee Heaven!
        </p>
        <button
          onClick={onClose}
          className="bg-[#d4a373] hover:bg-[#6f4e37] text-white px-[25px] py-[12px] rounded-[30px] transition-colors"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
