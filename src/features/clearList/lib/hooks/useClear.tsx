import { useAppDispatch } from "../../../../shared/lib/store/redux";
import { clearList } from "../../../search/model/searchSlice";

export const useClear = () => {
  const dispatch = useAppDispatch();

  const handleClear = () => {
    dispatch(clearList());
  };

  return { handleClear };
};
