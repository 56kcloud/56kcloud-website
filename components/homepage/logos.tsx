export default function Logos() {
  return (
    <div className="bg-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-4">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img className="h-12" src="/images/logos/python.svg" alt="Python" />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img className="h-12" src="/images/logos/aws.svg" alt="AWS" />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img
              className="h-12"
              src="/images/logos/tensorflow.svg"
              alt="TensorFlow"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
            <img className="h-12" src="/images/logos/qt.svg" alt="Qt" />
          </div>
        </div>
      </div>
    </div>
  );
}
