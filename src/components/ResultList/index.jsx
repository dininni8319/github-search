import { useState, useEffect } from "react"
import {
  Icon,
  ResultListStyle,
  SearchBarComponent,
  CardComponentStyle,
  InputWrapper,
} from "./style"
import searchIcon from "../../search.svg"

const Card = () => {
  return (
    <CardComponentStyle>
      <h4>- Other Content -</h4>
    </CardComponentStyle>
  )
}

const SearchBar = () => {
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
      </InputWrapper>
      <div className="card-wrapper">
        <Card />
      </div>
    </SearchBarComponent>
  )
}

const ResultList = () => {
  return (
    <ResultListStyle>
      <SearchBar />
      <SearchBar />
    </ResultListStyle>
  )
}

export default ResultList
