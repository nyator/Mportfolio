import { Mails } from "lucide-react"

const Contact = () => {
  return (
    <div id="/contact" className='max-w-xl mx-auto bg-zinc-800 px-8 py-12 rounded-xl'>
        <h1 className="text-3xl md:text-5xl font-black text-center">
          Contact<span className="text-blue-500">.</span>
        </h1>
        <p className='text-center my-8 font-semibold text-zinc-300 leading-relaxed'>
        Shoot me an email if you want to connect! You can also find me on <a href="" className='text-blue-300 hover:underline'>Linkedin</a> or <a href="" className='text-blue-300 hover:underline'>Twitter</a>  if that's more your speed.
        </p>
        <a href="" className="flex items-center justify-center gap-2 w-fit text-lg md:text-2xl  mx-auto hover:text-indigo-300 transition-colors ">
          <Mails />
          <span className="">nyatorhenry@gmail.com</span>
        </a>
      </div>
  )
}

export default Contact