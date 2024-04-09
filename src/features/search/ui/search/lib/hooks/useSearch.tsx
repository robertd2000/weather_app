import { useState } from "react";
import { useAppDispatch } from "../../../../../../shared/lib/store/redux";
import { fetchSearch } from "../../../../model/searchThunk";

export const useSearch = () => {
  const [search, setSearch] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const dispatch = useAppDispatch();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(fetchSearch({ query: search }));
    setSearch("");
  };

  return {
    search,
    handleChange,
    handleSearch,
  };
};
