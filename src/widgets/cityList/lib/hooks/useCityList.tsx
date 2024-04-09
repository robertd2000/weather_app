import { useAppSelector } from "../../../../shared/lib/store/redux";

export const useCityList = () => {
  const { cities, loading } = useAppSelector((state) => state.search);

  return {
    cities,
    loading,
  };
};
