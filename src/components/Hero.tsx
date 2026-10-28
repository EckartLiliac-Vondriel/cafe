export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-80px)] flex justify-center items-center text-center text-white bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://i.pinimg.com/736x/6f/e1/11/6fe111d94ca6ab10e81c9bd96328a82d.jpg")',
      }}
    >
      <div className="max-w-175 p-5">
        <h1 className="text-[34px] md:text-[55px] font-bold leading-tight mb-5">
          Fresh Coffee & Delicious Cakes
        </h1>
        <p className="text-[16px] md:text-[20px] mb-7.5">
          Start your day with premium coffee and freshly baked cakes.
        </p>
        <a
          href="#products"
          className="inline-block bg-[#d4a373] hover:bg-[#6f4e37] text-white px-[35px] py-[14px] rounded-[30px] text-[18px] transition-transform hover:-translate-y-1"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
}
