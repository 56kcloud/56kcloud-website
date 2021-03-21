export default function Hero() {
  return (
    <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-10 lg:overflow-hidden">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="pt-32 pb-8 lg:pt-48">
          <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6">
            <span className="block">
              We build <span className="underline">applications</span>
            </span>
            <span className="block text-blue-400 ">for the cloud.</span>
          </h1>
          <p className="mt-3 text-base text-gray-100 sm:mt-5 sm:text-2xl lg:text-2xl">
            We're a team of passionate enginners ready to develop your next{" "}
            <span className="underline">web, mobile or desktop</span>{" "}
            applications.
          </p>
        </div>
      </div>
    </div>
  );
}
