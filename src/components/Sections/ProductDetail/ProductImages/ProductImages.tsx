"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/UI/dialog";
import { FC, useState } from "react";
import { urlForImage } from "@/../sanity/lib/image";
import Image from "next/image";
import { cn } from "@/utils/utils";
import { Product, ProductImage } from "@/../sanity/lib/queries/product";
import { v4 as uuidv4 } from "uuid";

type ProductImagesProps = {
  product: Product;
};

const ProductImages: FC<ProductImagesProps> = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedDialogImage, setSelectedDialogImage] = useState(
    product.images[0]
  );

  const extraThumbnailCount = product.images.length - 4;

  const handleThumbnailClick = (
    intent: "dialog" | "primary",
    image: ProductImage
  ) => {
    if (intent === "dialog") {
      setSelectedDialogImage(image);
    } else {
      setSelectedImage(image);
    }
  };

  const handleDialogClose = (isOpen: boolean) => {
    if (!isOpen) setSelectedDialogImage(product.images[0]);
  };

  const renderThumbnailRow = (intent: "dialog" | "primary") => {
    return product.images
      .slice(0, intent === "dialog" ? product.images.length : 4)
      .map((image) => {
        const key = uuidv4();
        return (
          <li key={key} className="flex-1">
            <button
              onClick={() => handleThumbnailClick(intent, image)}
              className={cn(
                "relative aspect-square w-full overflow-hidden rounded-xl border shadow-sm focus:outline-none focus:ring-2 focus:ring-cs-mustard-400 focus:ring-offset-2",
                intent === "primary"
                  ? selectedImage._key === image._key &&
                      "ring-2 ring-cs-mustard-400 ring-offset-2"
                  : selectedDialogImage._key === image._key &&
                      "ring-2 ring-cs-mustard-400 ring-offset-2"
              )}
            >
              <Image
                src={urlForImage(image.asset).url()}
                alt=""
                className="absolute object-cover object-center"
                fill
              />
            </button>
          </li>
        );
      });
  };

  return (
    <div className="sticky top-0 flex flex-1 flex-col gap-6">
      {selectedImage && (
        <div className="relative aspect-square w-full overflow-hidden rounded-xl border shadow-sm">
          <Image
            src={urlForImage(selectedImage.asset).url()}
            alt=""
            className="absolute object-cover object-center"
            fill
            priority
          />
        </div>
      )}
      <Dialog onOpenChange={(isOpen) => handleDialogClose(isOpen)}>
        <ul className="flex gap-3">
          {renderThumbnailRow("primary")}
          {extraThumbnailCount > 0 && (
            <li className="flex-1 ">
              <DialogTrigger className="aspect-square w-full rounded-xl border text-sm font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-cs-mustard-400 focus:ring-offset-2">
                +{extraThumbnailCount} More
              </DialogTrigger>
            </li>
          )}
        </ul>
        <DialogContent className="min-w-[50vw] p-8">
          <div className="relative aspect-square w-full overflow-hidden rounded-xl border shadow-sm">
            <Image
              src={urlForImage(selectedDialogImage.asset).url()}
              alt=""
              className="absolute object-cover object-center"
              fill
            />
          </div>
          <ul className="flex gap-3">{renderThumbnailRow("dialog")}</ul>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductImages;
