import Image from "next/image";
import Link from "next/link";

export default function Nav(props: { className?: string }) {
  return (
    <nav
      className={`sticky flex flex-row items-center justify-around h-16 w-full backdrop-blur-md border-stone-500 border-b-[0.1rem] ${props.className ?? ""}`}
    >
      <Image
        src="/bdwag.png"
        alt="Brayden Mii"
        className="w-16 h-16"
        width={64}
        height={64}
        priority
      />
      <div className="font-pixel tracking-wide flex flex-row items-center text-xl font-semibold h-full">
        <span className="h-full border-stone-500 border-l-[0.1rem]" />

        <Link
          href="/"
          className="h-full flex items-center hover:bg-stone-200 transition-colors duration-250"
        >
          <p className="px-32">About me</p>
        </Link>

        <span className="h-full border-stone-500 border-l-[0.1rem]" />

        <Link
          href="summary"
          className="h-full flex items-center hover:bg-stone-200 transition-colors duration-250"
        >
          <p className="px-32">What I've done</p>
        </Link>
        <span className="h-full border-stone-500 border-l-[0.1rem]" />

        <Link
          href="work"
          className="h-full flex items-center hover:bg-stone-200 transition-colors duration-250"
        >
          <p className="px-32">Where I've done it</p>
        </Link>
        <span className="h-full border-stone-500 border-l-[0.1rem]" />
      </div>
    </nav>
  );
}
