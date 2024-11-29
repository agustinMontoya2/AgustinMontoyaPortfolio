
function Footer() {
    return (
        <div className="bg-[#E0E0E0] h-[60px] flex flex-row justify-center items-center dark:bg-[#343434]">
          <div className="text-center text-[#121212] font-roboto font-extrabold text-[15px] flex justify-between w-[50%] dark:text-[#FFFFFF]">
            <p className="">© 2024 Agustín Montoya</p>
            <div className="">
              <a
                href="https://www.linkedin.com/in/agustin-montoya-26083031a/"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                LinkedIn
              </a>
              |
              <a
                href="https://github.com/agustinMontoya2"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                GitHub
              </a>
              |
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