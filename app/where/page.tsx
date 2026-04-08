import Counter from "@/components/counter";
import Nav from "@/components/nav";

const past = [
  {
    name: "Chris Jaycox Productions",
    role: "Nanaimo Nightowls Switcher and Editor",
    start: new Date("May 1 2025"),
    end: "Current",
    stats: [
      { pre: null, number: 4.2, post: "x", text: "avg ROAS delivered" },
      { pre: null, number: 12, post: null, text: "clients managed at once" },
      { pre: null, number: 100, post: "%", text: "increase in visibility" },
    ],
  },
  {
    name: "Pacific Coast Stage Company",
    role: "Marketing Coordinator",
    start: new Date("June 1 2024"),
    end: new Date("August 1 2024"),
    stats: [
      { pre: null, number: 4.2, post: "x", text: "avg ROAS delivered" },
      { pre: null, number: 12, post: null, text: "clients managed at once" },
      { pre: null, number: 100, post: "%", text: "increase in visibility" },
    ],
  },
  {
    name: "The Nanaimo Museam",
    role: "Marketing and Social Media Assistant",
    start: new Date("May 1 2023"),
    end: new Date("Feb 1 2024"),
    stats: [{ pre: "$", number: 100, post: "k", text: "ad spend" }],
  },
];

export default function Where() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen flex-1 font-sans">
      <main className="w-full flex flex-row items-center justify-center space-x-16">
        {past.map((job) => (
          // TODO(@punctuations): add border-fade-all
          <section key={job.name} className="border-fade border-fade-all">
            <header className="flex flex-row items-center justify-center space-x-16 pb-4">
              <div>
                <h3 className="font-pixel text-4xl pb-1">{job.name}</h3>
                <p className="text-lg text-stone-600">{job.role}</p>
              </div>
              <div className="border-fade border-fade-all font-mono text-lg">
                {typeof job.end == "string"
                  ? "Current"
                  : `${job.start.getFullYear()} - ${job.end.getFullYear()}`}
              </div>
            </header>
            <div className="flex flex-row items-center justify-center space-x-4 border-fade border-fade-y h-16">
              {job.stats?.map((s, i) => (
                <div
                  key={s.text}
                  className={`flex flex-col items-center justify-center h-full ${i == 0 ? "border-fade border-fade-x px-4" : i + 1 == job.stats.length ? "border-fade border-fade-x px-4" : ""}`}
                >
                  <p className="text-5xl font-pixel">
                    {s.pre}
                    <Counter value={s.number} />
                    {s.post}
                  </p>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
