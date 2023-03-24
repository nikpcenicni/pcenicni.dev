import Navbar from '../components/Navbar'
import ContactForm from '../components/ContactForm';  
import Footer from '@/components/Footer';

const fields = [
  { name: 'name', label: 'Name', type: 'text', required: true , placeholder: 'John Doe'},
  { name: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'me@example.com' },
  { name: 'phone', label: 'Phone Number', type: 'text', required: true, placeholder: '555-555-5555' },
  { name: 'projectDetails', label: 'Project Details', type: 'textarea', required: true, placeholder: 'Tell me about your project...'},
  { name: 'budget', label: 'Budget', type: 'text', required: false, placeholder: '$500' },
];
export default function Contact() {
  return (
    <>
      <Navbar />
      <div className='h-screen'>
      <ContactForm fields={fields}/>
      </div>
      <Footer/>
      
    </>
  )
}
