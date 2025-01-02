import Link from 'next/link';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-greenblue text-white mt-8 py-4 px-6 flex flex-col sm:flex-row items-center w-full bottom-0 mt-10">
      <p className="mb-4 sm:mb-0 text-center">&copy; {currentYear} Pcenicni.dev</p>
      <nav className="ml-auto">
        <div className='mx-2'>            
          <Link href="/privacy-policy">
              Privacy Policy
          </Link>
        </div>

        <div className='mx-2'>
          <Link href="/terms-of-service">
            Terms of Service
          </Link>
        </div>

      </nav>
    </footer>
  );
}

export default Footer;
