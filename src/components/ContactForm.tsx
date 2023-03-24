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
  return (
    <div className="pt-20">
      <div className='mt-10 w-1/2 mx-auto border-4 rounded-xl'>
        <h1 className='text-2xl font-bold mb-2 p-4 border-b-4 bg-greenblue text-main border-stroke rounded-t-lg'>Tell Me About It</h1>
        <form name="contact" action="/success" method="POST" data-netlify="true" className="p-4">
            <input type="hidden" name="form-name" value="contact" />

            <div>
              <label htmlFor="firstname" className="block mb-2 font-semibold">
                Your Name:
              </label>
              <input type="text" name="name" id="firstname" required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div>
              <label htmlFor="youremail" className="block mb-2 font-semibold">
                Your Email:
              </label>
              <input type="email" name="email" id="youremail" required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
              <div>
              <label htmlFor="yourmessage" className="block mb-2 font-semibold">
                Message:
              </label>
              <textarea name="message" required id="yourmessage" className="w-full px-3 py-2 border rounded-md foucs:outline-none focus:ring-2 foucus:ring-blue-500"></textarea>
            </div>
            <div className="mt-4 w-full text-center">
              <button type="submit" className="font-bold bg-greenblue text-main rounded-lg py-2 px-8">Send</button>
            </div>
            
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
