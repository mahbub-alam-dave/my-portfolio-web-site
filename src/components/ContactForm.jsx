import React, { useRef } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const form = useRef();

  console.log(form.current)
//   not completed 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAIL_PUBLIC_KEY)
      .then(
        () => {
          alert("Message sent!");
          form.refresh()
        },
        (error) => {
          console.error(error);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">
    <h2 className="text-xl font-bold text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)] mb-4">Send me a email:</h2>
      <input type="email" name="user_email" placeholder="Your Email" required className="w-full rounded-2xl border border-[var(--color-border)] dark:border-[var(--color-border-dark)] p-2 px-3 mb-3" />
      <input type="text" name="title" placeholder="Email Title" required className="w-full rounded-2xl border-[var(--color-border)] dark:border-[var(--color-border-dark)] border p-2 px-3 mb-3" />
      <textarea name="message" placeholder="Your Message" required rows="5" className="w-full rounded-2xl border border-[var(--color-border)] dark:border-[var(--color-border-dark)] p-2 px-3 mb-3" />
      <button type="submit" className="rounded-full bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)] text-[var(--color-text-primary-dark)] px-4 py-2 border-[var(--color-border)] dark:border-[var(--color-border-dark)] cursor-pointer">Send Message</button>
    </form>
  );
};

export default ContactForm;
