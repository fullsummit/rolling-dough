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
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0 gap-1">
          <span>Rolling Dough</span>
        </div>
        <hr className="w-1/3 border-zinc-700 flex my-4 lg:hidden" />
        <div className="w-fit flex justify-start flex-col items-start gap-2">
          <h3 className="text-sm">Follow Us</h3>
          <div className="flex gap-4">
            <Link href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link href="#">
              <FontAwesomeIcon icon={faX} />
            </Link>
          </div>
        </div>
        <hr className="w-1/3 border-zinc-700 flex my-4 lg:hidden" />
        {/* Policies and Copyright */}
        <div className="flex flex-col text-center items-center md:items-end mt-4 md:mt-0">
          <p className="mb-2 font-normal text-sm text-center">
            &copy; {new Date().getFullYear()} Rolling Dough. This site is a demo
          </p>
        </div>
      </div>
    </footer>
  );
}
