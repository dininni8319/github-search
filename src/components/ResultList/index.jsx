import { useState, useEffect, useCallback, useMemo } from "react"
import { ResultListStyle } from "./style"
import SearchBar from "../UI/SearchBar"

const ResultList = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const api_token = process.env.REACT_APP_API_TOKEN
  const [users, setUsers] = useState([])
  const [usersSuggestion, setUserSuggestion] = useState([])
  const [searchedList, setSearchedList] = useState([])
  const [debounced, setDebounced] = useState("")

  const handleUsersSuggestion = () => {
    // console.log("suggestion")
    if (searchTerm.length > 2) {
      let usersSuggestion = users?.filter((el) =>
        JSON.stringify(el).includes(searchTerm)
      )
      setUserSuggestion(usersSuggestion)
    }
  }
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleUsersSuggestion()
      setDebounced(searchTerm)
    }, 800)

    return () => clearTimeout(timeoutId)
  }, [searchTerm, 800])

  const handleClear = useCallback((id) => {
    if (id) {
      let user = users?.filter((user) => user.id === id)
      setSearchedList((prev) => user.concat(prev))
    }
    setUserSuggestion([])
    setSearchTerm("")
  },[])

  useEffect(() => {
    fetch(`https://api.github.com/users`)
      .then((resp) => resp.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <ResultListStyle>
      <SearchBar
        users={usersSuggestion}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        handleUsersSuggestion={handleUsersSuggestion}
        handleClear={handleClear}
        searchedList={searchedList}
      />
    </ResultListStyle>
  )
}

export default ResultList
