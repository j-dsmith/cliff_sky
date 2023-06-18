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
  ],
};

export default bio;
