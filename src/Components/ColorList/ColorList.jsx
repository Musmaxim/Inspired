import { useSelector } from "react-redux";
import s from "./ColorList.module.scss";
import { Color } from "./Color/Color";

export const ColorList = ({ colors }) => {
  const { colorList } = useSelector((store) => store.color);

  return (
    <ul className={s.colorList}>
      {colors.map((id, i) => {
        const color = colorList.find((c) => c.id === id);
        return <Color key={id} color={color?.code} check={!i} />;
      })}
    </ul>
  );
};
