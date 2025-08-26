import { Mails } from "lucide-react";
import { Dude1 } from "@/assets/illustration";

const Contact = () => {
  return (
    <div
      id="/contact"
      className="px-8 py-12 mx-auto max-w-xl rounded-xl bg-zinc-800"
    >
      <div className="flex justify-center items-center">
        <img src={Dude1} alt="email_dude" className="w-48 h-48" />
      </div>
      <h1 className="text-3xl font-black text-center md:text-5xl font-Guy">
        Contact<span className="text-blue-500">.</span>
      </h1>
      <p className="my-8 font-semibold leading-relaxed text-center text-zinc-300">
        Shoot me an email if you want to connect! You can also find me on{" "}
        <a
          href="https://www.linkedin.com/in/henry-nyator-674392269/"
          target="blank"
          className="text-blue-300 hover:underline"
        >
          Linkedin
        </a>{" "}
        or{" "}
        <a
          href="https://x.com/nyator_"
          target="blank"
          className="text-blue-300 hover:underline"
        >
          Twitter / X
        </a>{" "}
        if that is more connivent.
      </p>
      <a
        href=""
        className="flex gap-2 justify-center items-center mx-auto text-lg transition-colors w-fit md:text-2xl hover:text-blue-300"
      >
        <Mails />
        <a href="mailto:nyatorhenry@gmail.com" className="font-semibold">
          nyatorhenry@gmail.com
        </a>
      </a>
    </div>
  );
};

export default Contact;
