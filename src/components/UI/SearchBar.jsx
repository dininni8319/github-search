import { SearchBarComponent } from "../Main/style"
import Card from "./Card"
import Input from "./Input"

const SearchBar = ({
  searchedList,
  handleClear,
  searchTerm,
  setSearchTerm,
  open,
  handleCardOpen,
  userId,
  first,
  users
}) => {
  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }
  const isSuggestionOpen = users.length > 0

  return (
    <SearchBarComponent isSuggestionOpen={isSuggestionOpen}>
      <Input
        searchTerm={searchTerm}
        handleChange={handleChange}
        handleClear={handleClear}
        users={users}
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
