import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative border-t-[0.1rem] border-stone-600">
      {/* Rounded top cap in your current background color */}
      <div className="relative z-10 bg-stone-50 rounded-b-[5rem] mt-12">
        <div className="grid grid-cols-3 gap-12 mx-auto w-11/12 pb-8">
          {/* Logo / brand col */}
          <div className="flex flex-col gap-3">
            <span className="font-pixel text-xl font-bold inline-flex items-center gap-2">
              BRAYDEN PATRICK{" "}
              <Image
                src="/bdwag.png"
                alt="Brayden Mii"
                className="w-16 h-16"
                width={64}
                height={64}
                priority
              />
            </span>
            <p className="font-roboto text-sm text-stone-500">
              Digital marketing, video production & content creation.
            </p>
          </div>

          {/* Links col */}
          <div className="flex flex-col gap-2">
            <span className="font-pixel text-xs text-stone-400 mb-1 font-semibold">
              NAVIGATE
            </span>
            {[
              { label: "About Me", href: "/about" },
              { label: "What I've Done", href: "/work" },
              { label: "Where I've Done It", href: "/experience" },
              {
                label: "Get In Touch",
                href: "mailto:braydenpatrickmarketing@gmail.com",
              },
            ].map((link) => (
              <p key={link.label}>
                <a
                  key={link.label}
                  href={link.href}
                  className="font-roboto text-sm text-stone-500 hover:text-black transition-colors"
                >
                  {link.label}
                </a>
              </p>
            ))}
          </div>

          {/* Socials col */}
          <div className="flex flex-col gap-2">
            <span className="font-pixel text-xs text-stone-400 mb-1 font-semibold">
              SOCIALS
            </span>
            {[
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/brayden-patrick-612a683a7/",
              },
              {
                label: "YouTube",
                href: "https://youtube.com/@Braydeniskindadumb",
              },
              { label: "TikTok", href: "https://tiktok.com/@hairypoppins29" },
              { label: "Twitter / X", href: "https://x.com/braydenkp" },
            ].map((social) => (
              <p key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-roboto text-sm text-stone-500 hover:text-black transition-colors"
                >
                  {social.label}
                </a>
              </p>
            ))}
          </div>
        </div>

        <div className="w-full flex items-center justify-center pb-2">
          <p className="items-center text-center font-pixel text-xs text-stone-400 mb-1">
            <span className="font-roboto">&copy;</span> Brayden Patrick,{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>

      {/* Noisy dark band underneath */}
      <div
        className="absolute -bottom-24 left-0 w-full mt-3 min-h-64"
        style={{
          backgroundColor: "#0a0a0a",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.15'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
          height: "4rem",
        }}
      />
    </footer>
  );
}
