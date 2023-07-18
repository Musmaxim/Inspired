import { useDispatch, useSelector } from "react-redux";
import { Goods } from "../Goods/Goods";
import { fetchCategory } from "../../features/goodsSlice";
import { useEffect } from "react";
import { usePageFromHooksParams } from "../../hooks/usePageFromHooksParams";

export const FavoritePage = () => {
  const dispatch = useDispatch();
const page = usePageFromHooksParams(dispatch);
  const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    if (favorites) {
      const param = { list: favorites };
      if (page) {param.page = page;}
      dispatch(fetchCategory(param));
    }
  }, [favorites, page, dispatch]);

  return <Goods title="Избранное" />;
};
