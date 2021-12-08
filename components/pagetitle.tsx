export default function PageTitle({ title, subtitle, alignment = "center" }) {
  return (
    <div className="px-4 py-4 bg-white sm:px-2 lg:px-6 lg:py-12">
      <div className="mx-auto px-4 py-4 max-w-7xl sm:px-6 lg:px-8">
        <div className={alignment === "center" ? "text-center" : ""}>
          <h2 className="text-gray-900 text-3xl font-extrabold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p
            className={`max-w-2xl ${
              alignment === "center" ? "mx-auto" : ""
            } mt-3 text-xl text-gray-500 sm:mt-4`}
          >
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
