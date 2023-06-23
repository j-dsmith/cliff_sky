const painting = {
  name: "paintings",
  title: "Paintings",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Painting Title",
      type: "string",
    },
    {
      name: "description",
      title: "Painting Description",
      type: "text",
    },
    {
      name: "year",
      title: "Painting Year",
      type: "number",
    },
    {
      name: "image",
      title: "Painting Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};

export default painting;
