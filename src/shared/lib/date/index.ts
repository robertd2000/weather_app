import { DAYS, MONTHS } from "../../constants";

export const getCurrentDate = () => {
  const currentDate = new Date();
  const date = `${DAYS[currentDate.getDay()]} ${currentDate.getDate()} ${
    MONTHS[currentDate.getMonth()]
  }`;

  return date;
};

export const getTime = (timestamp: number) => {
  return new Date(timestamp * 1000).toLocaleTimeString().slice(0, 5);
};
