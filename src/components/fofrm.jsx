import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("xyyvgple");
  if (state.succeeded) {
      return <p>Message sent would get a feedback as soon as possible cheers🍻!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        {/* Email Address */}
      </label>
      <input
        id="name"
        type="name" 
        name="name"
        placeholder='Name'
      />
       <input
        id="email"
        type="email" 
        name="email"
        placeholder='Email'

      /><br/>
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea className='texter'
        id="message"
        name="message"
        placeholder='Message'
      /><br/>
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className="contact_but" type="submit" disabled={state.submitting}>
        Submit <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 12h11m0 0-4.588-4m4.588 4-4.588 4" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
    </form>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;