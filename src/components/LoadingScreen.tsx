
import { useState,useEffect } from "react";

interface MyProps{
    onComplete:()=>void;
}

const LoadingScreen: React.FC<MyProps> = ({onComplete}) => {
    const [text,setText] = useState("");
    const loadingText = "Find your next home here!";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(()=>{
            setText(loadingText.substring(0,index));
            index++;

           if(index > loadingText.length+1){
                clearInterval(interval);

                setTimeout(()=>{
                    onComplete();
                },500);
            }
        },70);

        return () => clearInterval(interval);
    },[onComplete])

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
        <div className='m-10 mb-4 text-4xl font-mono font-bold'>
            {text}
            <span className='animation-blink ml-1'> | </span>
        </div>
    </div>
  )
}

export default LoadingScreen;