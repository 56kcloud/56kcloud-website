import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";

function PositionMap()
{
    return(
        <GoogleMap defaultZoom={16} defaultCenter={{ lat: 46.224500, lng: 7.351620 }} >
            <Marker position={{ lat: 46.224500, lng: 7.351620}} />
        </GoogleMap>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(PositionMap));

export default function Map() {
    return (
        <div className="lg:relative bg-blue-900 pb-10">
            <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
                <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
                    <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                        <span className="block text-white xl:inline">Address</span>
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-lg text-gray-300 sm:text-xl md:mt-5 md:max-w-3xl">
                        Chemin Saint-Hubert 5, 1950 Sion
                    </p>
                </div>
            </div>
            <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full mb-4">
                <WrappedMap googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDldOPAyM3eJNmrrnuINF8_o1KAloNY1-E"} 
                    loadingElement={<div style={{height: "100%"}} />}
                    containerElement={<div style={{height: "100%"}} />}
                    mapElement={<div style={{height: "100%"}} />}
                />
            </div>
        </div>      
    );
  }
  