import React from "react";

const InfoBox = ({ title, value, progress, icon, color }) => {
  return (
    <div className="info-box flex flex-col justify-between gap-4 p-6 py-8 bg-white rounded-lg shadow transition-transform transform hover:scale-105 hover:shadow-lg">
      <div className="flex items-center gap-4">
        <div
          className={`info-box-icon flex-shrink-0 w-16 h-16 rounded-full flex justify-center items-center ${color} bg-opacity-15 p-4`}
        >
          {icon}
        </div>
        <div className="info-box-content">
          <h4 className="text-lg font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-600">
            {title}
          </h4>
          {value && (
            <p className="mt-1 text-2xl font-bold text-gray-800">{value}</p>
          )}
        </div>
      </div>
      {progress && (
        <div className="w-full">
          <span className="block mt-2 text-sm font-medium text-blue-700 dark:text-white">
            {progress}
          </span>
          <div className="w-full bg-gray-300 rounded-full h-2.5 mt-1 dark:bg-gray-700">
            <div
              className={`${color} h-2.5 rounded-full transition-all duration-300`}
              style={{ width: progress }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoBox;
