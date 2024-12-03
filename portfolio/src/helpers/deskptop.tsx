import myImage from '../../assets/myImage.webp'
import GithubWhite from '../../assets/GitHubWhite.svg'
import GithubBlack from '../../assets/githubBlack.svg'
import Linkedin from '../../assets/linkedin.svg'
import downArrow from "../../assets/down-arrow.png"
import downArrowLight from "../../assets/down-arrowLight.png"
import { useEffect, useState } from 'react'
function Header() {
  
  const [theme, setTheme] = useState(()=> {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark"
    }
    return "light"
  })

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html')?.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className='h-screen w-full bg-[#FFFFFF] flex items-center flex-col justify-center dark:bg-[#121212]'>
      <div
        className={`absolute top-4 right-6 w-14 h-6 flex items-center rounded-full p-1 cursor-pointer ${
          theme === 'dark' ? 'bg-[#FFB800]' : 'bg-gray-300'
        }`}
        onClick={toggleTheme}
      >
        <div
          className={`h-5 w-5 rounded-full shadow-md transform transition-transform duration-300 ${
            theme === 'dark' ? 'translate-x-8 bg-[#121212]' : 'translate-x-0 bg-white'
          }`}
        ></div>
      </div>
    <div className="flex justify-between w-4/6 h-full items-center">
    <div className='justify-center flex flex-col'>
    <p
  className="text-[46px] font-extrabold text-[#FFB800] font-montserrat overflow-hidden whitespace-nowrap border-r-2 border-[#FFB800] animate-escribir"
  style={{ width:"fit-content", display: "inline-block" }}
>
    Hola mundo!
  </p>
  <p className="text-[50px] font-extrabold text-[#121212] font-montserrat dark:text-[#FFFFFF]">
    Soy Agustín Montoya
  </p>
  </div>
  <img src={myImage} alt='' className='w-48 rounded-2xl'/>
  </div>
  <div className='flex items-center flex-col mb-24 -mt-56'>
    <div className='mt-10 flex w-60 justify-evenly'>
        <a href="https://www.linkedin.com/in/agustin-montoya-26083031a/" target='_blank'>
        <img src={Linkedin} alt="" className='w-10 h-10'/></a>
        <a href="https://github.com/agustinMontoya2" target='_blank'>
    
    <img src={GithubWhite} alt="GitHub" className='w-10 h-10 hidden dark:block'/>
    
    <img src={GithubBlack} alt="GitHub" className='w-10 h-10 dark:hidden'/>
  </a>
    </div>
    <a href="https://drive.google.com/file/d/1F15NucXNLk9VBGLi1jbrLJ8GcqO-rK8K/view?usp=drive_link" target="_blank">
    <button className="bg-[#FFB800] text-[#121212] px-20 py-2 rounded-md hover:bg-[#e0a600] mt-4" >
  Mira mi CV
</button></a>
  </div>
  <div className="">
      
  <img
    src={downArrowLight} 
    alt="Flecha"
    className="h-7 w-7 animate-subir-bajar mb-[20%] dark:hidden"
  />
  
  <img
    src={downArrow}
    alt="Flecha"
    className="h-7 w-7 animate-subir-bajar mb-[20%] hidden dark:block"
  />
    </div>
    </div>
  )
}

export default Header