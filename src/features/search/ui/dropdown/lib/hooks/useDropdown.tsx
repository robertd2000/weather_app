import { useEffect, useState } from "react";

export const useDropdown = (search: string) => {
  const [isOpen, setisOpen] = useState(false);

  useEffect(() => {
    if (search) {
      setisOpen(true);
    } else {
      setisOpen(false);
    }
  }, [search]);

  return {
    isOpen,
  };
};
