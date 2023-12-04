import { FC } from "react";

type FilterTagProps = {
  category: string;
};

const FilterTag: FC<FilterTagProps> = ({ category }) => {
  return (
    <button className="rounded-3xl bg-black px-4 py-2 font-medium capitalize text-white 3xs:text-base md:text-xl">
      {category}
    </button>
  );
};

export default FilterTag;
