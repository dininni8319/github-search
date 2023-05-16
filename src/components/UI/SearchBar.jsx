import { useState, useEffect } from "react"
import { SearchBarComponent, InputWrapper, Icon } from "../ResultList/style"
import Card from "./Card"
import searchIcon from "../../search.svg"
import ResultCard from "../ResultListUsers"

const SearchBar = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch(`https://api.github.com/users`)
      .then((resp) => resp.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <SearchBarComponent>
      <InputWrapper>
        <Icon src={searchIcon} />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Type in a Github username..."
        />
        <ResultCard users={users} />
      </InputWrapper>
      <div className="card-wrapper">
        <Card />
      </div>
    </SearchBarComponent>
  )
}

export default SearchBar
