export default function Hero() {
  return (
    <div className="pt-10 sm:pt-16 lg:pb-10 lg:pt-8 lg:overflow-hidden">
      <div className="mx-auto px-4 max-w-6xl">
        <div className="pb-8 pt-32 lg:pt-48">
          <h1 className="mt-4 text-white text-5xl font-extrabold tracking-tight sm:mt-5 sm:text-6xl lg:mt-6">
            <span className="block">
              We build <span className="underline">applications</span>
            </span>
            <span className="block text-blue-400">for the cloud.</span>
          </h1>
          <p className="mt-3 text-gray-100 text-base sm:mt-5 sm:text-2xl lg:text-2xl">
            We're a team of passionate engineers ready to develop your next{" "}
            <span className="underline">web, mobile or desktop</span>{" "}
            applications.
          </p>
        </div>
      </div>
    </div>
  );
}
