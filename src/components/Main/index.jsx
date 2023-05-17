import { useState, useEffect, useCallback, useMemo } from "react"
import { ResultListStyle } from "./style"
import SearchBar from "../UI/SearchBar"

const Main = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const api_token = process.env.REACT_APP_API_TOKEN
  const [users, setUsers] = useState([])
  const [usersSuggestion, setUserSuggestion] = useState([])
  const [searchedList, setSearchedList] = useState([])
  const [debounced, setDebounced] = useState("")
  const [open, setOpen] = useState(false)
  const [userId, setUserId] = useState(0)

  const handleUsersSuggestion = () => {
    let usersSuggestion = users?.filter((el) =>
      JSON.stringify(el).includes(debounced)
    )
    setUserSuggestion(usersSuggestion)
  }

  let first = searchedList.find((el) => el.id === searchedList[0]["id"])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleUsersSuggestion()
      setDebounced(searchTerm)
    }, 500)

    return () => clearTimeout(timeoutId)
  }, [searchTerm, 500])

  const handleClear = (id) => {
    let unique = searchedList?.every((el) => el.id !== id)
    if (id && unique) {
      let user = users?.filter((user) => user.id === id)
      setSearchedList((prev) => user.concat(prev))
      
    }
    setUserSuggestion([])
    setSearchTerm("")
  }

  const handleCardOpen = (id) => {
    setUserId(id)
    setOpen((prev) => !prev)
  }

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
        open={open}
        handleCardOpen={handleCardOpen}
        userId={userId}
        first={first}
      />
    </ResultListStyle>
  )
}

export default Main
