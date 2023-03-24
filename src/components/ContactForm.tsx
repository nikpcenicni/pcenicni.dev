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
  return (
    <div className='pt-20'>
      <div className='mt-10 w-1/2 mx-auto border-4 rounded-xl'>
        <h1 className='text-2xl font-bold mb-2 p-4 border-b-4 bg-greenblue text-main border-stroke rounded-t-lg'>Tell Me About It</h1>
        
        <form data-netlify="true" name="contact" method="POST"className="p-4">
          {fields.map(({ name, label, type, required }) => (
            <div key={name} className="mb-4">
              <label htmlFor={name} className="block mb-2 font-semibold">{label}</label>
              <input
                type={type}
                id={name}
                required={required}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            buttonText
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
