const project = {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Project Title",
      type: "string",
    },
    {
      name: "description",
      title: "Project Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "images",
      title: "Project Images",
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
  ],
};

export default project;
