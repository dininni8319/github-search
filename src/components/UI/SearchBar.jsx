import { SearchBarComponent } from "../Main/style"
import Card from "./Card"
import Input from "./Input"

const SearchBar = ({
  open,
  userId,
  first,
  users,
  handleClear,
  handleCardOpen,
  handleSearched,
  searchedList,
  setUserSuggestion,
  searchTerm,
  setSearchTerm,
  clearError,
}) => {

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <SearchBarComponent>
      <Input
        clearError={clearError}
        searchTerm={searchTerm}
        handleChange={handleChange}
        handleClear={handleClear}
        users={users}
        setUserSuggestion={setUserSuggestion}
        handleSearched={handleSearched}
      />
      {searchedList?.map((user) => (
        <Card
          userId={userId}
          user={user}
          key={user.id}
          open={open}
          handleCardOpen={handleCardOpen}
          first={first}
        />
      ))}
      
    </SearchBarComponent>
  )
}

export default SearchBar
