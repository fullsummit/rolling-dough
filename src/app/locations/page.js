import {
  faEarthAmerica,
  faEarthEurope,
  faGlobeAsia,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Locations() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-2xl mx-auto p-4">
      <h1 className="text-4xl font-bold">
        <FontAwesomeIcon icon={faLocationDot} className="mr-2 text-red-600" />
        Locations
      </h1>
      <p className="text-2xl font-light">
        We have locations all over the world.
      </p>
      <div className="flex gap-10 flex-wrap flex-col sm:flex-row">
        <div>
          <h2 className="text-2xl font-bold">
            <FontAwesomeIcon icon={faEarthAmerica} className="mr-1" /> United
            States
          </h2>
          <ul className="flex flex-col  gap-2">
            <li>
              <span className="flex flex-col">
                <span className="font-bold">Los Angeles</span>
                <span>123 Main Street, Los Angeles</span>
              </span>
            </li>
            <li>
              <span className="flex flex-col">
                <span className="font-bold">New York</span>
                <span>456 Elm Street, New York</span>
              </span>
            </li>
            <li>
              <span className="flex flex-col">
                <span className="font-bold">Chicago</span>
                <span>789 Oak Street, Chicago</span>
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold">
            <FontAwesomeIcon icon={faEarthEurope} className="mr-1" /> Europe
          </h2>
          <ul className="flex flex-col gap-2">
            <li>
              <span className="flex flex-col">
                <span className="font-bold">Paris</span>
                <span>123 Rue de Rivoli, Paris</span>
              </span>
            </li>
            <li>
              <span className="flex flex-col">
                <span className="font-bold">London</span>
                <span>456 Oxford Street, London</span>
              </span>
            </li>
            <li>
              <span className="flex flex-col">
                <span className="font-bold">Berlin</span>
                <span>789 Friedrichstraße, Berlin</span>
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold">
            <FontAwesomeIcon icon={faGlobeAsia} className="mr-1" /> Asia
          </h2>
          <ul className="flex flex-col gap-2">
            <li>
              <span className="flex flex-col">
                <span className="font-bold">Tokyo</span>
                <span>123 Shibuya Street, Tokyo</span>
              </span>
            </li>
            <li>
              <span className="flex flex-col">
                <span className="font-bold">Beijing</span>
                <span>456 Forbidden City, Beijing</span>
              </span>
            </li>
            <li>
              <span className="flex flex-col">
                <span className="font-bold">Bangkok</span>
                <span>789 Sukhumvit Road, Bangkok</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
