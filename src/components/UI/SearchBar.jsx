import { useState, useEffect } from "react"
import { SearchBarComponent } from "../ResultList/style"
import Card from "./Card"
import Input from "./Input"
import ResultCard from '../ResultListUsers';

const SearchBar = ({
  searchedList,
  handleClear,
  users,
  searchTerm,
  setSearchTerm,
}) => {

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <SearchBarComponent>
      <Input
        users={users}
        searchTerm={searchTerm}
        handleChange={handleChange}
        handleClear={handleClear}
      />
      <ResultCard users={users} handleClear={handleClear} />
      <div className="card-wrapper">
        {searchedList?.map((user) => (
          <Card user={user} key={user.id} />
        ))}
      </div>
    </SearchBarComponent>
  )
}

export default SearchBar
