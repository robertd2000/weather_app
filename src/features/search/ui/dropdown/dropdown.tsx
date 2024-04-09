import { FC } from "react";
import { useAutocomplite } from "./lib/hooks/useAutocomplite";
import { useDropdown } from "./lib/hooks/useDropdown";
import { DropdownProps } from "./dropdown.interface";
import style from "./dropdown.module.scss";

export const Dropdown: FC<DropdownProps> = ({ search, handler }) => {
  const { isOpen } = useDropdown(search);
  const { autocomplite } = useAutocomplite(search);

  return (
    isOpen &&
    autocomplite.length > 0 && (
      <div className={style.dropdown}>
        <ul>
          {autocomplite.map((i) => (
            <li key={i} onClick={() => handler(i)}>
              {i}
            </li>
          ))}
        </ul>
      </div>
    )
  );
};
