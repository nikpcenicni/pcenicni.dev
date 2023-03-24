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
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post("/.netlify/functions/process-form", formData);

      if (response.status === 200) {
        console.log("Form submitted successfully");
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="pt-16">
    <form name="contact" netlify netlify-honeypot="bot-field" hidden>
      <input type="text" name="name" />
      <input type="text" name="phone" />
      <input type="email" name="email" />
      <input type="text" name="budget" />
      <input type="text" name="projectDetails" />
      <textarea name="message"></textarea>
    </form>
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto" >
    <input type="hidden" name="form-name" value="contact" />
      {fields.map(({ name, label, type, required, placeholder }) => (
        <div key={name} className="mb-4">
          <label htmlFor={name} className="block text-gray-700 font-bold mb-2">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
          <input
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleInputChange}
            required={required}
          />
        </div>
      ))}
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
    </div>
  );
};

export default ContactForm;
