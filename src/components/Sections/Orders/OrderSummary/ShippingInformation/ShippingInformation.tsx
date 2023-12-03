import { FC } from "react";
import {
  CustomerDetails,
  ShippingDetails,
  ShippingOptions,
} from "../../config";

interface ShippingInformationProps {
  shippingOptions: ShippingOptions;
  shippingDetails: ShippingDetails;
  customerDetails: CustomerDetails;
}

const ShippingInformation: FC<ShippingInformationProps> = ({
  shippingDetails,
  shippingOptions,
  customerDetails,
}) => {
  const { name, address } = shippingDetails;
  const { email, name: customerName } = customerDetails;
  return (
    <div className="flex grid-cols-1 rounded-2xl border p-4 3xs:grid 3xs:gap-y-2">
      <div className="flex-1">
        <p className="font-semibold text-gray-800">{name}</p>
        <p className="text-sm text-gray-600">{email}</p>
      </div>
      <div className="flex-1 text-sm text-gray-600">
        <p>{address.line1}</p>
        {address.line2 ? <p>{address.line2}</p> : null}
        <p>
          {address.city}, {address.state} {address.postal_code},{" "}
          {address.country}
        </p>
      </div>
    </div>
  );
};

export default ShippingInformation;
