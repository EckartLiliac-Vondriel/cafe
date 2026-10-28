import { MapPin, Phone, Mail } from "lucide-react";

export function About() {
  return (
    <section id="about" className="bg-[#fff1e6] py-20 px-[10%] text-center">
      <div className="max-w-200 mx-auto">
        <h2 className="text-[35px] text-[#6f4e37] font-bold mb-5">About Us</h2>
        <p className="text-[17px] leading-[1.8] text-[#555]">
          Coffee Heaven serves premium coffee beans and fresh bakery every day.
          Our mission is to provide the best coffee experience with delicious
          cakes made from high-quality ingredients.
        </p>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-[70px] px-[10%] text-center">
      <h2 className="text-[35px] text-[#6f4e37] font-bold mb-[40px]">
        Contact Us
      </h2>
      <div className="flex justify-center flex-wrap gap-[50px]">
        <div className="bg-white w-[250px] p-[30px_20px] rounded-[15px] shadow-[0_5px_20px_rgba(0,0,0,0.1)] transition-transform hover:-translate-y-2">
          <MapPin size={35} className="text-[#d4a373] mx-auto mb-[15px]" />
          <p className="text-[#555]">Yangon, Myanmar</p>
        </div>
        <div className="bg-white w-[250px] p-[30px_20px] rounded-[15px] shadow-[0_5px_20px_rgba(0,0,0,0.1)] transition-transform hover:-translate-y-2">
          <Phone size={35} className="text-[#d4a373] mx-auto mb-[15px]" />
          <p className="text-[#555]">+95 9123456789</p>
        </div>
        <div className="bg-white w-[250px] p-[30px_20px] rounded-[15px] shadow-[0_5px_20px_rgba(0,0,0,0.1)] transition-transform hover:-translate-y-2">
          <Mail size={35} className="text-[#d4a373] mx-auto mb-[15px]" />
          <p className="text-[#555]">coffeeheaven@email.com</p>
        </div>
      </div>
    </section>
  );
}
