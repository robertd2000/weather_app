import { useState } from "react";
import { useAppDispatch } from "../../../../shared/lib/store/redux";
import { fetchSearch } from "../..";
import style from "./search.module.scss";

export const Search = () => {
  const [text, setText] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const dispatch = useAppDispatch();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(fetchSearch({ query: text }));
  };

  return (
    <section className={style.mainContent}>
      <div className={style.formContainer}>
        <form onSubmit={handleSearch}>
          <fieldset className={style.fieldInput}>
            <input
              value={text}
              onChange={handleChange}
              className={style.input}
              type="text"
              placeholder="Введите город"
            />
            <button type="submit" className={style.submit}>
              Поиск
            </button>
          </fieldset>
        </form>
      </div>
    </section>
  );
};
