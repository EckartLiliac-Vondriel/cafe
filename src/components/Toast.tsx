export default function Toast({
  message,
  isVisible,
}: {
  message: string;
  isVisible: boolean;
}) {
  return (
    <div
      className={`fixed bottom-[30px] right-[30px] max-sm:left-[15px] max-sm:right-[15px] max-sm:text-center bg-[#333] text-white px-[25px] py-[15px] rounded-[30px] z-[3000] transition-all duration-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[50px]"}`}
    >
      {message}
    </div>
  );
}
