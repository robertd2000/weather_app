import style from "./loader.module.scss";

export const Loader = () => {
  return (
    <div className={style.loader}>
      <div className={style.one}></div>
      <div className={style.two}></div>
      <div className={style.three}></div>
      <div className={style.four}></div>
    </div>
  );
};
