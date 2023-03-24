import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FieldProps {
  name: string;
  label: string;
  type: string;
  required: boolean;
}

interface ContactFormProps {
  fields: FieldProps[];
  buttonText: string;
}

const ContactForm = ({ fields, buttonText }: ContactFormProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const onSubmit = async (data: any) => {
    try {
      setSubmitting(true);
      setSubmitError('');

      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(data).toString()
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setSubmitting(false);
      alert('Thank you for your submission!');
    } catch (error) {
      setSubmitting(false);
      setSubmitError('An error occurred while submitting the form. Please try again later.');
    }
  };

  return (
    <div className='pt-20'>
      <div className='mt-10 w-1/2 mx-auto border-4 rounded-xl'>
        <h1 className='text-2xl font-bold mb-2 p-4 border-b-4 bg-greenblue text-main border-stroke rounded-t-lg'>Tell Me About It</h1>
        
        <form data-netlify="true" name="contact" onSubmit={handleSubmit(onSubmit)} className="p-4">
          {fields.map(({ name, label, type, required }) => (
            <div key={name} className="mb-4">
              <label htmlFor={name} className="block mb-2 font-semibold">{label}</label>
              <input
                type={type}
                id={name}
                {...register(name, { required })}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors[name] && (
                <div className="mt-1 text-red-500">{label} is required.</div>
              )}
            </div>
          ))}
          {submitError && (
            <div className="mt-4 text-red-500">{submitError}</div>
          )}
          <button
            type="submit"
            disabled={submitting}
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {submitting ? 'Submitting...' : buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
