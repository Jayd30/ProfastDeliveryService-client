import React, { useState } from 'react';

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';


// COMPONENT TO MOVE MAP
const FlyToDistrict = ({ position }) => {

  const map = useMap();

  if (position) {

    map.flyTo(position, 10, {
      duration: 2,
    });

  }

  return null;
};


const Coverage = () => {

  const [search, setSearch] = useState('');

  const [selectedPosition, setSelectedPosition] = useState(null);


  // Locations
  const locations = [
    {
      id: 1,
      name: 'Mumbai',
      position: [19.0760, 72.8777],
    },

    {
      id: 2,
      name: 'Delhi',
      position: [28.7041, 77.1025],
    },

    {
      id: 3,
      name: 'Kolkata',
      position: [22.5726, 88.3639],
    },

    {
      id: 4,
      name: 'Bangalore',
      position: [12.9716, 77.5946],
    },

    {
      id: 5,
      name: 'Chennai',
      position: [13.0827, 80.2707],
    },

    {
      id: 6,
      name: 'Hyderabad',
      position: [17.3850, 78.4867],
    },
  ];


  // SEARCH FUNCTION
  const handleSearch = () => {

    const searchText = search.trim().toLowerCase();

    const foundLocation = locations.find((location) =>
      location.name
        .trim()
        .toLowerCase()
        .includes(searchText)
    );

    if (foundLocation) {

      setSelectedPosition(foundLocation.position);

    } else {

      alert('District not found');

    }
  };


  return (
    <section className="min-h-screen bg-slate-100 py-16 px-4 md:px-10 lg:px-20">

      {/* Heading */}
      <div className="text-center mb-12">

        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-5">
          We are Currently available in 6 Citys
        </h1>

        <p className="text-gray-600 max-w-3xl mx-auto leading-8 text-lg">
          Search your district and explore ProFast delivery coverage across India.
        </p>

      </div>


      {/* Search Box */}
      <div className="max-w-3xl mx-auto mb-10 flex gap-4">

        <input
          type="text"
          placeholder="Search district..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered flex-1 h-14 rounded-2xl shadow-md text-lg"
        />

        <button
          onClick={handleSearch}
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 rounded-2xl font-semibold transition-all duration-300"
        >
          Search
        </button>

      </div>


      {/* Map */}
      <div className="w-full h-[800px] rounded-[32px] overflow-hidden shadow-2xl border border-gray-300">

        <MapContainer
          center={[22.9734, 78.6569]}
          zoom={6}
          scrollWheelZoom={true}
          style={{
            height: '100%',
            width: '100%',
          }}
        >

          {/* MAP LAYER */}
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* MOVE MAP */}
          <FlyToDistrict position={selectedPosition} />

          {/* MARKERS */}
          {locations.map((location) => (
            <Marker
              key={location.id}
              position={location.position}
            >

              <Popup>
                <div className="text-center">

                  <h2 className="font-bold text-lg">
                    {location.name}
                  </h2>

                  <p>
                    ProFast Delivery Available
                  </p>

                </div>
              </Popup>

            </Marker>
          ))}

        </MapContainer>

      </div>

    </section>
  );
};

export default Coverage;