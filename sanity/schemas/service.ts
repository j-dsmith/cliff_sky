const service = {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Service Title",
      type: "string",
    },
    {
      name: "description",
      title: "Project Description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};

export default service;
