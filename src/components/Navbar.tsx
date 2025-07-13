import { useEffect } from "react";
import { FaBuildingCircleCheck } from "react-icons/fa6";

interface myProps{
    menuOpen:boolean;
    setMenuOpen:()=>void;
}

const Navbar:React.FC<myProps> = ({menuOpen,setMenuOpen}) => {
    useEffect(()=>{
        document.body.style.overflow = menuOpen ? "hidden" : "";
    },[menuOpen])

  return (
    <div className="fixed top-0 w-full z-40 bg-stone-700 text-white backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="flex justify-between">
            <div className="max-w-5xl p-4">
                <a href="#home">
                    <FaBuildingCircleCheck style={{ display: 'inline-block'}}/>
                    <span className="pl-4">Yonge Street</span>
                </a>
                
            </div>

            {menuOpen? <span>hamburger</span> : <ul className="flex gap-2 jusfity-center">
                <li className=" hover:bg-stone-600 p-4">
                    <a href="#details">details</a></li>
                <li className=" hover:bg-stone-600 p-4">
                    <a href="#contact">contact</a></li>
            </ul>}
            {/* <ul className="flex gap-2 jusfity-center">
                <li className=" hover:bg-stone-600 p-4">
                    <a href="#details">details</a></li>
                <li className=" hover:bg-stone-600 p-4">
                    <a href="#contact">contact</a></li>
            </ul> */}
        </div>
    </div>
  )
}

export default Navbar;