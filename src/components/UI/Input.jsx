import { InputWrapper, Icon } from "../Main/style"
import searchIcon from "../../search.svg"
import ResultCard from "./ResultListUsers"

const Input = ({
  searchTerm,
  handleChange,
  handleClear,
  users,
  setUserSuggestion,
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
        }}
        onClick={handleClear}
      />
      <ResultCard
        users={users}
        handleClear={handleClear}
        setUserSuggestion={setUserSuggestion}
      />
    </InputWrapper>
  )
}

export default Input
