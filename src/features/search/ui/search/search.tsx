import { Dropdown } from "../dropdown/dropdown";
import { useSearch } from "./lib/hooks/useSearch";
import style from "./search.module.scss";

export const Search = () => {
  const { search, error, handleChange, handleSearch, handleSetAndSearch } =
    useSearch();

  return (
    <section className={style.mainContent}>
      <div className={style.formContainer}>
        <form onSubmit={handleSearch}>
          <fieldset className={style.fieldInput}>
            <input
              value={search}
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

      <Dropdown search={search} handler={handleSetAndSearch} />

      <div className={style.error}>{error?.message || ""}</div>
    </section>
  );
};
