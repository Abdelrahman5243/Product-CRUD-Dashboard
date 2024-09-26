import React from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const Pagination = ({
  totalPages,
  currentPage,
  setCurrentPage,
  handlePageChange,
}) => {
  return (
    <div aria-label="navigation Pagination">
      <ul className="py-8 flex items-center justify-center -space-x-px h-8 text-sm">
        <li>
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ${
              currentPage === 1 && "cursor-not-allowed"
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
                className={`flex items-center justify-center px-3 h-8 leading-tight ${
                  currentPage === page
                    ? "text-blue-500 font-bold bg-gray-200"
                    : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                }`}
              >
                {page}
              </button>
            </li>
          )
        )}
        <li>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ${
              currentPage === totalPages && "cursor-not-allowed"
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
