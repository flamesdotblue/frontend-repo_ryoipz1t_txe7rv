import { Rocket, Star } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full max-w-6xl mx-auto px-4 pt-10 pb-6">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 flex items-center gap-3">
            <Rocket className="h-8 w-8 text-blue-600" />
            Full‑Stack Learning Hub
          </h1>
          <p className="mt-3 text-gray-600 text-base sm:text-lg max-w-2xl">
            Add YouTube references, learn step‑by‑step, and build projects after each milestone. Don’t rush—every expert was once a beginner. Happy learning!
          </p>
        </div>
        <Star className="hidden sm:block h-10 w-10 text-yellow-500" />
      </div>
    </header>
  );
}
