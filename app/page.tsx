"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Nav from "@/components/nav";
import { RoadSign } from "@/components/road-sign";
import { Skyscrapers } from "@/components/skyscrapers";

const Header = (props: { anchor: string; children: React.ReactNode }) => {
  return (
    <h3
      id={props.anchor}
      className="text-center text-2xl font-bold font-pixel pb-2 pt-12"
    >
      {props.children}
    </h3>
  );
};

const Pg = (props: { children: React.ReactNode }) => {
  return <p className="indent-8 font-roboto text-lg">{props.children}</p>;
};

export default function Home() {
  const sections: Record<string, string>[] = [
    { name: "Digital Marketing", distance: "113px", href: "#dm" },
    { name: "Video Production", distance: "366px", href: "#vp" },
    { name: "Social Media", distance: "517px", href: "#sm" },
    { name: "Content Creation", distance: "597px", href: "#cc" },
    { name: "Tomodachi Life", distance: "1050px", href: "#tl" },
  ];

  const [activeSection, setActiveSection] = useState(sections[0].name);
  const [ballTop, setBallTop] = useState(0);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const listItemRefs = useRef<(HTMLLIElement | null)[]>([]);

  // Update ball position whenever activeSection changes
  useEffect(() => {
    const index = sections.findIndex((s) => s.name === activeSection);
    const el = listItemRefs.current[index];
    if (el) {
      // Center ball on the list item's vertical midpoint
      setBallTop(el.offsetTop + el.offsetHeight / 2 - 6);
    }
  }, [activeSection]);

  // IntersectionObserver scrollspy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const sec = sections.find((s) => s.href === `#${id}`);
            if (sec) setActiveSection(sec.name);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    Object.values(sectionRefs.current).forEach(
      (el) => el && observer.observe(el)
    );

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="relative flex flex-col min-h-screen flex-1 font-sans">
        <Nav />
        <header className="flex flex-row min-h-[65vh] h-full px-32 w-full">
          <main className="border-x-[0.1rem] border-stone-600 w-full grid grid-cols-2 gap-32 place-items-end justify-items-center">
            <Image
              src="/hello.png"
              alt="Brayden Mii"
              className="w-86 h-86"
              width={128}
              height={128}
              priority
            />
            <RoadSign content={sections} />
          </main>
        </header>
        <main className="w-full border-t-[0.1rem] border-stone-600 flex flex-col items-center justify-center">
          <div className="border-x-[0.1rem] border-stone-600 w-11/12 grid grid-cols-3 place-content-center gap-4">
            <article className="grid col-span-2 place-self-center w-full text-left px-12 border-r-[0.1rem]">
              {sections.map((section) => (
                <section
                  key={section.name}
                  id={section.href.replace("#", "")}
                  ref={(el) => {
                    sectionRefs.current[section.name] = el;
                  }}
                  className="mb-20"
                >
                  <Header anchor={section.href.replace("#", "")}>
                    {section.name}
                  </Header>
                  <Pg>
                    {section.name === "Digital Marketing" &&
                      "With a passion for digital marketing and a deep understanding of how the internet can be used as a powerful tool, I utilize this knowledge in conjunction with my past experiences in other mediums of marketing to create marketing campaigns that effectively reach valuable audiences. From Google to Meta, I have the experience and the search engine optimization knowledge to turn any online marketing campaign into a huge success."}
                    {section.name !== "Digital Marketing" &&
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, adipisci. Debitis ipsa, eveniet, sint ipsam beatae, quibusdam tenetur ipsum dicta eaque mollitia sapiente enim assumenda expedita corporis excepturi atque nisi! Cumque quas ex similique architecto magnam fugiat, voluptatibus dignissimos a, dolore quisquam, aliquam amet illo exercitationem. Nisi aspernatur natus velit?"}
                  </Pg>
                </section>
              ))}
            </article>

            {/* Sidebar navigation */}
            <nav className="sticky top-20 h-[calc(100vh-5rem)] flex items-center w-48 px-4">
              <ol className="relative flex flex-col gap-6">
                <motion.div
                  className="font-pixel absolute left-[-20px] font-pixel text-sm leading-none -mt-0.5"
                  animate={{ top: ballTop }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {"=>"}
                </motion.div>
                {sections.map((section, i) => (
                  <li
                    key={section.name}
                    ref={(el) => {
                      listItemRefs.current[i] = el;
                    }}
                  >
                    <a
                      href={section.href}
                      className={`block transition-colors duration-200 ${
                        activeSection === section.name
                          ? "font-bold text-black"
                          : "text-stone-500 hover:text-black"
                      }`}
                    >
                      {section.name}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </main>
      </div>
    </>
  );
}
