import cn from "classnames";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export const Category = ({ s }) => {
  const { genderList, categories } = useSelector((state) => state.navigation);

  return (
    <div className={s.category}>
      <h2 className={cn(s.title, s.categoryTitle)}>Каталог</h2>
      <ul className={s.categoryList}>
        {genderList.map((gender) => (
          <li key={gender} className={s.categoryItem}>
            <h3 className={s.categorySubtitle}>
              <NavLink to={gender} className={s.link}>
                {categories[gender].title}
              </NavLink>
            </h3>
            <ul className={s.categorySublist}>
              {categories[gender].list.map((category) => (
                <li key={category.slug}>
                  <NavLink to={`${gender}/${category.slug}`} className={s.link}>
                    {category.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
