import { type Product } from "../types";

interface ProductCardProps {
  product: Product;
  onAdd: () => void;
}

export default function ProductCard({ product, onAdd }: ProductCardProps) {
  return (
    <div className="bg-white rounded-[20px] overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.1)] transition-transform duration-400 hover:-translate-y-2.5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] relative group">
      <div className="absolute top-[15px] left-[15px] bg-[#d4a373] text-white px-[15px] py-1 rounded-[20px] text-[13px] capitalize z-10">
        {product.category}
      </div>
      <div className="w-full h-[200px] md:h-[250px] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-5">
        <h3 className="text-[#6f4e37] text-[18px] md:text-[22px] font-bold mb-2">
          {product.name}
        </h3>
        <p className="text-[14px] text-[#777] leading-[1.5] mb-[15px]">
          {product.description}
        </p>
        <div className="text-[#fbbf24] mb-3">
          {"★".repeat(product.rating)}
          <span className="text-[#777] text-[14px] ml-2">
            ({product.rating})
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-[18px] md:text-[22px] font-bold text-[#d4a373]">
            ${product.price.toFixed(2)}
          </div>
          <button
            onClick={onAdd}
            className="bg-[#6f4e37] hover:bg-[#d4a373] text-white px-3 md:px-[18px] py-2 md:py-[10px] rounded-[25px] text-[12px] md:text-[14px] transition-transform hover:scale-105"
          >
            Add Cart
          </button>
        </div>
      </div>
    </div>
  );
}
