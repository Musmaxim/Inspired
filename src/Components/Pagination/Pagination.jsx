import s from "./Pagintaion.module.scss";
import cn from "classnames";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { ReactComponent as LeftSVG } from "../../assets/left.svg";
import { ReactComponent as RightSVG } from "../../assets/right.svg";

import { useEffect, useState } from "react";

export const Pagination = () => {
  const pathName = useLocation().pathname;
  const [pagePagination, setPagePagination] = useState("");
  const { page, pages } = useSelector((state) => state.goods);

  useEffect(() => {
    setPagePagination(page);
  }, [setPagePagination, page]);

  const handlePageChange = (newPage) => {
    setPagePagination(newPage);
  };
  const handlePrevPage = () => {
    if (pagePagination > 1) {
      handlePageChange(pagePagination - 1);
    }
  };
  const handleNextPage = () => {
    if (pagePagination < pages) {
      handlePageChange(pagePagination + 1);
    }
  };

  const renderPaginationItems = () => {
    const paginationItems = [];
    let startPage =
      pagePagination === pages && pages >= 3
        ? pagePagination - 2
        : Math.max(1, pagePagination - 1);
    let endPage = Math.min(startPage + 2, pages);
    for (let i = startPage; i <= endPage; i++) {
      paginationItems.push(
        <li key={i} className={s.item}>
          <NavLink
            to={`${pathName}?page=${i}`}
            className={cn(s.link, i === pagePagination ?? s.linkActive)}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </NavLink>
        </li>
      );
    }
    return paginationItems;
  };

  return (
    pages > 1 && (
      <div className={s.pagination}>
        <button
          className={s.arrow}
          onClick={handlePrevPage}
          disabled={pagePagination <= 2}
        >
          <LeftSVG />
        </button>
        <ul className={s.list}>{renderPaginationItems()}</ul>
        <button
          className={s.arrow}
          onClick={handleNextPage}
          disabled={pagePagination >= pages - 1 || pages <= 3}
        >
          <RightSVG />
        </button>
      </div>
    )
  );
};
