import { useSelector } from "react-redux";
import s from "./Main.module.scss";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Main = ({ children }) => {
  const { status } = useSelector((state) => state.statusServer);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!status && location.pathname !== "/404") {
      navigate("/404");
    }
  }, [navigate, location, status]);
  return <div className={s.main}>{children}</div>;
};
