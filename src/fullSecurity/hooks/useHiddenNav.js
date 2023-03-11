
import React, { useState } from 'react'

export const useHiddenNav = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);

    const hidden = ()=>{
        setIsNavOpen(isNavOpen => !isNavOpen);
    }

    return{
        isNavOpen,
        hidden
    }
}
