import { ExternalLink, BookOpen } from "lucide-react";

const topics = [
  {
    title: "Git & GitHub",
    focus: "Version Control & Collaboration",
    desc:
      "A complete tutorial covering basic commands to advanced concepts like rebase and squash.",
    url: "https://www.youtube.com/results?search_query=git+and+github+full+course",
  },
  {
    title: "REST APIs / GraphQL",
    focus: "API Design & Communication",
    desc:
      "A concise yet thorough video comparing REST and GraphQL, and teaching the fundamentals of GraphQL schema, queries, and mutations.",
    url: "https://www.youtube.com/results?search_query=rest+vs+graphql+tutorial",
  },
  {
    title: "Authentication",
    focus: "Security (JWT, OAuth, Sessions)",
    desc:
      "A deep dive into securing web apps, focusing on the modern methods of JWT, access tokens, and refresh tokens.",
    url: "https://www.youtube.com/results?search_query=jwt+authentication+full+course",
  },
  {
    title: "Deployment",
    focus: "CI/CD & Hosting (Vercel, Render, Netlify)",
    desc:
      "A tutorial that directly compares the deployment process across Render, Vercel, and Netlify for hosting a web app for free.",
    url: "https://www.youtube.com/results?search_query=deploy+to+vercel+render+netlify+comparison",
  },
  {
    title: "Docker (Optional)",
    focus: "Containerization & DevOps",
    desc:
      "A beginner-friendly full course that teaches Docker fundamentals, from images and containers to Docker Compose.",
    url: "https://www.youtube.com/results?search_query=docker+full+course+for+beginners",
  },
];

function TopicCard({ title, focus, desc, url }) {
  return (
    <div className="group relative rounded-2xl border border-gray-200 bg-white/80 backdrop-blur p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-3 inline-flex items-center gap-2 text-blue-700 font-semibold">
        <BookOpen className="h-4 w-4" />
        <span>{title}</span>
      </div>
      <p className="text-sm font-medium text-gray-900">{focus}</p>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
      <div className="mt-4">
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-white text-sm font-medium shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Watch on YouTube <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

export default function Topics() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-10">
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-gray-900">Core Topics</h3>
        <p className="text-gray-600">Your structured exploration beyond the basics.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((t) => (
          <TopicCard key={t.title} {...t} />
        ))}
      </div>
    </section>
  );
}
