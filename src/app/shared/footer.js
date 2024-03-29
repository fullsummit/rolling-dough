import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope, faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-black bg-white p-4 py-6 w-full shadow-blue-600">
      <div className="container mx-auto flex flex-col flex-wrap justify-start lg:flex-row lg:justify-between items-center">
      <img src={`${process.env.NEXT_PUBLIC_BASEPATH}/optimized/logo-320px.webp`} alt="dummy 'rolling rough' pizza logo" className="h-6 w-auto m-2 flex" />
        <hr className="w-1/3 border-zinc-700 flex my-4 lg:hidden" />
        <div className="w-fit flex justify-start flex-col items-start gap-2">
          <h3 className="text-base">Follow Us</h3>
          <div className="flex gap-4">
            <Link href="#" aria-label="dummy instagram link">
              <FontAwesomeIcon icon={faInstagram} className="text-hover" />
            </Link>
            <Link href="#" aria-label="dummy facebook link">
              <FontAwesomeIcon icon={faFacebook} className="text-hover" />
            </Link>
            <Link href="#" aria-label="dummy twitter link">
              <FontAwesomeIcon icon={faX} className="text-hover" />
            </Link>
          </div>
        </div>
        <hr className="w-1/3 border-zinc-700 flex my-4 lg:hidden" />
        <div className="flex flex-col text-center items-center md:items-end mt-4 md:mt-0">
          <p className="mb-2 font-normal text-sm text-center">
            &copy; {new Date().getFullYear()} Full Summit LLC. This site is a demo. 
          </p>
        </div>
      </div>
    </footer>
  );
}
