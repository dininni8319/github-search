import { InputWrapper, Icon } from "../ResultList/style"
import searchIcon from "../../search.svg"

const Input = ({
  searchTerm,
  handleChange,
  handleClear,
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
    </InputWrapper>
  )
}

export default Input
