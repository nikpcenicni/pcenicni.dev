import React, { useState } from "react";
import axios from "axios";

interface FieldProps {
  name: string;
  label: string;
  type: string;
  required: boolean;
  placeholder?: string;
}

const ContactForm: React.FC<{ fields: FieldProps[] }> = ({ fields }) => {

  const [formData, setFormData] = useState({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post("/", formData).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="pt-20">
      <div className='my-10 w-11/12 sm:w-5/6 md:w-3/4 lg:w-1/2 mx-auto border-4 rounded-xl'>
        <h1 className='text-2xl font-bold mb-2 p-4 border-b-4 bg-greenblue text-main border-stroke rounded-t-lg'>Tell Me About It</h1>
        <form name="contact" action="/success" method="POST" data-netlify="true" className="p-4">
            <input type="hidden" name="form-name" value="contact" />
            {fields.map((field) => (
            <div key={field.name} className="mt-4">
              <label htmlFor={field.name} className="block mb-2 font-semibold">
                {field.label}:
              </label>
              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  id={field.name}
                  required={field.required}
                  placeholder={field.placeholder}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleInputChange}
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  required={field.required}
                  placeholder={field.placeholder}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleInputChange}
                />
              )}
            </div>
          ))}

          <div className="mt-4 w-full text-center">
            <button type="submit" className="font-bold bg-greenblue text-main rounded-lg py-2 px-8">
              Send
            </button>
          </div>
            
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
