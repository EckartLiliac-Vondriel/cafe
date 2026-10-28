export interface Product {
  id: number;
  name: string;
  category: "coffee" | "cake";
  price: number;
  image: string;
  description: string;
  rating: number;
}

export interface CartItem extends Product {
  quantity: number;
}
