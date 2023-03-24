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
    <div className="pt-16">
    <form name="contact" action="/success" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <p>
        <input type="text" name="firstname" id="firstname" />
          <label htmlFor="yourname">
            Your Name:
          </label> <br />
          <input type="text" name="name" id="yourname" />
        </p>
        <p>
          <label htmlFor="youremail">
            Your Email:
          </label> <br />
          <input type="email" name="email" id="youremail" />
        </p>
        <p>
          <label htmlFor="yourmessage">
            Message:
          </label> <br />
          <textarea name="message" id="yourmessage"></textarea>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
    </form>
    </div>
  );
};

export default ContactForm;
