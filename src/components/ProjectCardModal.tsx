import { useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

const Projectcardmodal = ({ id, title, imageSrc, description, link, onClose }) => {
  const [showModal, setShowModal] = useState(true);

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
          <div className="bg-main rounded-2xl drop-shadow-lg hover:drop-shadow-2xl drop-shadow-stroke w-full sm:w-3/4 md:w-1/3 lg:w-3/4 xl:w-1/2 border-4 border-stroke pb-4">
            <div className="flex mb-4 rounded-t-xl border-b-4 border-stroke justify-between bg-greenblue p-4 ">
              <h2 className="text-left text-2xl font-bold mr-2">{title}</h2>
              <button className="text-2xl font-bold" onClick={closeModal}>
                X
              </button>
            </div>
            <div className="mx-center">
              <img src={imageSrc} alt={title} className="" />
            </div>

            <p className="text-gray-700 text-center mb-4 p-4 w-full">{description}</p>
            <div className="text-center">
              <a
                href={link}
                className="text-white bg-blue-500 py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                target="_blank"
                rel="noreferrer"
              >
                Visit Project
              </a>
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
