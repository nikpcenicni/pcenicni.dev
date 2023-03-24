import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import PortfolioHero from '../components/PortfolioHero'
import GenericCard from '@/components/GenericCard'
import Footer from '@/components/Footer'
import Link from 'next/link'


export default function PrivacyPolicy() {
  return (
    <>
    <Navbar />

    <div className="pt-20 w-full">
    <div className="m-6 cursor-pointer w-11/12 mx-auto sm:w-11/12 md:w-3/4 lg:w-1/2">
          <div className="relative rounded-2xl border-4 border-zinc-800 drop-shadow-xl hover:drop-shadow-2xl">
                <div className="bg-greenblue rounded-t-xl p-4 border-b-4 border-stroke">
                    <h3 className="text-4xl text-main font-medium mb-2">Privacy Policy</h3>
                </div>
                <div className='p-4'>
                    <h2 className='text-2xl font-bold'>Introduction</h2>
                    <p className="text-stroke text-lg">
                    At our website, we value the privacy of our users and are committed to protecting it. This privacy policy explains the types of information we collect from users, how we use it, and who we share it with. By using our website, you agree to the terms of this policy.
                    </p>
                    <h2 className='text-2xl font-bold'>Types of Information Collected:</h2>
                    <p className="text-stroke text-lg">
                    We may collect personal information such as name, email address, and phone number, as well as technical information like IP address, browser type, and operating system. We may also collect information about how users interact with our website, such as the pages they visit and the links they click.
                    </p>
                    <h2 className='text-2xl font-bold'>
                    Use of Information:
                    </h2>
                    <p className="text-stroke text-lg">
                    We use the information we collect to personalize the user experience, improve our website, and communicate with users via email or social media. We may also use the information to respond to user inquiries or to send marketing messages.
                    </p>
                    <h2 className='text-2xl font-bold'>
                    Sharing of Information:
                    </h2>
                    <p className="text-stroke text-lg">
                    We may share user information with third-party service providers such as Google Analytics, social media platforms, or payment processors. These service providers use the information to help us analyze website usage or process payments. We take steps to ensure that these third parties protect user privacy.
                    </p>
                    <h2 className='text-2xl font-bold'>
                    Cookies and Tracking Technologies:
                    </h2>
                    <p className="text-stroke text-lg">
                    We use cookies and other tracking technologies to enhance the user experience and to track website usage. Third-party cookies may also be used to provide personalized ads or social media integration. Users can opt-out of cookies by adjusting their browser settings.
                    </p>
                    <h2 className='text-2xl font-bold'>
                    Data Security:
                    </h2>
                    <p className="text-stroke text-lg">
                    We take steps to protect user data, including physical, electronic, and procedural safeguards. We limit access to user data and use encryption to protect sensitive information. However, no method of data transmission over the internet can be guaranteed as completely secure.
                    </p>
                    <h2 className='text-2xl font-bold'>
                    Your Rights:
                    </h2>
                    <p className="text-stroke text-lg">
                    Users have the right to access, update, or delete their data. Users can also unsubscribe from marketing messages at any time. To exercise these rights or to inquire about their data, users can contact us using the information provided below.
                    </p>
                    <h2 className='text-2xl font-bold'>
                    Updates to Privacy Policy:
                    </h2>
                    <p className="text-stroke text-lg">
                    We may update this privacy policy from time to time. Users will be notified of any changes through a notice on our website. By continuing to use our website after any changes, users accept the new policy.
                    </p>
                    <h2 className='text-2xl font-bold'>
                    Contact Information:
                    </h2>
                    <p className="text-stroke text-lg">
                    If you have any questions or concerns about this privacy policy, please contact us <Link href="/contact" className='hover:text-greenblue'> by clicking here</Link>.
                    </p>
                    <h2 className='text-2xl font-bold'>
                    Legal Notices:
                    </h2>
                    <p className="text-stroke text-lg">
                    Please also refer to our <Link href="/terms-of-service" className='hover:text-greenblue'>Terms of Service</Link> for additional legal notices that apply to our website.
                    </p>
                </div>
          </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}
