import React from 'react'

const Contact = () => {
  return (
    <div id="/contact" className='max-w-xl mx-auto bg-zinc-800 px-8 py-12 rounded-xl'>
        <h1 className="text-3xl md:text-5xl font-black text-center">
          Contact<span className="text-blue-500">.</span>
        </h1>
        <p className='text-center my-8 font-semibold text-zinc-300 leading-relaxed'>
        Shoot me an email if you want to connect! You can also find me on <a href="" className='text-blue-300'>Linkedin</a> or <a href="" className='text-blue-300'>Twitter</a>  if that's more your speed.
        </p>
      </div>
  )
}

export default Contact