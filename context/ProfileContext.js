import React, { useEffect, useState } from "react"
import axios from "axios"
// import Profile from "../api/Profile"


export const ProfileContext = React.createContext()

export const ProfileProvider = ({ children }) => {
  const [result, setResult] = useState()

  useEffect(() => {
    axios
      .get("https://randomuser.me/api")
      .then(res => {
        setResult(res.data.results)
        // console.log(result)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <ProfileContext.Provider value={{ result }}>
      {children}
    </ProfileContext.Provider>
  )
}
