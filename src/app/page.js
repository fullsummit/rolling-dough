import Link from "next/link";
import Logo from "./shared/logo";

export default function Home() {
  return (
    <>
      <section className="hero-section items-center">
        <div className="w-full sm:w-fit flex items-center justify-center flex-col">
          <h1 className="w-full flex flex-col sm:flex-row items-center justify-center">
            <Logo />
          </h1>
          <p className="text-2xl font-light mt-4">
            Your Favorite Brick-Oven Pizza
          </p>
          <div className="mt-4 flex gap-4 flex-col sm:flex-row">
            <Link href="/menu" className="btn-red">
              Delivery
            </Link>
            <Link href="/menu" className="btn-white">
              Carry Out
            </Link>
          </div>
        </div>
        <div className="flex my-6 shadow-lg max-w-lg shadow-zinc-600 rounded-md flex-col relative w-92 h-92 bg-black overflow-hidden">
          <img src="/optimized/pizza-640px.jpg" alt="pizza in front of brick oven" srcSet="/optimized/pizza-320px.jpg 320w, /optimized/pizza-640px.jpg 640w, /optimized/pizza-1024px.jpg 1024w" />
          <div className="bg-red-600 text-white text-7xl p-4 font-extrabold flex">
            <div className="flex-col flex w-1/3 justify-center">
              <span className="text-3xl sm:text-5xl"><span className="font-light text-sm sm:text-3xl">$</span>9.99</span>
              <span className="text-xl sm:text-2xl uppercase font-semibold">carryout</span>
              <span className="text-2xl sm:text-3xl text-white uppercase font-extrabold">special</span>
            </div>
            <div className="w-2/3 flex flex-col pl-4 justify-center border-l-2 border-w">
              <span className="text-6xl">ORDER NOW!</span>
              <span className="text-xl">READY IN 5 MINUTES</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
