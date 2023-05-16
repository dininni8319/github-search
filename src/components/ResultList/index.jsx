import { useState, useEffect } from "react"
import { ResultListStyle } from "./style"
import SearchBar from "../UI/SearchBar"

const ResultList = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const api_token = process.env.REACT_APP_API_TOKEN
  const [users, setUsers] = useState([])
  const [usersSuggestion, setUserSuggestion] = useState([])

  const handleUsersSuggestion = () => {
    if (searchTerm.length >= 3) {
      let usersSuggestion = users?.filter((el) =>
        JSON.stringify(el).includes(searchTerm)
      )
      setUserSuggestion(usersSuggestion)  
    }
  }

  const handleClear = () => {
    setUserSuggestion([])
    setSearchTerm("")
  }

  useEffect(() => {
    fetch(`https://api.github.com/users`)
      .then((resp) => resp.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    if (searchTerm.length >= 3) {
      fetch(`https://api.github.com/search/users?q=${searchTerm}`)
        .then((resp) => resp.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
    }
  }, [searchTerm])

  return (
    <ResultListStyle>
      <SearchBar
        users={usersSuggestion}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        handleUsersSuggestion={handleUsersSuggestion}
        handleClear={handleClear} 
      />
      <SearchBar 
        users={usersSuggestion} 
        handleClear={handleClear} 
      />
    </ResultListStyle>
  )
}

export default ResultList
