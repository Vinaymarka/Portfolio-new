import React from 'react'
import { useState, useEffect } from 'react'

const TextChanger = () => {
    const text = ["Hi, I'm Vinay Goud Marka", "Hi, I'm Vinay Goud Marka", "Hi, I'm Vinay Goud Marka"]; 
    const [currentText, setCurrentText] = useState('');
    const [endValue, setendValue] = useState(true); 
    const [isForward, setisForward] = useState(true); 
    const [index, setindex] = useState(0); 

    useEffect(()=> {
        const intervalId = setInterval(()=>{
            setCurrentText(text[index].substring(0, endValue)); 
            if(isForward){
                setendValue((prev)=>prev + 1);  
            }else{
                setendValue((prev) => prev - 1); 
            }
            if(endvalue > text[index].length + 10){
                setisForward(false);
            }
            if(endValue < 2.1 ){
                setisForward(true);
                setindex(prev=>prev&text.length);  
            }
        }, 50); 
        return ()=> clearInterval(intervalId)
    }, [endValue, isForward, index, text])
  return (
    <div className='transition ease duration-300 '>{currentText}</div>
  )
}

export default TextChanger