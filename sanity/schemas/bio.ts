const bio = {
  name: "bio",
  title: "Bio",
  type: "document",
  fields: [
    {
      name: "bio_short",
      title: "Bio Short",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "bio_long",
      title: "Bio Long",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "services",
      title: "Services",
      type: "array",
      of: [{ type: "reference", to: [{ type: "service" }] }],
    },
  ],
};

export default bio;
