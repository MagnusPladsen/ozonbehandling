import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import DefaultButton from "../buttons/DefaultButton.component";

const endpoint = "https://formspree.io/f/moqbklnl";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("moqbklnl");
  if (state.succeeded) {
    return (
      <div className="mt-20 w-fit mx-auto text-center">
        <p className="text-2xl 2xl:text-3xl">Takk for at du kontaktet oss!</p>
        <p className="text-sm 2xl:text-xl mb-10">
          Vi vil kontakte deg i løpet av 24 timer
        </p>
        <DefaultButton link="/" text="Hjem" onClick={() => {}} />
      </div>
    );
  }
  return (
    <div className="py-10 lg:py-0 mb-20">
      <h2 className="font-header font-extrabold text-center text-4xl pb-16">
        Kontakt oss
      </h2>
      <div className="w-fit mx-auto mt-6">
        <form onSubmit={handleSubmit}>
          <div className="flex-col mb-6">
            <label htmlFor="name">Kontaktperson</label>
            <input id="name" type="name" name="name" />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="flex-col mb-6">
            <label htmlFor="email">Epost Adresse</label>
            <input id="email" type="email" name="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex-col mb-6">
            <label htmlFor="message">Melding</label>
            <textarea id="message" name="message" />
            <p className="font-text pt-6 font-light text-sm text-center">
              Vi vil kontakte deg tilbake i løpet av 24 timer
            </p>
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
              className="hover:cursor-pointer py-3 px-6 rounded bg-primary font-bold text-white"
              type="submit"
              disabled={state.submitting}
            >
              Send melding
            </motion.button>
          </motion.div>
        </form>
      </div>
    </div>
  );
}
