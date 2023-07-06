export const Category = ({ s }) => {
  return (
    <div className={s.category}>
      <h2 className={s.categoryTitle}>Каталог</h2>
      <div className={s.categoryList}>
        <div>
          <h3 className={s.categorySubtitle}>Женщины</h3>
          <ul className={s.categorySublist}>
            <li>
              <a href="">Бюстгальтеры</a>
            </li>
            <li>
              <a href="">Трусы</a>
            </li>
            <li>
              <a href="">Носки</a>
            </li>
            <li>
              <a href="">Халаты</a>
            </li>
            <li>
              <a href="">Термобелье</a>
            </li>
            <li>
              <a href="">Пижамы</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className={s.categorySubtitle}>Мужчины</h3>
          <ul className={s.categorySublist}>
            <li>
              <a href="">Трусы</a>
            </li>
            <li>
              <a href="">Носки</a>
            </li>
            <li>
              <a href="">Халаты</a>
            </li>
            <li>
              <a href="">Термобелье</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
