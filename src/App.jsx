import Header from "./components/Header";
import Hero from "./components/Hero";
import Topics from "./components/Topics";
import Roadmap from "./components/Roadmap";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-emerald-50 text-gray-900">
      <Header />
      <Hero />
      <Topics />
      <Roadmap />
      <footer className="w-full max-w-6xl mx-auto px-4 py-10 text-center text-sm text-gray-600">
        Keep going. Build something small after every lesson. You’ve got this!
      </footer>
    </div>
  );
}

export default App;
