import { useState, useEffect } from "react"
import { SearchBarComponent, InputWrapper, Icon } from "../ResultList/style"
import Card from "./Card"
import searchIcon from "../../search.svg"
import ResultCard from "../ResultListUsers"

const SearchBar = ({ handleClear, users, searchTerm, setSearchTerm, handleUsersSuggestion }) => {

  const handleChange = event => {
    setSearchTerm(event.target.value)
  }

  return (
    <SearchBarComponent>
      <InputWrapper>
        <Icon src={searchIcon} />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Type in a Github username..."
          value={searchTerm}
          onChange={(event) => {
            handleUsersSuggestion()
            handleChange(event)
          }}
          onClick={handleClear}
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
