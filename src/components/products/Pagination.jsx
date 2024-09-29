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
    <div
      aria-label="Pagination Navigation"
      className="flex justify-between items-center py-6"
    >
      <span className="text-gray-700 font-medium text-sm md:text-base">
        Page <span className="font-bold text-blue-600">{currentPage}</span> of{" "}
        <span className="font-bold">{totalPages}</span>
      </span>

      <ul className="flex items-center space-x-1 text-sm">
        <li>
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 ${
              currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
            }`}
          >
            <ChevronLeft />
          </button>
        </li>

        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <li key={page}>
              <button
                onClick={() => handlePageChange(page)}
                className={`flex items-center justify-center px-3 h-8 leading-tight border ${
                  currentPage === page
                    ? "text-blue-600 font-bold bg-gray-100 border-blue-300"
                    : "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
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
            className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 ${
              currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""
            }`}
          >
            <ChevronRight />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
