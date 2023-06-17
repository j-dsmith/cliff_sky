import Image from "next/image";
import HorizontalScrollContainer from "@/components/UI/HorizontalScrollContainer";

type Props = {
  // change this to the actual type
  project?: {
    title: string;
    description: string;
    images: string[];
  };
};

const ProjectCard = ({ project }: Props) => {
  const renderThumbnails = () => {
    return new Array(5).fill(0).map(() => (
      <div
        key={Math.random() * 100}
        className="relative aspect-square w-36 min-w-[144px] snap-start overflow-hidden rounded-lg border border-red-400"
      >
        <Image
          alt=""
          src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'"
          className="object-cover"
          fill={true}
        />
      </div>
    ));
  };

  return (
    <article className="w-full">
      <HorizontalScrollContainer className="mb-6 scroll-pl-4 gap-4 px-4">
        {renderThumbnails()}
      </HorizontalScrollContainer>

      <h3 className="mt-6 pl-4 text-3xl">{project?.title || "Title"}</h3>
      <p>{project?.description || "Description"}</p>
    </article>
  );
};
export default ProjectCard;
