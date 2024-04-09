import { useSearch } from "./lib/hooks/useSearch";
import style from "./search.module.scss";

export const Search = () => {
  const { search, handleChange, handleSearch } = useSearch();

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
    </section>
  );
};
