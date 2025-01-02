interface AboutMeCardProps {
    title: string;
    content: string;
  }
  
  const GenericCard = ({ title, content}: AboutMeCardProps) => {
    return (
      <>
        <div className="m-6 cursor-pointer w-11/12 mx-auto sm:w-11/12 md:w-3/4 lg:w-1/2">
          <div className="relative rounded-2xl border-4 border-zinc-800 drop-shadow-xl hover:drop-shadow-2xl">
            <div className="bg-greenblue rounded-t-xl px-4 pt-2 border-b-4 border-stroke">
              <h3 className="text-xl text-main font-medium mb-2">{title}</h3>
            </div>
            <div>
              <p className="text-stroke text-lg font-medium p-4">{content}</p>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default GenericCard;
  