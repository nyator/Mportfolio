import { Mails } from "lucide-react";

const Contact = () => {
  return (
    <div
      id="/contact"
      className="max-w-xl mx-auto bg-zinc-800 px-8 py-12 rounded-xl"
    >
      <h1 className="text-3xl md:text-5xl font-black text-center">
        Contact<span className="text-blue-500">.</span>
      </h1>
      <p className="text-center my-8 font-semibold text-zinc-300 leading-relaxed">
        Shoot me an email if you want to connect! You can also find me on{" "}
        <a href="https://www.linkedin.com/in/henry-nyator-674392269/" target="blank" className="text-blue-300 hover:underline">
          Linkedin
        </a>{" "}
        or{" "}
        <a href="https://x.com/nyator_" target="blank" className="text-blue-300 hover:underline">
          Twitter / X
        </a>{" "}
        if that is more connivent.
      </p>
      <a
        href=""
        className="flex items-center justify-center gap-2 w-fit text-lg md:text-2xl  mx-auto hover:text-blue-300 transition-colors "
      >
        <Mails />
        <a href="mailto:nyatorhenry@gmail.com" className="font-semibold">nyatorhenry@gmail.com</a>
      </a>
    </div>
  );
};

export default Contact;
