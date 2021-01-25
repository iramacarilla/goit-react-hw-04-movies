import React from 'react'
import Loader from "react-loader-spinner";

const Loading = ({}) => {
    return (
        <div className="loader" title="Circles">
              <Loader type="Circles" 
              color=" #3f51b5" 
              height={100} 
              width={100}
               />
            </div>
     )
}

export default Loading;