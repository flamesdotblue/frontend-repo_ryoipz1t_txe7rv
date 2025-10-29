import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] rounded-b-3xl overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Soft gradient + vignette so text stays legible; doesn't block Spline interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/70" />

      <div className="relative z-10 flex h-full items-center">
        <div className="w-full max-w-6xl mx-auto px-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Build your full‑stack foundation
          </h1>
          <p className="mt-4 max-w-2xl text-gray-700 text-base sm:text-lg">
            A colorful 3D assembly line sets the tone — learn modern web from the ground up,
            one focused topic at a time.
          </p>
        </div>
      </div>
    </section>
  );
}
