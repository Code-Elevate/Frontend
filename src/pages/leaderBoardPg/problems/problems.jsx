import React, { useState, useMemo } from "react";
import leaderboardData from "../../../leaderboardData.json";
import "./problems.css";
import Problem from "./Problem"; // Update import to point to Problem.jsx
import Pagination from "./pagination";

const Problems = () => {
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return leaderboardData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, pageSize]);

  function handlePageSizeChange(event) {
    const newPageSize = parseInt(event.target.value);
    const newPageCount = Math.ceil(leaderboardData.length / newPageSize);
    const newCurrentPage = Math.min(currentPage, newPageCount);
    setPageSize(newPageSize);
    setCurrentPage(newCurrentPage);
  }

  return (
    <div id="problems">
      <div className="problems-header">
        <div className="title">
          <p>Username</p>
        </div>
        <div className="acceptance">
          <p>Score</p>
        </div>
      </div>

      {currentTableData.map((problem, index) => {
        const isEven = index % 2 === 0;
        const bgClass = isEven ? "even" : "odd";
        return <Problem problem={problem} key={problem.id} bgClass={bgClass} />;
      })}

      <div className="pagination-box">
        <div className="pagination-limit">
          <select
            name="pageSize"
            id="pageSize"
            value={pageSize}
            onChange={handlePageSizeChange}
          >
            <option value={5}>5 / page</option>
            <option defaultValue value={10}>
              10 / page
            </option>
            <option value={20}>20 / page</option>
          </select>
        </div>
        <div className="pagination-buttons">
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={leaderboardData.length}
            pageSize={pageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </div>
  );
};

export default Problems;
