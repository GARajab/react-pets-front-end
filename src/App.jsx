import { useState, useEffect } from "react"
import "./App.css"
import * as petService from "./services/petServices"

import PetList from "./components/PetList"

const App = () => {
  const [petList, setPetList] = useState([])

  useEffect(async () => {
    const getPets = async () => {
      try {
        const pets = await petService.index()
        console.log(pets)
        setPetList(pets)
      } catch (error) {
        console.log(error)
      }
    }
    getPets()
  }, [])

  return <PetList petList={petList} />
}

export default App
