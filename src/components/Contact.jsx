import { useForm } from "react-hook-form";
import { useState } from "react";
import emailjs from "emailjs-com";
import {AiFillLinkedin} from 'react-icons/ai'
import {FaGithub} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import { AiOutlineLoading } from "react-icons/ai";
import emailcredentials from "../data/emailcredentials";

function Contact() {
  const {register, handleSubmit, reset, formState: {errors}} = useForm();
  const [isLoading, setIsLoading] = useState(false);

   const sendEmail = (formData) => {
    setIsLoading(true);

    emailjs.send(
      emailcredentials.serviceID,
      emailcredentials.tempalteID,
      formData,
      emailcredentials.userID
    ).then(
      (result) => {
        setIsLoading(false);
        console.log(formData)
        console.log(result.text)
        reset();
      },
      (error) => {
        setIsLoading(false)
        console.log(error.text)
        console.log(errors.text)
      }
    );
  };
  
  return (
    <div id="contact" className="grid grid-cols-1 md:grid-cols-3 w-full min-h-screen py-20 px-4 pb-2 bg-carafe-500 font-ysabeau items-center gap-4">
      <div id="header" className="col-span-1 flex flex-col items-center justify-center p-4 space-y-4">
        <h1 className="text-tan-500 text-5xl">
          Contact Me
        </h1>
        <div className='flex flex-row space-x-3 text-5xl text-sanddollar-500'>
          <a className='hover:text-sanddollar-300' href="https://www.linkedin.com/in/daniel-kumlin-154211238/" target="_blank" rel="noreferrer">
            <AiFillLinkedin />
          </a>
          <a className='hover:text-sanddollar-300' href="https://github.com/RestartDK" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a className='hover:text-sanddollar-300' href="https://www.instagram.com/daniellkumlin/" target="_blank" rel="noreferrer">
            <AiFillInstagram />
          </a>          
        </div>
      </div>
      <div id="emailform" className="col-span-2 flex flex-col items-center justify-center p-4 space-y-4 md:w-3/4 rounded-md border-2 border-tan-500">  
        <form
        className="flex flex-col justify-start w-full space-y-4" 
        onSubmit={handleSubmit(sendEmail)}>
          <div id="firstname" className="flex flex-col w-full">
            <label className="text-carafe-300 text-xl" htmlFor="firstname">First Name</label>
            <input {...register("firstname")}
            className={`p-2 bg-carafe-300 text-tan-900 rounded-md`} 
            />
          </div>
          
          <div id="lastname" className="flex flex-col w-full">
            <label className="text-carafe-300 text-xl" htmlFor="lastname">Last Name</label>
            <input {...register("lastname")}
            className={`p-2 bg-carafe-300 text-tan-900 rounded-md`} 
            />
          </div>

          <div id="email" className="flex flex-col w-full">
            <label className="text-carafe-300 text-xl" htmlFor="email">Email</label>
            <input {...register("email")}
            className={`p-2 bg-carafe-300 text-tan-900 rounded-md`}
            />   
          </div>

          <div id="message" className="flex flex-col w-full">
            <label className="text-carafe-300 text-xl" htmlFor="message">Message</label>
            <textarea {...register("message")} 
            className="p-2 bg-carafe-300 rounded-md resize-none"
            />   
        </div>

        <button type="submit" className="flex items-center justify-center p-2 mt-4 bg-tan-500 hover:bg-tan-600 hover:cursor-pointer rounded-md font-bold">
          {isLoading ? (
            <>
              <AiOutlineLoading className="mr-2 animate-spin"/> Submitting... 
            </>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  </div>
  )
}

export default Contact