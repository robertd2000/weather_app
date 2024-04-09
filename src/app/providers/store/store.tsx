import { FC } from "react";
import { Provider } from "react-redux";
import store from "../../store";
import { IProviders } from "../types";

export const StoreProvider: FC<IProviders> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
