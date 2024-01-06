import React from 'react'
import { createContext, useState } from "react";

export const addUpdateContext=createContext()
export const editUpdateContext=createContext()
export const deleteUpdateContext=createContext()
export const addUserUpdateContext=createContext()
function ContextSharing({children}) {
  const [addUpdate,setAddUpdate]=useState([])
  const [editUpdate,setEditUpdate]=useState([])
  const [deleteUpdate,setDeleteUpdate]=useState([])
  const [addUserUpdate,setAddUserUpdate]=useState([])
  return (
    <>
<addUpdateContext.Provider value={{addUpdate,setAddUpdate}}>
<editUpdateContext.Provider value={{editUpdate,setEditUpdate}}>
<deleteUpdateContext.Provider value={{deleteUpdate,setDeleteUpdate}}>
<addUserUpdateContext.Provider value={{addUserUpdate,setAddUserUpdate}}>
    {children}
    </addUserUpdateContext.Provider>
    </deleteUpdateContext.Provider>
    </editUpdateContext.Provider>
</addUpdateContext.Provider>
    </>
  )
}

export default ContextSharing