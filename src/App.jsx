import Header from "./components/Header";
import AuthPanel from "./components/AuthPanel";
import ResourceLinks from "./components/ResourceLinks";
import Roadmap from "./components/Roadmap";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-emerald-50">
      <Header />
      <AuthPanel />
      <ResourceLinks />
      <Roadmap />
      <footer className="w-full max-w-6xl mx-auto px-4 py-10 text-center text-sm text-gray-600">
        Keep going. Build something small after every lesson. You’ve got this!
      </footer>
    </div>
  );
}

export default App;
