import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  imageSrc: string;
  description: string;
  link: string;
  onClick: () => void;
}

const ProjectCard = ({ title, imageSrc, description, link, onClick }: ProjectCardProps) => {
  return (
    <>
      <div className="m-6 cursor-pointer w-11/12 mx-auto" onClick={onClick}>
        <div className="relative rounded-2xl border-4 border-zinc-800 drop-shadow-xl hover:drop-shadow-2xl">
            <div className="bg-greenblue rounded-t-xl px-4 pt-2 border-b-4 border-stroke">
                <h3 className="text-2xl font-bold text-main font-medium mb-2">{title}</h3>
            </div>
            <div className="rounded-b-xl overflow-hidden w-full">
                <Image 
                  src={imageSrc} 
                  alt={title} 
                  width={500}
                  height={300}
                  className="w-full h-10/12" />
            </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
