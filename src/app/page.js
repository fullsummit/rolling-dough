import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero-section">
      <img src="/pizza.png" className="flex my-6 shadow-md shadow-black rounded-md" alt="pizza in front of brick oven" />
        <h1>Rolling Dough</h1>
        <p className="text-lg font-light mt-4">Your Favorite Brick-Oven Pizza</p>
        <div className="mt-4 flex gap-4">
          <Link href="/menu" className="btn-red">
            Delivery
          </Link>
          <Link href="/menu" className="btn-white">
            Take Out
          </Link>
        </div>
      </section>
    </>
  );
}
