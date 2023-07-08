const list = [
    {link:'bras', title: 'Бюстгалтеры'},
    {link:'panties', title: 'Трусы'},
    {link:'socks', title: 'Носки'},
    {link:'bathrobes', title: 'Халаты'},
    {link:'thermal', title: 'Термобелье'},
    {link:'pijamas', title: 'Пижамы'},
]

import { NavLink } from "react-router-dom"
import cn from 'classnames'
import s from './Category.module.scss'

export const Category = () => {
    return (
        <ul className={s.category}>
      {list.map((item) => (
        <li key={item.link}>
          <NavLink
            className={({ isActive }) => cn(s.link, isActive && s.linkActive)}
            to={item.link}
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
    )

}