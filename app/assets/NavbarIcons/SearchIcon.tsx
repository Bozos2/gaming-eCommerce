import * as React from "react";
import { SVGProps } from "react";
const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 -0.5 25 25"
    width={100}
    height={100}
    {...props}
  >
    <g
      stroke="#ffffff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      className="active:stroke-[#22c55e] active:stroke-2"
    >
      <path
        d="M5.5 11.146a6.144 6.144 0 1 1 12.288-.002 6.144 6.144 0 0 1-12.288.002Z"
        clipRule="evenodd"
      />
      <path d="m15.989 15.49 3.511 3.511" />
    </g>
  </svg>
);
export default SearchIcon;
