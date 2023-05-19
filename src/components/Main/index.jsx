import { useState, useEffect } from "react"
import { AppContainerListStyle, ErrorMessage } from "./style"
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
  const [error, setError] = useState(null)

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
    }, 1000)

    return () => clearTimeout(timeoutId)
  }, [searchTerm, 1000])

  const handleSearched = (user) => {
    try {
      let unique = searchedList?.some((el) => el.id === user.id)

      if (user.id && !unique) {
          let userFromSugg = usersSuggestion?.filter((el) => el.id === user.id)
          setSearchedList(prev => userFromSugg .concat(prev))
          setSearchTerm("")
          setUserSuggestion([])
    
      } else {
        setSearchTerm("")
        setUserSuggestion([])
        throw new Error("Something went wrong")
      }
      setSearchTerm("")
          setUserSuggestion([])
    } catch (err) {
      setError(err.message);
      setSearchTerm("")
      setUserSuggestion([])
    }
    return
  }

  const handleClear = () => {
    setSearchTerm("")
    setUserSuggestion([])
  }
  const clearError = () => setError(null)
  const handleCardOpen = (id) => {
    setUserId(id)
    setOpen((prev) => !prev)
  }

  useEffect(() => {
    if (debounced.length > 3) {
      fetch(
        `https://api.github.com/search/users?&key=${api_token}&q=${debounced}`
      )
        .then((resp) => resp.json())
        .then((data) => setUsers(data.items))
        .catch((err) => console.log(err))
    }
  }, [debounced])

  return (
    <AppContainerListStyle>
      <SearchBar
        clearError={clearError}
        setUserSuggestion={setUserSuggestion}
        users={usersSuggestion}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        searchedList={searchedList}
        open={open}
        handleUsersSuggestion={handleUsersSuggestion}
        handleClear={handleClear}
        handleCardOpen={handleCardOpen}
        handleSearched={handleSearched}
        userId={userId}
        first={first}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </AppContainerListStyle>
  )
}

export default Main
