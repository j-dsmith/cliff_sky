import { FC } from "react";

type QuantityIncrementorProps = {
  handleQuantityChange: (id: string, updatedValue: string) => void;
  id: string;
  quantity: number;
};

const QuantityIncrementor: FC<QuantityIncrementorProps> = ({
  id,
  quantity,
  handleQuantityChange,
}) => {
  return (
    <div className="group relative flex h-10 w-14  items-center justify-center rounded-md border bg-stone-100 py-2">
      <select
        name="quantity-selector"
        id="quantity-selector"
        value={quantity}
        className="h-10 w-14 appearance-none bg-transparent px-4 font-medium"
        onChange={(e) => handleQuantityChange(id, e.target.value)}
      >
        <option disabled value="">
          Select...
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <span className="pointer-events-none absolute right-[18%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-3.5 w-3.5 group-hover:animate-pulse"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </span>
    </div>
  );
};

export default QuantityIncrementor;
