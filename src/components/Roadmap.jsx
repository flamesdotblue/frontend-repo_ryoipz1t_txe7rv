import { CheckCircle, Circle } from "lucide-react";

const Step = ({ title, items }) => (
  <div className="rounded-xl border border-gray-200 p-5 bg-white/70">
    <h4 className="font-semibold text-gray-900 mb-3">{title}</h4>
    <ul className="space-y-2 text-sm text-gray-700">
      {items.map((it) => (
        <li key={it} className="flex items-start gap-2">
          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function Roadmap() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-10">
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-gray-900">Roadmap</h3>
        <p className="text-gray-600">Follow this order and build a small project after each section.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Step
          title="Frontend (Client Side)"
          items={[
            "HTML → Structure",
            "CSS → Styling",
            "JavaScript → Logic",
            "React → Components & State",
            "Tailwind CSS → Speed up UI",
            "Bootstrap → Quick components",
          ]}
        />
        <Step
          title="Backend (Server Side)"
          items={[
            "Choose one: Node.js + Express, Django, or Spring Boot",
            "Build REST APIs",
            "Connect to database",
            "Handle authentication",
          ]}
        />
        <Step
          title="Database"
          items={[
            "SQL: MySQL / PostgreSQL",
            "NoSQL: MongoDB",
            "Design schemas and relations",
            "Seed sample data",
          ]}
        />
        <Step
          title="Add‑ons"
          items={[
            "Git & GitHub",
            "Deployment (Render, Vercel, Netlify)",
            "JWT / OAuth",
            "Docker (optional)",
          ]}
        />
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-5 md:col-span-2 lg:col-span-1">
          <h4 className="font-semibold text-blue-900 mb-2">Tip</h4>
          <p className="text-sm text-blue-800">
            Pick one backend and master it fully before exploring others. Consistency beats speed.
          </p>
        </div>
      </div>
    </section>
  );
}
