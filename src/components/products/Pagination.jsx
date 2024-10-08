import React from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const Pagination = ({
  totalPages,
  currentPage,
  setCurrentPage,
  handlePageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex justify-center items-center py-6">
      <ul className="flex items-center space-x-1 text-sm">
        <li>
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`flex items-center px-4 py-2 mx-1 text-gray-500 bg-white rounded-md dark:bg-gray-800 dark:text-gray-600 ${
              currentPage === 1 ? "cursor-not-allowed opacity-50" : "hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500"
            }`}
          >
            <ChevronLeft /> Previous
          </button>
        </li>

        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <li key={page}>
              <button
                onClick={() => handlePageChange(page)}
                className={`hidden sm:flex items-center px-4 py-2 mx-1 transition-colors duration-300 transform rounded-md ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-blue-600 hover:text-white"
                }`}
              >
                {page}
              </button>
            </li>
          )
        )}

        <li>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`flex items-center px-4 py-2 mx-1 text-gray-500 bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 ${
              currentPage === totalPages ? "cursor-not-allowed opacity-50" : "hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500"
            }`}
          >
            Next <ChevronRight />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
