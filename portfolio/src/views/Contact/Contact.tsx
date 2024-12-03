import React, { ChangeEvent, useState } from "react";
import { sendMail } from "./sendMail"
import { mailInterface } from "../../interfaces/mailInterface";
import Swal from "sweetalert2";
import { BarLoader} from "react-spinners";

function Contact() {
  const emailInitialState = {
    name: "",
    email: "",
    message: "",
  }
  const [email, setEmail] = useState<mailInterface>(
    emailInitialState
  );
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (event: React.FormEvent< HTMLFormElement>) => {
    event.preventDefault();
    try {
      if(email.name && email.email && email.message){
        setLoading(true);
      await sendMail(email);
      Swal.fire({
        title: 'Email Enviado con exito',
        icon: 'success',
        timer: 1000,
    });
      setEmail(emailInitialState);
      }
      else {
        Swal.fire({
          icon: 'error',
                      title: 'Todos los campos son requeridos',
                      toast: true,
                      position: 'top-end',
                      showConfirmButton: false,
                      timer: 2500,
                      timerProgressBar: true,
        })}
    } catch (error: any) {
      Swal.fire({
        icon: 'error',
                    title: 'Error al enviar el email, por favor intente nuevamente',
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 2500,
                    timerProgressBar: true,
      })
    }
    finally {
      setLoading(false);
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEmail((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="h-screen w-full bg-[#FFFFFF] flex items-center flex-col dark:bg-[#121212]">
        <h2 className="text-[44px] font-extrabold text-[#121212] font-montserrat text-center mt-24 dark:text-[#FFFFFF]">Contactate conmigo</h2>
      <div className="w-4/6 h-4/6 bg-[#E0E0E0] rounded-3xl mt-12 dark:bg-[#343434] flex flex-col justify-center">
      <div className="">
      <p className="text-[#FFB800] font-montserrat font-medium text-[20px] text-center">Siempre estoy dispuesto a nuevos desafíos.</p>
      <p className="text-[#FFB800] font-montserrat font-medium text-[20px] text-center"> 
      Si tienes una idea o proyecto en el que crees que puedo aportar, no dudes en escribirme.</p>
      <p className="text-[#FFB800] font-montserrat font-medium text-[20px] text-center mb-8">¡Será un placer colaborar!</p>
</div>
<div className="flex flex-col items-center">
    <form onSubmit={handleSubmit} className="w-[100%] flex flex-col items-center">
  <div className="w-[60%]">
  <p className="text-[#121212] font-montserrat font-semibold text-[20px] text-center dark:text-[#FFFFFF]">¿Como te llamas?</p>
      <input
      onChange={handleChange} 
      value={email.name}
        name="name"
        type="text" 
        className="bg-[#F5F5F5] border-[#FFB800] border-[1px] py-2 px-4 rounded-md mt-2 mb-4 w-[100%] text-[#121212] dark:bg-[#1a1a1a] dark:text-[#FFFFFF]"
      />
  </div>
  <div className="w-[60%]">
  <p className="text-[#121212] font-montserrat font-semibold text-[20px] text-center dark:text-[#FFFFFF]">¿Cual es tu correo?</p>
      <input
      value={email.email}
      onChange={handleChange} 
        name="email"
        type="email" 
        className="bg-[#F5F5F5] border-[#FFB800] border-[1px] py-2 px-4 rounded-md mt-2 mb-4 w-[100%] text-[#121212] dark:bg-[#1a1a1a] dark:text-[#FFFFFF]"
      />
  </div>
  <div className="w-[60%]">
  <p className="text-[#121212] font-montserrat font-semibold text-[20px] text-center dark:text-[#FFFFFF]">¿Cual es tu mensaje?</p>
      
      <textarea 
      value={email.message}
      onChange={handleChange} 
      name="message"
  className="resize-none bg-[#f5f5f5] border border-[#FFB800] text-[#121212] p-2 rounded-md mt-2 w-[100%] h-32 dark:bg-[#1a1a1a] dark:text-[#FFFFFF]" 
></textarea>
  </div>
  <button 
      type="submit" disabled={loading}
      className="bg-[#FFB800] text-[#121212] py-1 px-6 rounded-md mt-4 w-[30%] flex justify-center items-center"
    >
      {loading ? 'Enviando...' : 'Enviar'}
      {loading && < BarLoader  color={"#121212"} width={50} className="ml-4"/>} 
    </button>
</form>
</div>
      </div>
    </div>
  )
}

export default Contact