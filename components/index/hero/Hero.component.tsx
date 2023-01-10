export default function Hero() {
  return (
    <div className={`relative`}>
      <div className="hero h-screen">
        <div className="flex flex-col gap-[30px] mx-auto px-[10vw] lg:px-[80px] text-white absolute bottom-[40px] lg:bottom-[80px]">
          <div className="font-bold text-5xl lg:text-8xl 2xl:text-9xl w-full">
          Permanent<br/> fjerning av lukt?
          </div>
          <div className="font-semibold text-xl lg:text-2xl 2xl:text-3xl w-full">
          - Raskt, trygt og ingen kjemikaler
          </div>
        </div>
      </div>
    </div>
  );
}
