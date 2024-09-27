'use client'

import { ReactNode, useState, useEffect } from "react";

export default function HyDrate({children}:{children:ReactNode}){
    const [isMounted,setIsMounted] = useState(false);

    useEffect(()=>{
        setIsMounted(true)
    },[])

    return isMounted?<>{children}</>: <span>Carregando...</span>
}