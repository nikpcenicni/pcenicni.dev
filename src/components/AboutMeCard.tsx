interface AboutMeCardProps {
    title: string;
    imageSrc: string;
    name: string;
    blurb: string;
    description: string;
    
  }
  
  const AboutMeCard = ({ title, imageSrc, name, blurb, description}: AboutMeCardProps) => {
    return (
      <>
        <div className="m-6 cursor-pointer w-11/12 mx-auto sm:w-11/12 md:w-3/4 lg:w-1/2">
          <div className="relative rounded-2xl border-4 border-zinc-800 drop-shadow-xl hover:drop-shadow-2xl">
              <div className="bg-greenblue rounded-t-xl px-4 pt-2 border-b-4 border-stroke">
                  <h3 className="text-3xl text-main font-medium mb-2">{title}</h3>
              </div>
              <div className="overflow-hidden w-full py-4 flex">
                  <img src={imageSrc} alt={title} className="w-1/2 mx-auto rounded-xl" />
              </div>
              <div className="w-full px-4">
                  <h3 className="text-xl text-center text-stroke font-medium mb-2">{"Hi, I'm " + name}</h3>
              </div>
              <div className="w-full">
                  <p className="text-lg text-center text-stroke font-medium mb-2">{blurb}</p>
              </div>
              <div className="w-full">
                  <p className="text-lg text-center text-stroke font-medium mb-2 p-4">{description}</p>
              </div>
          </div>
        </div>
      </>
    );
  };
  
  export default AboutMeCard;
  