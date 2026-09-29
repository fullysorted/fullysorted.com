/**
 * A small generic coupe as a solid silhouette, with a letter riding on the
 * roof. Not any real car on purpose. `driving` rolls it in and bobs it.
 */
export function CarDoodle({ driving = false, dark = false, className = "" }: { driving?: boolean; dark?: boolean; className?: string }) {
  const body = dark ? "#F5EFE6" : "#12352A";
  const glass = dark ? "#12352A" : "#FFFFFF";
  return (
    <svg
      viewBox="0 0 124 64"
      className={`${className} ${driving ? "fs-nl-drive" : ""}`}
      aria-hidden="true"
      focusable="false"
    >
      {/* letter */}
      <g className={driving ? "fs-nl-letter" : ""}>
        <rect x="50" y="2" width="24" height="16" rx="2.5" fill="#F2B27A" />
        <path d="M50.8 3.5 L62 11.5 L73.2 3.5" fill="none" stroke="#12352A" strokeWidth="1.6" strokeLinejoin="round" />
      </g>
      {/* body */}
      <path
        d="M6 46 C6 39 10 36.5 19 35.5 L33 33.5 C40 24.5 50 21 62 21 C74 21 83 25 91 33.5 L106 35.5 C114 36.5 118 40 118 46 L118 49 L6 49 Z"
        fill={body}
      />
      <path d="M39 33.5 C45 27 52 24.2 60.5 24.2 L60.5 33.5 Z" fill={glass} opacity="0.9" />
      <path d="M64.5 24.2 C73 24.2 79.5 27 85 33.5 L64.5 33.5 Z" fill={glass} opacity="0.9" />
      <rect x="110" y="40" width="6" height="3" rx="1.5" fill="#F2B27A" />
      {/* wheels */}
      <g className={driving ? "fs-nl-wheel" : ""} style={{ transformOrigin: "30px 49px" }}>
        <circle cx="30" cy="49" r="9" fill={body} stroke={glass} strokeWidth="2.5" />
        <circle cx="30" cy="49" r="3" fill="#1C8C87" />
      </g>
      <g className={driving ? "fs-nl-wheel" : ""} style={{ transformOrigin: "94px 49px" }}>
        <circle cx="94" cy="49" r="9" fill={body} stroke={glass} strokeWidth="2.5" />
        <circle cx="94" cy="49" r="3" fill="#1C8C87" />
      </g>
    </svg>
  );
}
