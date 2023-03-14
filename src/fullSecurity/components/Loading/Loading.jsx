
import React from 'react';
import { Audio } from 'react-loader-spinner';
import './loadingStyle.css';

export const Loading = ({loading}) => {
  return (
    <>
    
        <div className={`loading-container ${loading ? '' : 'hidden'}`}>

            <Audio
                height="80"
                width="80"
                radius="9"
                color="black"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
            />

        </div>
    
    
    </>
  )
}
