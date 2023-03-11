
import React, { useEffect, useState } from 'react'

export const useLoading = () => {

    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        setTimeout(()=>{
            setLoading(false);
        },1000)
  
    },[])
  

    return{
        loading
    }
}
