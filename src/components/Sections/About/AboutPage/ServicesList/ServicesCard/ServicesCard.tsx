import Spacer from "@/components/UI/Spacer/Spacer";

import { Service } from "../ServicesList";

type Props = {
  service: Service;
  order: number;
};
const ServicesCard = ({ service, order }: Props) => {
  return (
    <div className="flex-1 pt-8">
      <h5 className="pb-4 text-sm text-stone-400 lg:text-base">0{order}</h5>
      <h3 className="border-t border-stone-200 pt-6 text-xl lg:text-2xl">
        {service.title}
      </h3>
      <Spacer height="h-2" />
      <div className="text-stone-600">
        <p>{service.description}</p>
      </div>
    </div>
  );
};
export default ServicesCard;
