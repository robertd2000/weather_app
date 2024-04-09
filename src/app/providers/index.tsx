import { FC } from "react";
import { IProviders } from "./types";
import { StoreProvider } from "./store/store";

export const Providers: FC<IProviders> = ({ children }) => {
  return <StoreProvider>{children}</StoreProvider>;
};
