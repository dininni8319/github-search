import { InputWrapper, Icon } from "../Main/style"
import searchIcon from "../../search.svg"
import ResultCard from "./ResultListUsers"

const Input = ({
  searchTerm,
  handleChange,
  handleClear,
  users,
  setUserSuggestion,
  handleSearched,
  clearError
}) => {
  return (
    <InputWrapper>
      <Icon src={searchIcon} />
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Type in a Github username..."
        value={searchTerm}
        onChange={(event) => {
          handleChange(event)
          clearError()
        }}
        onClick={handleClear}

      />
      <ResultCard
        users={users}
        handleClear={handleClear}
        setUserSuggestion={setUserSuggestion}
        handleSearched={handleSearched}
      />
    </InputWrapper>
  )
}

export default Input
