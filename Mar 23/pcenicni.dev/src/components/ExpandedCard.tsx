const ExpandedCard = ({ title, description, link, imageSrc, handleClick }) => {
    return (
      <>
        <div
          className="fixed top-0 left-0 w-full h-full bg-gray-200 opacity-50 z-40"
          onClick={handleClick}
        />
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 sm:w-3/4 md:w-2/3 lg:w-1/2 bg-white rounded-lg z-50 overflow-y-scroll">
          <div className="rounded-t-lg overflow-hidden">
            <img src={imageSrc} alt={title} className="w-full" />
          </div>
          <div className="bg-white rounded-b-lg p-4">
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-2">{title}</h3>
              <p className="text-gray-600 text-base">{description}</p>
            </div>
            <div className="flex justify-end">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default ExpandedCard;
  