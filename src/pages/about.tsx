import Navbar from '../components/Navbar'
import React from 'react';
import AboutMeCard from '@/components/AboutMeCard';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <>
      <Navbar/>
      <div className='w-full h-screen'>


        <div className='w-11/12 lg:w-1/2 mx-auto pt-20'>
          <AboutMeCard
            title="About Me"
            imageSrc="https://source.unsplash.com/random/1600x1600" 
            name="Nikholas Pcenicni"
            blurb="Full-Stack Developer"
            description={''} 
            link={''}
          />
        </div>
      </div>
      <Footer/>
      {/* <div className="pt-20 flex flex-col items-center justify-center min-h-screen bg-main">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-8 md:flex">
          <div className="md:w-1/3 pb-5">
            <img className="rounded-lg w-full" src="https://source.unsplash.com/random/1600x1600" alt="Profile" />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Nikholas Pcenicni</h1>
            <p className="text-gray-700 text-base mb-4">Full-stack developer with 5+ years of experience.</p>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Education</h2>
            <ul className="list-disc list-inside mb-4">
              <li>Bachelors Degree in Computer Science, XYZ University (2014-2018)</li>
            </ul>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Work Experience</h2>
            <div className="mb-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Software Developer, ABC Company (2018-present)</h3>
              <p className="text-gray-700 text-base mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <ul className="list-disc list-inside">
                <li>Developed and maintained web applications using React and Node.js.</li>
                <li>Collaborated with designers and stakeholders to create user-friendly interfaces.</li>
              </ul>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Personal Projects</h2>
            <ul className="list-disc list-inside mb-4">
              <li><a href="#">Project 1</a></li>
              <li><a href="#">Project 2</a></li>
            </ul>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Technical Skills</h2>
            <ul className="list-disc list-inside mb-4">
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>SQL</li>
              <li>Git</li>
            </ul>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Contact</h2>
            <ul className="list-disc list-inside">
              <li>LinkedIn: <a href="#">john-doe</a></li>
              <li>GitHub: <a href="#">johndoe</a></li>
            </ul>
          </div>
        </div> 
      </div>
    </div> */}
    </>
 );
};

export default About;