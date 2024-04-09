import { useClear } from "../lib/hooks/useClear";
import style from "./clearList.module.scss";

export const ClearList = () => {
  const { handleClear } = useClear();

  return (
    <button className={style.clear} onClick={handleClear}>
      Очистить список
    </button>
  );
};
