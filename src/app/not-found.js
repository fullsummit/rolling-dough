import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function NotFound () {
    return (
        <div className="flex flex-col justify-center items-start gap-4 max-w-xl mx-auto p-4">
            <h1 className="text-4xl font-bold"><FontAwesomeIcon icon={faPizzaSlice} className="mr-2"/>We misplaced this slice</h1>
            <p className="text-2xl font-light">We can't seem to find the slice of the pie you are looking for.</p>
            <Link href="/" className="btn-red">Go Back Home</Link>
        </div>
    )
}