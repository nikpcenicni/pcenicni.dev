import Navbar from '@/components/Navbar';
import Link from 'next/link';

function Success() {
  return (
    <>
    <Navbar/>
    <div className="pt-20">
      <div className='mt-10 w-11/12 sm:w-5/6 md:w-3/4 lg:w-1/2 mx-auto border-4 rounded-xl'>
        <div className="flex flex-col rounded-lg justify-center items-center py-20 bg-greenblue">
        
        <h1 className="text-4xl font-bold text-green-500 mb-4">Success!</h1>
        <p className="text-xl text-main-700 mb-8 px-5 ">
            Thank you for your submission. We will be in touch with you shortly.
        </p>
        <Link href="/">
            <div className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Back to Home
            </div>
        </Link>
        </div>
    </div>
    </div>
    </>
  );
}

export default Success;
