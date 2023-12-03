import { FC } from "react";

type FilterTagProps = {
  category: string;
};

const FilterTag: FC<FilterTagProps> = ({ category }) => {
  return (
    <button className="rounded-3xl bg-black px-4 py-2 text-xl font-medium text-white 3xs:text-base">
      {category}
    </button>
  );
};

export default FilterTag;
