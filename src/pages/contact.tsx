import Navbar from '../components/Navbar'
import ContactForm from '../components/ContactForm';  

const fields = [
  { name: 'name', label: 'Name', type: 'text', required: true },
  { name: 'email', label: 'Email Address', type: 'email', required: true },
  { name: 'phone', label: 'Phone Number', type: 'text', required: true },
  { name: 'projectDetails', label: 'Project Details', type: 'textarea', required: true },
  { name: 'budget', label: 'Budget', type: 'text', required: false },
];


export default function Home() {
  return (
    <>
      <Navbar/>
      <ContactForm fields={fields}/>
    </>
  )
}
