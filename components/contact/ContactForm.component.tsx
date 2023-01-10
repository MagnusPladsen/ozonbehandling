import { ValidationError, useForm } from "@formspree/react";
import { motion } from "framer-motion";
import DefaultButton from "../buttons/DefaultButton.component";

const endpoint = "https://formspree.io/f/moqbklnl";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("moqbklnl");
  if (state.succeeded) {
    return (
      <div className="pt-[160px] pb-[160px] px-[10vw] lg:px-[30vw] 3xl:px-[40vw] text-center">
        <p className="text-2xl 2xl:text-3xl">Takk for at du kontaktet oss!</p>
        <p className="text-sm 2xl:text-xl my-10 ">
          Vi vil kontakte deg i løpet av 24 timer
        </p>
        <div className="w-fit mx-auto">
          <DefaultButton link="/" text="Hjem" onClick={() => {}} />
        </div>
      </div>
    );
  }
  return (
    <div className="pt-[160px] pb-[160px] px-[10vw] lg:px-[30vw] 3xl:px-[40vw]">
      <h2 className="font-header font-extrabold text-left text-4xl pb-16">
        Kontakt oss
      </h2>
      <div className="">
        <form onSubmit={handleSubmit}>
          <div className="flex-col mb-6">
            <label htmlFor="name">Kontakt person</label>
            <input id="name" type="name" name="name" className="w-full" />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="flex-col mb-6">
            <label htmlFor="email">Epost</label>
            <input id="email" type="email" name="email" className="w-full" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex-col">
            <label htmlFor="message">Melding</label>
            <textarea
              id="message"
              name="message"
              className="resize-none w-full"
            />

            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <p className="font-text py-8 font-light text-sm text-center">
            Vi vil kontakte deg tilbake i løpet av 24 timer
          </p>
          <div className="text-center">
            <motion.button
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 },
                color: "#06283D",
                backgroundColor: "#fff",
                border: "1px solid #06283D",
              }}
              whileTap={{ scale: 0.9 }}
              className="hover:cursor-pointer py-3 px-6 rounded bg-primary font-bold text-white"
              type="submit"
              disabled={state.submitting}
            >
              Send melding
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
}
