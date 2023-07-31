import { useDispatch, useSelector } from "react-redux";
import s from "./SearchPage.module.scss";
import { useSearchParams } from "react-router-dom";
import { Goods } from "../Goods/Goods.jsx";
import { fetchAll } from "../../features/goodsSlice.js";
import { useEffect } from "react";

export const SearchPage = () => {
  const { goodsList } = useSelector((state) => state.goods);
  const dispatch = useDispatch();
  let [searchParams] = useSearchParams();
  useEffect(() => {
    const search = searchParams.get("q");
    const params = { search };
    dispatch(fetchAll(params));
  }, [searchParams, dispatch]);
  return goodsList.length ? (
    <Goods title="избранное" />
  ) : (
    <h3 className={s.empty}>
      Ничего не найдено по запросу {searchParams.get("q")}
    </h3>
  );
};
