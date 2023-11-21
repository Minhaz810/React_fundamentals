import { useState,useEffect, useCallback } from "react";
function useWindowWidth(size){
    const [onSmallScreen,setOnSmallScreen]=useState(false)
    const checkScreenSize=useCallback(()=>{
        setOnSmallScreen(window.innerWidth<size);
    })
    useEffect(()=>{
      
        checkScreenSize()
        window.addEventListener("resize",checkScreenSize)
        return()=>{
            window.addEventListener("resize",checkScreenSize)
        }
    },[checkScreenSize])
    return onSmallScreen
}

export default useWindowWidth