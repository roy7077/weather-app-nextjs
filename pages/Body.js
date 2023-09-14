import React from "react";

const Body = ({ data }) => {
  const country = data.location.country;
  const city = data.current.name;
  const temp = data.current.temp_f;
  const humidity = data.current.humidity;
  const wind = data.current.wind_mph;
  const gust = data.current.gust_mph;
  const visibility = data.current.vis_miles;
  const condition = data.current.condition.text;
  const icon=data.current.condition.icon;
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg ">
      <div className="flex justify-between mb-4">
        <div>
          <h2 className="text-xl font-semibold">{country}</h2>
          <p className="text-gray-600">{city}</p>
        </div>
        <div>
          <img src={icon} alt="Weather Icon" className="w-10 h-10" />
        </div>
      </div>
      <p className="text-3xl font-bold mb-2">{temp}°C</p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-600">Humidity</p>
          <p className="font-semibold">{humidity}%</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Wind</p>
          <p className="font-semibold">{wind} m/s</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Gust</p>
          <p className="font-semibold">{gust} m/s</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Visibility</p>
          <p className="font-semibold">{visibility} km</p>
        </div>
      </div>
      <p className="text-gray-600 mt-2">{condition}</p>
    </div>
  );
};

export default Body;
