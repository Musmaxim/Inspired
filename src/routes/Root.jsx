import { Header } from "../Components/Header/Header";
import { Main } from "../Components/Layout/Main/Main";
import { Footer } from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";

const list = [
  { link: "women", title: "Женщины", categoryes: [
    {link:'bras', title: 'Бюстгалтеры'},
    {link:'panties', title: 'Трусы'},
    {link:'socks', title: 'Носки'},
    {link:'bathrobes', title: 'Халаты'},
    {link:'thermal', title: 'Термобелье'},
    {link:'pijamas', title: 'Пижамы'},
  ] },
  { link: "men", title: "Мужчины", categoryes: [
  {link:'panties', title: 'Трусы'},
  {link:'socks', title: 'Носки'},
  {link:'bathrobes', title: 'Халаты'},
  {link:'thermal', title: 'Термобелье'},
  ] },
];

export const Root = () => {
  return (
    <>
      <Header list={list}/>
      <Main> 
          <Outlet/>
      </Main>
      <Footer list={list}/>
    </>
  );
};