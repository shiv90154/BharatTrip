export default function Hero() {
  return (
    <div className="relative h-[80vh]">
      <img
        src="/hero.jpg"
        className="w-full h-full object-cover brightness-75"
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-5xl font-bold">Explore Incredible India</h1>
        <p className="text-xl mt-4">Find your next travel experience</p>
      </div>
    </div>
  );
}
