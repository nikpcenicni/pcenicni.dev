import { useState } from 'react';

const ProjectCard = ({ title, imageSrc, description, link, onClick }) => {
  return (
    <>
      <div className="m-6 cursor-pointer" onClick={onClick}>
        <div className="relative rounded-2xl border-4 border-zinc-800 drop-shadow-lg hover:drop-shadow-2xl">
            <div className="bg-greenblue rounded-t-xl p-4 border-b-4 border-stroke">
                <h3 className="text-lg text-main font-medium mb-2">{title}</h3>
            </div>
            <div className="rounded-b-xl overflow-hidden">
                <img src={imageSrc} alt={title} className="w-full" />
            </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
