import ServicesCard from "./ServicesCard/ServicesCard";

export type Service = {
  title: string;
  description: string;
};

const services: Service[] = [
  {
    title: "Brand Identity",
    description:
      "I will work with you to create a brand identity that is unique to your business. This includes a logo, color palette, and typography.",
  },
  {
    title: "Painting",
    description:
      "Original paintings are available for purchase. I also do commissioned work. Please contact me for more information.",
  },
  {
    title: "Graphic Design",
    description:
      "I can create custom graphics for your business. This includes social media graphics, promotional posters, flyers, and more.",
  },
];

const ServicesList = () => {
  const renderServices = () => {
    return services.map((service, index) => (
      <ServicesCard service={service} order={index + 1} key={service.title} />
    ));
  };

  return (
    <ul className="flex flex-col gap-6 md:flex-row md:gap-8">
      {renderServices()}
    </ul>
  );
};
export default ServicesList;
