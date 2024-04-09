import { useEffect, useState } from "react";
import { getCities } from "../../../../../../shared/api/cityAutocomplite.api";

export const useAutocomplite = (search: string) => {
  const [autocomplite, setAutocomplite] = useState<string[]>([]);

  useEffect(() => {
    const callback = async () => {
      const data = await getCities(search);

      setAutocomplite(data.map((i) => i.name));
    };

    callback();
  }, [search]);

  return {
    autocomplite,
  };
};
