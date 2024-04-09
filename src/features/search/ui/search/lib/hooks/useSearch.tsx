import { useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../shared/lib/store/redux";
import { fetchSearch } from "../../../../model/searchThunk";

export const useSearch = () => {
  const [search, setSearch] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.search);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (search.length) {
      dispatch(fetchSearch({ query: search }));
      setSearch("");
    }
  };

  return {
    search,
    error,
    handleChange,
    handleSearch,
  };
};
