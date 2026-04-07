import Link from "next/link";

export function RoadSign(props: {content: Record<string, string>[]}) {
    const destinations = props.content;

  return (
    <div className="relative flex flex-col items-center select-none">
      {/* Sign assembly with poles behind */}
      <div className="relative flex flex-col items-center">
        {/* Two metal poles - positioned behind signs */}
        <div
          className="absolute top-16 flex justify-between pointer-events-none z-10"
          style={{ width: "340px" }}
        >
          {/* Left pole */}
          <div
            className="relative w-5 rounded-sm overflow-hidden"
            style={{
              height: "380px",
              backgroundColor: "#B0B0B0",
            }}
          >
            {/* Metal texture */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 50 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='m1'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.4 1.5' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23m1)'/%3E%3C/svg%3E")`,
              }}
            />
          </div>

          {/* Right pole */}
          <div
            className="relative w-5 rounded-sm overflow-hidden"
            style={{
              height: "380px",
              backgroundColor: "#B0B0B0",
            }}
          >
            {/* Metal texture */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 50 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='m2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.4 1.5' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23m2)'/%3E%3C/svg%3E")`,
              }}
            />
          </div>
        </div>

        {/* Main green sign panel */}
        <div
          className="relative rounded-2xl px-10 py-7 min-w-[460px] z-10 overflow-hidden"
          style={{ backgroundColor: "#005C3E" }}
        >
          {/* inset border */}
          <div className="absolute inset-[2px] border-[3px] border-white pointer-events-none rounded-2xl" />

          {/* Metal texture overlay */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Subtle vertical streaks like real signs */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(0,0,0,0.3) 8px, rgba(0,0,0,0.3) 9px)`,
            }}
          />

          {/* Top row with highway shield and name */}
          <div className="relative flex items-center gap-5 mb-5">
            {/* Canadian-style Highway Shield */}
            <div className="relative">
              <svg width="52" height="58" viewBox="0 0 52 58">
                {/* Outer white shield */}
                <path
                  d="M6 6 L46 6 L46 30 Q46 44 26 52 Q6 44 6 30 Z"
                  fill="#ffffff"
                />

                {/* Inset border (slightly smaller path) */}
                <path
                  d="M8 8 L44 8 L44 30 Q44 42 26 49 Q8 42 8 30 Z"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                />

                {/* Route number */}
                <text
                  x="26"
                  y="32"
                  textAnchor="middle"
                  fontSize="18"
                  fontWeight="700"
                  fill="#000000"
                  fontFamily="Arial, sans-serif"
                >
                  1A
                </text>
              </svg>
            </div>

            {/* Stuart Hwy label */}
            <div
              className="relative px-5 py-2 rounded overflow-hidden"
              style={{ backgroundColor: "#F0F0F0" }}
            >
              {/* Texture on white label */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='labelNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23labelNoise)'/%3E%3C/svg%3E")`,
                }}
              />
              <span
                className="relative font-black text-lg tracking-wide"
                style={{
                  color: "#005C3E",
                  fontFamily: "Arial Black, sans-serif",
                }}
              >
                BRAYDEN PATRICK
              </span>
            </div>
          </div>

          {/* Destinations list */}
          <div className="relative space-y-0.5">
            {destinations.map((dest, index) => (
              <Link key={index} href={dest.href} className="flex justify-between items-baseline group hover:cursor-pointer ">
                <span
                  className="text-[26px] font-semibold tracking-wide group-hover:underline group-hover:text-gray-300 transition-colors duration-200"
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "Arial, sans-serif",
                    textShadow: "0 1px 2px rgba(0,0,0,0.15)",
                  }}
                >
                  {dest.name}
                </span>
                <span
                  className="text-[26px] font-semibold tabular-nums ml-16"
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "Arial, sans-serif",
                    textShadow: "0 1px 2px rgba(0,0,0,0.15)",
                  }}
                >
                  {dest.distance}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Blue rest area sign - directly below green sign */}
        <div
          className="relative rounded-lg px-8 py-4 min-w-[420px] z-10 overflow-hidden -mt-1"
          style={{
            backgroundColor: "#1B4A94",
          }}
        >
          {/* inset border */}
          <div className="absolute inset-[2px] rounded-md border-[3px] border-white pointer-events-none" />

          {/* Texture overlay */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='blueNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23blueNoise)'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative text-center">
            <div
              className="font-bold text-xs tracking-[0.2em] mb-1.5"
              style={{
                color: "#FFFFFF",
                fontFamily: "Arial, sans-serif",
              }}
            >
              BEST PLACE TO FIND ME
            </div>
            <Link href="https://www.linkedin.com/in/brayden-patrick-612a683a7/" target="_blank" className="flex justify-between items-baseline px-6 group hover:cursor-pointer">
              <span
                className="font-bold text-xl tracking-wide group-hover:underline group-hover:text-gray-300 transition-colors duration-200 text-white"
                style={{
                  fontFamily: "Arial, sans-serif",
                }}
              >
                @BRAYDEN PATRICK
              </span>
              <span
                className="font-bold text-xl self-center"
                style={{
                  color: "#FFFFFF",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="size-5 mt-0.5 group-hover:text-gray-300 transition-colors duration-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Soft shadow on ground */}
      <div
        className="mt-4 rounded-full z-0"
        style={{
          width: "450px",
          height: "12px",
          backgroundColor: "rgba(0,0,0,0.0)",
          filter: "blur(8px)",
        }}
      />
    </div>
  );
}
