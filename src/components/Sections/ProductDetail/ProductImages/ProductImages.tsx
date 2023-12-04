"use client";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogOverlay,
} from "@/components/UI/dialog";
import { FC, useEffect, useState } from "react";
import { urlForImage } from "@/../sanity/lib/image";
import Image from "next/image";
import { cn } from "@/utils/utils";
import { Product, ProductImage } from "@/../sanity/lib/queries/product";
import { v4 as uuidv4 } from "uuid";
import HorizontalScrollContainer from "@/components/UI/HorizontalScrollContainer";

type ProductImagesProps = {
  product: Product;
};

const ProductImages: FC<ProductImagesProps> = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedDialogImage, setSelectedDialogImage] = useState(
    product.images[0]
  );

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Update windowWidth when the window size changes
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial windowWidth
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const extraThumbnailCount =
    windowWidth > 768 ? product.images.length - 4 : product.images.length - 3;

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

  const renderDialogThumbnails = () => {
    return product.images.map((image) => {
      const key = uuidv4();
      return (
        <div
          key={key}
          className={cn(
            windowWidth > 768
              ? "aspect-square h-16 flex-1 shrink-0"
              : "aspect-square h-24 flex-1 shrink-0"
          )}
        >
          <button
            onClick={() => handleThumbnailClick("dialog", image)}
            className={cn(
              "relative aspect-square w-full overflow-hidden rounded-xl border shadow-sm focus:outline-none focus:ring-2 focus:ring-cs-mustard-400 focus:ring-offset-2",
              selectedDialogImage._key === image._key &&
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
        </div>
      );
    });
  };

  const renderPrimaryThumbnails = () => {
    const visibleThumbnailCount = windowWidth > 768 ? 4 : 3;

    return product.images.slice(0, visibleThumbnailCount).map((image) => {
      const key = uuidv4();
      return (
        <li key={key} className="flex-1">
          <button
            onClick={() => handleThumbnailClick("primary", image)}
            className={cn(
              "relative aspect-square w-full overflow-hidden rounded-xl border shadow-sm focus:outline-none focus:ring-2 focus:ring-cs-mustard-400 focus:ring-offset-2",
              selectedImage._key === image._key &&
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
    <div className="flex flex-1 flex-col gap-6">
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
          {renderPrimaryThumbnails()}
          {extraThumbnailCount > 0 && (
            <li className="flex-1 ">
              <DialogTrigger className="aspect-square w-full rounded-xl border text-sm font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-cs-mustard-400 focus:ring-offset-2 3xs:text-xs">
                +{extraThumbnailCount} More
              </DialogTrigger>
            </li>
          )}
        </ul>
        <DialogOverlay className="z-imageModalOverlay" />
        <DialogContent className="z-imageModal min-w-[40vw] p-8 3xs:p-2 lg:min-h-[75vh]">
          <div className="relative mx-auto aspect-square overflow-hidden rounded-xl border shadow-sm 3xs:w-full md:w-4/5">
            <Image
              src={urlForImage(selectedDialogImage.asset).url()}
              alt=""
              className="absolute object-cover object-center"
              fill
            />
          </div>
          <div className="flex w-full overflow-x-scroll p-4 3xs:gap-2 md:gap-4">
            {renderDialogThumbnails()}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductImages;
