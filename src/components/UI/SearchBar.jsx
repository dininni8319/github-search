import { SearchBarComponent } from "../Main/style"
import Card from "./Card"
import Input from "./Input"
import ResultCard from "./ResultListUsers"

const SearchBar = ({
  users,
  searchedList,
  handleClear,
  searchTerm,
  setSearchTerm,
  open,
  handleCardOpen
}) => {

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <SearchBarComponent>
      <Input
        searchTerm={searchTerm}
        handleChange={handleChange}
        handleClear={handleClear}
      />
      {searchedList?.map((user) => (
        <Card 
          user={user} 
          key={user.id}
          open={open}
          handleCardOpen={handleCardOpen}  
        />
      ))}
      <ResultCard users={users} handleClear={handleClear} />
    </SearchBarComponent>
  )
}

export default SearchBar
