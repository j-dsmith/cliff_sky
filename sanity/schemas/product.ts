const product = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Product Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      description: "Add cents as zeroes, ie 500 = $5",
    },
    {
      name: "sizes",
      title: "Sizes",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "color",
      title: "Color",
      type: "string",
    },
    {
      name: "images",
      title: "Product Images",
      type: "array",
      of: [
        {
          name: "image",
          title: "Image",
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Apparel", value: "Apparel" },
          { title: "Stickers", value: "stickers" },
          { title: "Prints", value: "prints" },
        ],
      },
    },
  ],
};

export default product;
