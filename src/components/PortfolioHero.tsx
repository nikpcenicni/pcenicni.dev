import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectCardModal from '../components/ProjectCardModal';
import Link from 'next/link';

interface ProjectType {
  id: number;
  title: string;
  imageSrc: string;
  description: string;
  link: string;
}

const PortfolioHero = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<ProjectType | null>(null);
  const projects: ProjectType[] = require('../projects.json').slice(0,3); // modify this line

  const openModal = (project: ProjectType) => {
    setCurrentProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setCurrentProject(null);
    setModalOpen(false);
  };

  return (
    <>
      <div className="container mx-auto py-8 pt-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold text-stroke mx-4">Check Out Some Of My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 pt-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              imageSrc={project.imageSrc}
              onClick={() => openModal(project)}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
        {modalOpen && currentProject && (
          <ProjectCardModal
            id={currentProject.id}
            title={currentProject.title}
            imageSrc={currentProject.imageSrc}
            description={currentProject.description}
            link={currentProject.link}
            onClose={closeModal}
          />
        )}
        <div className="text-center">
            <Link href="/portfolio">
                <p className="mt-5 py-2 px-8 rounded-xl inline-block bg-greenblue text-main hover:drop-shadow-2xl">
                    View All Projects
                </p>
            </Link>
        </div>
      </div>
    </>
  );
};

export default PortfolioHero;
