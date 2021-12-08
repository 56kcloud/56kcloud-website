export default function Logos() {
  return (
    <div className="bg-gray-200">
      <div className="mx-auto px-4 py-12 max-w-7xl sm:px-6 lg:px-8">
        <div className="grid gap-8 grid-cols-2 md:grid-cols-6 lg:grid-cols-5">
          <div className="flex col-span-1 justify-center md:col-span-2 lg:col-span-1">
            <img
              className="h-16 sm:h-20"
              src="/images/logos/python.svg"
              alt="Python"
            />
          </div>
          <div className="flex col-span-1 justify-center md:col-span-2 lg:col-span-1">
            <img
              className="h-16 sm:h-20"
              src="/images/logos/aws.svg"
              alt="AWS"
            />
          </div>
          <div className="flex col-span-1 justify-center md:col-span-2 lg:col-span-1">
            <img
              className="h-16 sm:h-20"
              src="/images/logos/tensorflow.svg"
              alt="TensorFlow"
            />
          </div>
          <div className="flex col-span-1 justify-center md:col-span-3 lg:col-span-1">
            <img className="h-16 sm:h-20" src="/images/logos/qt.svg" alt="Qt" />
          </div>
          <div className="flex col-span-1 justify-center md:col-span-3 lg:col-span-1">
            <img
              className="h-16 sm:h-20"
              src="/images/logos/nextjs.svg"
              alt="Next.js"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
