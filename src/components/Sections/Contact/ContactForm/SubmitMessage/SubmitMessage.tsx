const SubmitMessage = ({ status }: { status: "success" | "error" }) => {
  const messageHTML = {
    success: `Thank You! <br className="md:hidden" /> Your message has been received!`,
    error: "Oops! Something went wrong. Please try again.",
  };
  return (
    <div
      className="rounded-md border border-black p-6 text-center shadow-sm"
      dangerouslySetInnerHTML={{ __html: messageHTML[status] }}
    ></div>
  );
};
export default SubmitMessage;
