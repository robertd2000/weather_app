import { useAppSelector } from "../../../../shared/lib/store/redux";

export const useCityList = () => {
  const { cities } = useAppSelector((state) => state.search);

  return {
    cities,
  };
};
