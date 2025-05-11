import kute from "kute.js";
import { useRef, useEffect } from "react";

const VisualSVG = () => {
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const blob3Ref = useRef(null);

  useEffect(() => {
    if (blob1Ref.current && blob2Ref.current && blob3Ref.current) {
      const blob1Path = blob1Ref.current.querySelector("path").getAttribute("d");
      const blob2Path = blob2Ref.current.querySelector("path").getAttribute("d");
      const blob3Path = blob3Ref.current.querySelector("path").getAttribute("d");

      // Create the animation sequence
      kute
        .fromTo(
          blob1Ref.current.querySelector("path"),
          { path: blob1Path },
          { path: blob2Path },
          { duration: 6000, repeat: true, yoyo: true, onComplete: () => {
            // Once the transition to blob2 is complete, animate to blob3
            kute
              .fromTo(
                blob1Ref.current.querySelector("path"),
                { path: blob2Path },
                { path: blob3Path },
                { duration: 6000, repeat: true, yoyo: true }
              )
              .start();
          }}
        )
        .start();
    }
  }, [blob1Ref, blob2Ref, blob3Ref]);

  return (
    <svg
      id="visual"
      viewBox="0 0 900 600"
      width="900"
      height="600"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
    >
      <g
        transform="translate(433.94555691514 303.667631172804)"
        id="blob1"
        ref={blob1Ref}
      >
        <path
          d="M174.8 -230C208.1 -188.1 204 -117.4 198.4 -42.4C192.7 23.7 185.5 83.1 152.1 126.4C118.8 169.8 59.4 197 12 185C-35.4 173 -70.7 121.7 -102.2 78.3C-133.7 35  -161.4 -0.3 -168.3 -42.7C-175.3 -85.1 -161.5 -134.3 -130 -176.2C-98.5 -218 -49.3 -252.4 10.7 -263.1C70.7 -273.8 141.4 -260.9 174.8 -230"
          fill="#A8D5BA"
        ></path>
      </g>
      
      {/* Blob 2 is hidden */}
      <g
        transform="translate(462.1974650587489 339.40837148266684)"
        id="blob2"
        ref={blob2Ref}
        style={{ opacity: 0 }} // Make blob2 invisible
      >
        <path
          d="M143.5 -167.4C169.7 -117.4 163.4 -58.7 167 3.7C170.7 66 184.3 132 158.2 157C132 182 66 166 5.8 160.2C-54.4 154.5 -108.9 158.9 -146.6 133.9C-184.2 108.9 -205.1 54.4 -196.2 9C-187.2 -36.5 -148.4 -73.1 -110.7 -123.1C-73.1 -173.1 -36.5 -236.5 11.1 -247.6C58.7 -258.7 117.4 -217.4 143.5 -167.4"
          fill="#A8D5BA"
        ></path>
      </g>
      
      {/* Blob 3 is hidden */}
      <g
        transform="translate(483.1974650587489 389.40837148266684)"
        id="blob3"
        ref={blob3Ref}
        style={{ opacity: 0 }} // Make blob3 invisible
      >
        <path
          d="M167.5 -210C191.5 -171.2 189.6 -124.3 201.3 -85.8C213.1 -47.3 238.7 -4.2 205.1 24.7C171.5 53.6 79.1 58.5 15.3 36.8C-48.6 15.1 -106.7 -31.7 -147.4 -74.2C-188.1 -116.8 -211.4 -171.3 -192.8 -221.7C-174.2 -272.2 -113.7 -319.6 -64.1 -315.4C-14.5 -311.2 28.7 -256.3 70.5 -227.2C112.2 -198.1 161.5 -175 167.5 -210"
          fill="#A8D5BA"
        ></path>
      </g>
    </svg>
  );
};

export default VisualSVG;

