import { useState } from 'react'
import Navbar from '../components/Navbar'
import ProjectCard from '../components/ProjectCard'
import ProjectCardModal from '../components/ProjectCardModal'

const projects = [
  {
    id: 1,
    title: 'Project 1',
    imageSrc: 'https://source.unsplash.com/random/300x200',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar pretium odio sit amet dictum.',
    link: 'https://www.google.com/',
  },
  {
    id: 2,
    title: 'Project 2',
    imageSrc: 'https://source.unsplash.com/random/300x200',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar pretium odio sit amet dictum.',
    link: 'https://www.google.com/',
  },
  {
    id: 3,
    title: 'Project 3',
    imageSrc: 'https://source.unsplash.com/random/300x200',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar pretium odio sit amet dictum.',
    link: 'https://www.google.com/',
  },
  {
    id: 4,
    title: 'Project 4',
    imageSrc: 'https://source.unsplash.com/random/300x200',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar pretium odio sit amet dictum.',
    link: 'https://www.google.com/',
  },
]

const Portfolio = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const openModal = (project) => {
    setCurrentProject(project);
    setModalOpen(true);
  }

  const closeModal = () => {
    setCurrentProject(null);
    setModalOpen(false);
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8 pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 pt-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              imageSrc={project.imageSrc}
              onClick={() => openModal(project)}
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
    </>
  )
}

export default Portfolio
