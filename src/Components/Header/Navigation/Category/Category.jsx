import { NavLink, useLocation } from "react-router-dom";
import cn from "classnames";
import s from "./Category.module.scss";

export const Category = ({ list }) => {
  const location = useLocation();
  const isWomenLink = location.pathname.includes("women");

  return (
    <ul className={s.category}>
      {isWomenLink
        ? list
            .find((item) => item.link === "women")
            .categoryes.map((category) => (
              <li key={category.link}>
                <NavLink
                  className={({ isActive }) =>
                    cn(s.link, isActive && s.linkActive)
                  }
                  to={`/women/${category.link}`}
                >
                  {category.title}
                </NavLink>
              </li>
            ))
        : list
            .find((item) => item.link === "men")
            .categoryes.map((category) => (
              <li key={category.link}>
                <NavLink
                  className={({ isActive }) =>
                    cn(s.link, isActive && s.linkActive)
                  }
                  to={`/men/${category.link}`}
                >
                  {category.title}
                </NavLink>
              </li>
            ))}
    </ul>
  );
};
