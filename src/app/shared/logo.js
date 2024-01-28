import { lato } from "../fonts";

export default function Logo() {
  return (
    <span className={`${lato.className} flex flex-wrap items-center justify-center`}>
      <span className="flex">
        R<span className="rotate-45 flex ml-1 -mr-1 font-light">o</span>lling
      </span>
      <span className="flex">
        &nbsp;D<span className="rotate-45 flex ml-1 -mr-1 font-light">o</span>
        ugh
      </span>
    </span>
  );
}
