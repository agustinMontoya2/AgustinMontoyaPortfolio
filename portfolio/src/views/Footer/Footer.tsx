
function Footer() {
    return (
        <div className="bg-[#E0E0E0] h-fit w-full flex flex-row justify-center items-center dark:bg-[#343434] sm:h-[60px]">
        {/* <div className="bg-[#FFFFFF] h-[60px] flex flex-row justify-center items-center dark:bg-[#121212]"> */}
          <div className="text-center text-[#121212] font-roboto font-extrabold text-[11px] flex justify-evenly items-center w-[100%] dark:text-[#FFFFFF] sm:text-[12px]">
            <p className="">© 2024 Agustín Montoya</p>
            <div className="flex flex-col sm:flex-row">
              <a
                href="https://www.linkedin.com/in/agustin-montoya-26083031a/"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/agustinMontoya2"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                GitHub
              </a>
              
              <a
                href="https://wa.me/5491138717699"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                WhatsApp
              </a>
            </div>
            <p className="">
              email: <a href="mailto:agus7montoya@gmail.com" className="">agus7montoya@gmail.com</a>
            </p>
          </div>
        </div>
      );
  
}

export default Footer