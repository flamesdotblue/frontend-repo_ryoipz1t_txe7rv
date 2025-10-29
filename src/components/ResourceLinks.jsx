import { ExternalLink, Play } from "lucide-react";

const LinkItem = ({ title, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noreferrer"
    className="group inline-flex items-center justify-between gap-3 rounded-lg border border-gray-200 px-4 py-3 hover:border-blue-300 hover:bg-blue-50/40 transition-colors"
  >
    <span className="inline-flex items-center gap-2 text-blue-700 font-medium">
      <Play className="h-4 w-4" /> {title}
    </span>
    <ExternalLink className="h-4 w-4 text-gray-500 group-hover:text-blue-700" />
  </a>
);

export default function ResourceLinks() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Full Courses (preferred)</h3>
          <div className="space-y-3">
            <LinkItem title="Complete Full-Stack Series" url="https://youtube.com/playlist?list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w&si=cNBTwG1v1p4_6-GZ" />
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Frontend (Client Side)</h3>
          <p className="text-sm text-gray-500 mb-4">HTML, CSS, JavaScript, React, Tailwind, Bootstrap</p>
          <div className="space-y-5">
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">HTML & CSS</p>
              <div className="grid gap-2">
                <LinkItem title="HTML & CSS Crash Course 1" url="https://youtu.be/G3e-cpL7ofc?si=FB3B8a10dzpxoFu4" />
                <LinkItem title="CSS Deep Dive" url="https://youtu.be/HGTJBPNC-Gw?si=rxS1Z_xK8bJQj6ur" />
                <LinkItem title="HTML Full Tutorial" url="https://youtu.be/HcOc7P5BMi4?si=R8VW_PZHxMfJg-JQ" />
                <LinkItem title="CSS Projects" url="https://youtu.be/ESnrn1kAD4E?si=kdt9RMTtLA5DBKh5" />
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">JavaScript</p>
              <div className="grid gap-2">
                <LinkItem title="JS Beginner to Pro" url="https://youtu.be/EerdGm-ehJQ?si=nDqY7yciIm6pjpFD" />
                <LinkItem title="Modern JavaScript" url="https://youtu.be/lfmg-EJ8gm4?si=zyjC0eDFRSHRDR8P" />
                <LinkItem title="Async JS" url="https://youtu.be/cpoXLj24BDY?si=lCB2T7HYcsqs-saI" />
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">React</p>
              <div className="grid gap-2">
                <LinkItem title="React from Scratch" url="https://youtu.be/TtPXvEcE11E?si=OzOR1XYJYOOyo3_T" />
                <LinkItem title="React Project Tutorial" url="https://youtu.be/CgkZ7MvWUAA?si=x8DCvFT8j86v-Zzh" />
                <LinkItem title="React Advanced Concepts" url="https://youtu.be/eILUmCJhl64?si=T9wvR4itIkfb7RRH" />
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">Tailwind CSS</p>
              <div className="grid gap-2">
                <LinkItem title="Tailwind Essentials" url="https://youtu.be/6biMWgD6_JY?si=tbVirGuQBf7j1iWY" />
                <LinkItem title="Tailwind Projects" url="https://youtu.be/-g969furGik?si=EnkD47x4MJVcYnPU" />
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">Bootstrap</p>
              <div className="grid gap-2">
                <LinkItem title="Bootstrap in One Video" url="https://youtu.be/-qfEOE4vtxE?si=f7yOEik8iJXZUGrv" />
                <LinkItem title="Bootstrap Projects" url="https://youtu.be/Jd4SKMugUQ8?si=1M_uRt4iV_s1tH-B" />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Backend & Database</h3>
          <p className="text-sm text-gray-500 mb-4">Choose one backend and pair it with a database</p>
          <div className="space-y-5">
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">Backend</p>
              <div className="grid gap-2">
                <LinkItem title="Node.js & Express.js" url="https://youtu.be/Oe421EPjeBE?si=0ASh8324ZixZ6SdJ" />
                <LinkItem title="Django (Python)" url="https://youtu.be/o0XbHvKxw7Y?si=FsSB5IcQ4x5as36n" />
                <LinkItem title="Spring Boot (Java)" url="https://youtu.be/-Fe0zk-F4OA?si=-fUJypWz7NDbMdws" />
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">Database</p>
              <div className="grid gap-2">
                <LinkItem title="MySQL (Crash Course)" url="https://youtu.be/5OdVJbNCSso?si=-ajbzESYlJVxXYvM" />
                <LinkItem title="SQL Deep Dive" url="https://youtu.be/hlGoQC332VM?si=gQ49jtY7gE-G9tie" />
                <LinkItem title="MongoDB for Beginners" url="https://youtu.be/c2M-rlkkT5o?si=v51xL0gHS2NBnoFQ" />
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">Optional but Powerful</p>
              <div className="grid gap-2">
                <LinkItem title="Git & GitHub" url="https://docs.github.com/en/get-started/start-your-journey" />
                <LinkItem title="REST APIs" url="https://restfulapi.net/" />
                <LinkItem title="Authentication (JWT)" url="https://jwt.io/" />
                <LinkItem title="Deployment (Render/Vercel/Netlify)" url="https://render.com/" />
                <LinkItem title="Docker Basics" url="https://docs.docker.com/get-started/" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
