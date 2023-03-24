import Footer from '@/components/Footer';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import ProjectCardModal from '../components/ProjectCardModal';

interface ProjectType {
  id: number;
  title: string;
  imageSrc: string;
  description: string;
  link: string;
}

const Portfolio = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<ProjectType | null>(null);
  const projects: ProjectType[] = require('../projects.json');

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
      <Navbar />
      <div className="container mx-auto py-8 pt-16">
        <h1 className="mt-12 text-4xl md:text-5xl lg:text-6xl text-center font-bold text-stroke">Check Out Some Of My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-10">
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
      </div>
      <Footer/>
    </>
  );
};

export default Portfolio;
