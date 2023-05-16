import { useState, useEffect } from "react"
import { ResultListStyle } from "./style"
import SearchBar from "../UI/SearchBar"

const ResultList = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const api_token = process.env.REACT_APP_API_TOKEN

  useEffect(() => {
    if (searchTerm.length > 4) {
      fetch(`https://api.github.com/search/users?q=${searchTerm}`)
        .then((resp) => resp.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
    }
  }, [searchTerm])

  return (
    <ResultListStyle>
      <SearchBar />
      <SearchBar />
    </ResultListStyle>
  )
}

export default ResultList
