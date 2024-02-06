import Link from "next/link";

export default function OrderTracker() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto p-4 items-center justify-center">
      <h1 className="text-4xl font-bold">Track Your Order</h1>
      <p className="text-2xl font-light">
        <Link className="text-red-600 font-semibold" href={"/login"}>
          Sign in
        </Link>{" "}
        or{" "}
        <Link className="text-red-600 font-semibold" href={"/login"}>
          Sign up
        </Link>{" "}
        to see your orders.
      </p>
      <span className="my-4 mx-auto">- or -</span>
        <label className="text-2xl font-light">
            Enter your order number
        <input
            type="text"
            placeholder="Order number"
            className="border border-gray-300 p-2 rounded-lg w-full"
            maxLength={12}
        />
        </label>
        <button className="btn-red">
            Track Order
        </button>
      <div className="flex flex-col sm:flex-row gap-2 w-full"></div>
    </div>
  );
}