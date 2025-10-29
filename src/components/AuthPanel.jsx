import { useEffect, useState } from "react";
import { User, LogIn, LogOut } from "lucide-react";

export default function AuthPanel() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("learninghub_user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const handleSignin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage("Please enter email and password.");
      return;
    }
    const display = name || email.split("@")[0];
    const fakeUser = { email, name: display, signedInAt: new Date().toISOString() };
    localStorage.setItem("learninghub_user", JSON.stringify(fakeUser));
    setUser(fakeUser);
    setMessage("Signed in successfully.");
    setEmail("");
    setPassword("");
    setName("");
  };

  const handleSignout = () => {
    localStorage.removeItem("learninghub_user");
    setUser(null);
    setMessage("Signed out.");
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4">
      <div className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
        {user ? (
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-blue-50">
                <User className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Welcome back</p>
                <p className="text-lg font-semibold text-gray-900">{user.name}</p>
              </div>
            </div>
            <button
              onClick={handleSignout}
              className="inline-flex items-center gap-2 rounded-md bg-red-500 px-4 py-2 text-white font-medium shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
            >
              <LogOut className="h-4 w-4" /> Sign out
            </button>
          </div>
        ) : (
          <form onSubmit={handleSignin} className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Name (optional)</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="md:col-span-1 flex items-end">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white font-medium shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <LogIn className="h-4 w-4" /> Sign in
              </button>
            </div>
          </form>
        )}
        {message && <p className="mt-3 text-sm text-gray-600">{message}</p>}
      </div>
    </section>
  );
}
