import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import PortfolioHero from '../components/PortfolioHero'
import GenericCard from '@/components/GenericCard'
import Footer from '@/components/Footer'
import Link from 'next/link'


export default function TermsOfService() {
  return (
    <>
    <Navbar />

    <div className="pt-20 w-full">
    <div className="m-6 cursor-pointer w-11/12 mx-auto sm:w-11/12 md:w-3/4 lg:w-1/2">
          <div className="relative rounded-2xl border-4 border-zinc-800 drop-shadow-xl hover:drop-shadow-2xl">
                <div className="bg-greenblue rounded-t-xl p-4 border-b-4 border-stroke">
                    <h3 className="text-4xl text-main font-medium mb-2">Terms of Service</h3>
                </div>
                <div className='p-4'>
                    
                    <p className="text-stroke text-lg">
                    Welcome to Pcenicni.dev. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use. If you disagree with any part of these terms and conditions, please do not use my website.
                    </p>
                    <p className="text-stroke text-lg">
                    The term I or me refers to the owner of the website. The term you refers to the user or viewer of my website.
                    </p>
                    <p className='text-stroke text-lg'>
                    The use of this website is subject to the following terms of use:
                    </p>
                    <ul className='text-stroke text-lg list-decimal p-4'>
                      <li>
                      The content of the pages of this website is for your general information and use only. It is subject to change without notice.
                      </li>
                      <li>
                      This website uses cookies to monitor browsing preferences. If you do allow cookies to be used, personal information may be stored by us for use by third parties.
                      </li>
                      <li>
                      Neither I nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and I expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
                      </li>
                      <li>
                      Your use of any information or materials on this website is entirely at your own risk, for which I shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.
                      </li>
                      <li>
                      This website contains material which is owned by or licensed to me. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
                      </li>
                      <li>
                      All trademarks reproduced in this website, which are not the property of, or licensed to me, are acknowledged on the website.
                      </li>
                      <li>
                      Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offence.
                      </li>
                      <li>
                      From time to time, this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that I endorse the website(s). I have no responsibility for the content of the linked website(s).
                      </li>
                      <li>
                      Your use of this website and any dispute arising out of such use of the website is subject to the laws of Canada.
                      </li>
                    </ul>
                    <p className="text-stroke text-lg">
                      By using my website, you agree to be bound by these terms of service. If you have any questions or concerns about these terms, please contact me.
                    </p>
                </div>
          </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}
