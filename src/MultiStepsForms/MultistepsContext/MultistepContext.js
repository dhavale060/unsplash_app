import React, { useState } from 'react'
import NoteContext from '../Pages/NoteContext';

function MultistepContext(props) {
    const [currentStep , setCurrentStep] = useState(0);
    const [userData , setUserData] = useState([]);
    const [finalData , setFinalData] = useState([]);
  return (
    <NoteContext.Provider value={{currentStep , setCurrentStep , userData , setUserData ,finalData , setFinalData}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default MultistepContext
