import React from "react";

export const InputField = ({
  id,
  label,
  value,
  onChange,
  type = "text",
  required,
}) => (
  <div className="sm:col-span-2">
    <label
      htmlFor={id}
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      {label}
    </label>
    <input
      type={type}
      name={id}
      id={id}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
      value={value}
      onChange={onChange}
      placeholder={`Type ${label.toLowerCase()}`}
      required={required}
    />
  </div>
);

export const SelectField = ({ id, label, value, onChange, options }) => (
  <div>
    <label
      htmlFor={id}
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      {label}
    </label>
    <select
      id={id}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
      value={value}
      onChange={onChange}
      required
    >
      {options.map((option,index) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export const TextAreaField = ({ id, label, value, onChange, required }) => (
  <div className="sm:col-span-2">
    <label
      htmlFor={id}
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      {label}
    </label>
    <textarea
      id={id}
      rows="8"
      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
      placeholder={`Write a ${label.toLowerCase()} here...`}
      value={value}
      onChange={onChange}
      required={required}
    ></textarea>
  </div>
);
