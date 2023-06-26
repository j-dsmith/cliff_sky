import { SignIn } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className=" ">
      <SignIn
        appearance={{
          elements: {
            footerAction: "hidden",
          },
        }}
      />
    </div>
  );
};
export default Page;
