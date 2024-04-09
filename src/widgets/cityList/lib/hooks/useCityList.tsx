import { useAppSelector } from "../../../../shared/lib/store/redux";

export const useCityList = () => {
  const { cities } = useAppSelector((state) => state.search);
  console.log("cities", cities);

  return {
    cities,
  };
};
