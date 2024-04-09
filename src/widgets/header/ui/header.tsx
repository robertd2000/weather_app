import { Link } from "react-router-dom";
import { Search } from "../../../features/search";
import style from "./header.module.scss";

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <Link to="/weather_app" className={style.title}>
          <h2>Прогноз погоды</h2>
        </Link>
        <Search />
      </div>
    </header>
  );
};
