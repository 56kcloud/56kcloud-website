export default function Feature({
  title,
  body,
  imageUrl,
  reverse = false,
  altBackground = false,
}) {
  return (
    <section
      className={`py-16 ${
        altBackground ? "bg-blue-800" : "bg-blue-900"
      } overflow-hidden lg:py-8`}
    >
      <div className="relative mx-auto px-4 max-w-xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="relative">
          <div className="lg:grid lg:gap-8 lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center">
            <div className={reverse ? "lg:col-start-1" : "lg:col-start-2"}>
              <h3 className="text-gray-50 text-2xl font-extrabold tracking-tight sm:text-3xl">
                {title}
              </h3>
              <p className="mt-3 text-gray-200 text-lg">{body}</p>
            </div>

            <div
              className={`mt-10 -mx-4 relative lg:mt-0 ${
                reverse ? "lg:col-start-2" : "lg:col-start-1"
              }`}
            >
              <img
                className="relative mx-auto"
                width="490"
                src={imageUrl}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
