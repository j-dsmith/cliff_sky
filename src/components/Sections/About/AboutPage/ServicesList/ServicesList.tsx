import { Service } from "@/../sanity/lib/queries/bio";
import ServicesCard from "./ServicesCard/ServicesCard";

type Props = {
  services: Service[];
};

const ServicesList = ({ services }: Props) => {
  const renderServices = () => {
    return services.map((service, index) => (
      <ServicesCard service={service} order={index + 1} key={service._id} />
    ));
  };

  return (
    <ul className="flex flex-col gap-6 pb-20 md:flex-row md:gap-8">
      {renderServices()}
    </ul>
  );
};
export default ServicesList;
