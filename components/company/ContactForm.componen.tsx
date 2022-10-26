import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";

const endpoint = "https://formspree.io/f/moqbklnl";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("moqbklnl");
  if (state.succeeded) {
    return <p>Thanks for sending me a Message!</p>;
  }
  return (
    <div className="py-10 ">
      <h2 className="font-header font-extrabold text-2xl text-center lg:py-8 lg:text-3xl">
        Kontakt oss
      </h2>
      <div className="w-fit mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="flex-col mb-6">
            <label htmlFor="name">Full Name</label>
            <input id="name" type="name" name="name" />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="flex-col mb-6">
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" name="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex-col mb-6">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <motion.div className="text-center">
            <motion.button
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
                color: "#06283D",
                backgroundColor: "#fff",
                border: "1px solid #06283D",
              }}
              className="hover:cursor-pointer  py-4 px-10 rounded bg-primary font-bold text-white"
              type="submit"
              disabled={state.submitting}
            >
              Send message
            </motion.button>
          </motion.div>
        </form>
      </div>
    </div>
  );
}
