import React, { useEffect, useState } from "react"
import axios from "axios"

export const ProfileContext = React.createContext()

export const ProfileProvider = ({ children }) => {
  const [result, setResult] = useState()

  useEffect(() => {
    axios
      .get("https://randomuser.me/api")
      .then(res => {
        setResult(res.data.results)
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
