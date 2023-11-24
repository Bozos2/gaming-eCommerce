import * as React from "react";
import { SVGProps } from "react";
const RatingStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -0.02 60.031 60.031"
    width={24}
    height={24}
    {...props}
  >
    <path
      d="m939.975 219.607 5.32 10.771a9.12 9.12 0 0 0 2.647 3.216 9.226 9.226 0 0 0 3.713 1.675l8.235 1.667-6.122 4.647a9.01 9.01 0 0 0-3.454 8.781l1.976 10.994-7.839-4.409a9.151 9.151 0 0 0-8.958 0l-7.833 4.405 1.974-10.984a9 9 0 0 0-3.43-8.776l-6.142-4.662 8.227-1.666a9.074 9.074 0 0 0 6.356-4.874l5.33-10.789m0-9.606a3.1 3.1 0 0 0-2.792 1.716l-7.914 16.018a3.02 3.02 0 0 1-.885 1.074 3.129 3.129 0 0 1-1.28.577l-14.654 2.967a3.069 3.069 0 0 0-2.391 2.285 3 3 0 0 0 1.117 3.085l11.4 8.657a3 3 0 0 1 .993 1.3 2.929 2.929 0 0 1 .16 1.618l-3.076 17.135a3 3 0 0 0 1.274 3.011 3.13 3.13 0 0 0 1.777.551 3.164 3.164 0 0 0 1.55-.4l13.174-7.409a3.156 3.156 0 0 1 3.09 0L954.7 269.6a3.161 3.161 0 0 0 3.326-.147 3 3 0 0 0 1.275-3.011l-3.083-17.142a2.948 2.948 0 0 1 .162-1.618 3 3 0 0 1 .993-1.3l11.4-8.657a3 3 0 0 0 1.117-3.085 3.07 3.07 0 0 0-2.393-2.285l-14.656-2.967a3.162 3.162 0 0 1-1.281-.577 3.028 3.028 0 0 1-.884-1.074l-7.91-16.018a3.108 3.108 0 0 0-2.791-1.719Z"
      data-name="no rating"
      style={{
        fill: "#fff",
        fillRule: "evenodd",
      }}
      transform="translate(-909.969 -210)"
    />
  </svg>
);
export default RatingStar;
