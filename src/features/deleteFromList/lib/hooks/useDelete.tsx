import { useAppDispatch } from "../../../../shared/lib/store/redux";
import { deleteFromList } from "../../../search/model/searchSlice";

export const useDeleteFromList = () => {
  const dispatch = useAppDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteFromList(id));
  };
  return {
    handleDelete,
  };
};
