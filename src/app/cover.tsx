"use client";

export default function Cover() {
  return (
    <section className="relative  w-full overflow-hidden bg-black">
      <div className="relative w-full">
        <img
          src="/cover_yono.jpg"
          alt="Cover"
          className="w-full h-auto object-contain"
        />
        <div className="absolute inset-0 bg-black/50 dark:bg-black/60" />

        <div className="absolute top-[50%] inset-x-0 z-10 px-4">
          <div className="max-w-6xl mx-auto text-center text-white -translate-y-1/2">
            <img
              src="/logo_transparent.png"
              alt="Logo"
              className="w-32 md:w-80 xl:w-120 mb-3 mx-auto"
            />
            <h1 className="sm:text-xl md:text-2xl xl:text-4xl font-bold drop-shadow">
              Die Strassenmusik Kleinformation aus Zürich
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
