import { useEffect } from "react";

interface myProps{
    menuOpen:boolean;
    setMenuOpen:React.Dispatch<React.SetStateAction<boolean>>;
}


const MobileMenu:React.FC<myProps> = ({menuOpen,setMenuOpen}) => {
  useEffect(()=>{
    
  },[menuOpen])
  
    return (
    <div className={`fixed top-0 left=0 w-full  bg-stone-700  text-white backdrop-blur-lg border-b border-white/10 shadow-lg flex flex-col items-center justify-center
                    transition-all duration-300 ease-in-out
                    ${menuOpen ? "h-screen opacity-100 pointer-events-auto"
                               : "h-0 opacity-0 pointer-events-none"
                    }`}>
        mobile menu

        <button 
            onClick={()=>setMenuOpen(true)}
            className ="absolute top-6 right-6 text-white text-3xl focus:ouline-none cursor-pointer"> 
            &times; 
        </button>
    </div>
  )
}

export default MobileMenu