import React from 'react';
import { faGithub, faLinkedin, faTwitter, faFacebook, faInstagram, faSnapchat} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
interface AboutMeCardProps {
    title: string;
    github?: string;
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
    snapchat?: string;

  }
  
  const LinksCard = ({ title, github, linkedin, twitter, facebook, instagram, snapchat}: AboutMeCardProps) => {
    return (
      <>
        <div className="m-6 cursor-pointer w-11/12 mx-auto sm:w-11/12 md:w-3/4 lg:w-1/2">
          <div className="relative rounded-2xl border-4 border-zinc-800 drop-shadow-xl hover:drop-shadow-2xl">
                <div className="bg-greenblue rounded-t-xl px-4 pt-2 border-b-4 border-stroke">
                    <h3 className="text-xl text-main font-medium mb-2">{title}</h3>
                </div>
                
                {github && (
                    <div className="w-full text-center px-6 py-2">
                        <a href={github} >
                            <div className='w-3/4 mx-auto bg-github text-main text-xl font-bold rounded-2xl p-4'>
                            <FontAwesomeIcon icon={faGithub} className="text-xl pr-14 text-center"/>
                            Github
                            </div>
                        </a>
                    </div>
                )}
                                
                {linkedin && (
                    <div className="w-full text-center px-6 py-2">
                        <a href={linkedin} >
                        <div className='w-3/4 mx-auto bg-linkedin text-main text-xl font-bold rounded-2xl p-4'>
                            <FontAwesomeIcon icon={faLinkedin} className="text-xl pr-10 text-center"/>
                            LinkedIn
                        </div>
                        </a>
                    </div>
                )}

                {twitter && (
                    <div className="w-full text-center px-6 py-2">
                        <a href={twitter} >
                        <div className='w-3/4 mx-auto bg-twitter text-main text-xl font-bold rounded-2xl p-4'>
                            <FontAwesomeIcon icon={faTwitter} className="text-xl pr-10 text-center"/>
                            Twitter
                        </div>
                        </a>
                        </div>
                )}

                {instagram && (
                    <div className="w-full text-center px-6 py-2">
                        <a href={instagram} >
                        <div className='w-3/4 mx-auto bg-instagram text-main text-xl font-bold rounded-2xl p-4'>
                            <FontAwesomeIcon icon={faInstagram} className="text-xl pr-6 text-center"/>
                            Instagram
                        </div>
                        </a>
                    </div>
                )}

                {facebook && (
                    <div className="w-full text-center px-6 py-2">
                        <a href={facebook} >
                        <div className='w-3/4 mx-auto bg-facebook text-main text-xl font-bold rounded-2xl p-4'>
                            <FontAwesomeIcon icon={faFacebook} className="text-xl pr-6 text-center"/>
                            Facebook
                        </div>
                        </a>
                        </div>
                )}

                {snapchat && (
                    <div className="w-full text-center px-6 py-2">
                        <a href={snapchat} >
                        <div className='w-3/4 mx-auto bg-snapchat text-stroke text-xl font-bold rounded-2xl p-4'>
                            <FontAwesomeIcon icon={faSnapchat} className="text-xl pr-6 text-center"/>
                            Snapchat
                        </div>
                        </a>
                    </div>
                )}



                

          </div>
        </div>
      </>
    );
  };
  
  export default LinksCard;
  