import { FC } from "react";
import FilterTag from "../FilterTag";
import { getCategories } from "@/../sanity/lib/queries/product";

interface FiltersProps {}

const Filters: FC<FiltersProps> = async ({}) => {
  const productCategories = await getCategories();
  if (!productCategories) return null;

  const renderCategoryFilters = () => {
    return productCategories.map((category) => {
      return (
        <li key={category}>
          <FilterTag category={category} />
        </li>
      );
    });
  };

  return <ul className="row-start-2 w-full">{renderCategoryFilters()}</ul>;
};

export default Filters;
