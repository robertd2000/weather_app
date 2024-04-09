import { FC } from "react";
import { useDeleteFromList } from "../lib/hooks/useDelete";
import style from "./deleteFromList.module.scss";
import { DeleteFromListProps } from "./deleteFromList.interface";
import icon from "../../../shared/assets/trash.png";

export const DeleteFromList: FC<DeleteFromListProps> = ({ id }) => {
  const { handleDelete } = useDeleteFromList();

  return (
    <div className={style.delete} onClick={() => handleDelete(id)}>
      <img src={icon} alt="Удалить город" />
    </div>
  );
};
