import React from "react";

const InfoBox = ({ title, value, icon, color }) => {
  return (
    <div className="info-box flex items-center gap-4 px-6 py-8 bg-white rounded-lg shadow-md shadow-gray-200">
      <div
        className={`info-box-icon flex-shrink-0 w-16 h-16 rounded-full flex justify-center items-center ${color} p-4`}
      >
        {icon}
      </div>
      <div className="info-box-content">
        <h4 className="text-md md:text-lg lg:text-2xl font-medium text-gray-800">{title}</h4>
        <p className="mt-1 text-sm text-gray-500">{value}</p>
      </div>
    </div>
  );
};

export default InfoBox;
