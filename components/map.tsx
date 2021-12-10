export default function Map() {
    return (
        <div className="lg:relative bg-blue-900 pb-4 w-screen m-auto">
            <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
                <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
                    <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                        <span className="block text-white xl:inline">Address</span>
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-lg text-gray-300 sm:text-xl md:mt-5 md:max-w-3xl">
                        Chemin Saint-Hubert 5, 1950 Sion, Switzerland
                    </p>
                </div>
            </div>
            <div className="relative w-max mx-auto h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full mb-16 pl-2">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.293906417517!2d7.3494251160328545!3d46.2244996791173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478ec8341ef88b01%3A0xb49b036cb8062646!2sEdeltech!5e0!3m2!1sen!2sch!4v1639121306188!5m2!1sen!2sch" width="600" height="450" allowFullScreen={true} loading="lazy"></iframe>
            </div>
        </div>    
    );
  }