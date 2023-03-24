import { useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectcardmodalProps {
  id: number;
  title: string;
  imageSrc: string;
  description: string;
  link: string;
  onClose: () => void;
}

const Projectcardmodal: React.FC<ProjectcardmodalProps> = ({ id, title, imageSrc, description, link, onClose }) => {
  const [showModal, setShowModal] = useState<boolean>(true);

  const closeModal = () => {
    setShowModal(false);
    onClose();
  };

  return (
    <>
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-stroke bg-opacity-10"
          onClick={closeModal}
        >
          <div className="bg-main rounded-2xl drop-shadow-lg hover:drop-shadow-2xl drop-shadow-stroke w-11/12 sm:2/3 md:w-5/6 lg:w-3/4 xl:w-1/2 border-4 border-stroke pb-4">
            <div className="flex mb-4 rounded-t-xl border-b-4 border-stroke justify-between bg-greenblue p-4 ">
              <h2 className="text-left text-2xl font-bold mr-2">{title}</h2>
              <button className="text-2xl font-bold" onClick={closeModal}>
                X
              </button>
            </div>
            <div className="place-content-center">
              <div className="flex justify-center items-center">
                <img src={imageSrc} alt={title} className="rounded-xl w-11/12 md:w-5/6 lg:w-2/3 xl:w-1/2" />
              </div>
            </div>


            <p className="text-gray-700 text-center mb-4 p-4 w-full">{description}</p>
            <div className='bg-greenblue w-fit mx-auto rounded-lg p-2 hover:drop-shadow-lg'>
              <Link
                href={link}
                className="text-main font-bold py-2 px-4 rounded"
                target="_blank"
                rel="noreferrer"
              >
                Visit Project
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Projectcardmodal.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Projectcardmodal;
