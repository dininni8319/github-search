import styled from "styled-components"
import { InputWrapper } from "../../Main/style"
import { rem } from "polished"

export const UserSuggestionCard = styled.div`
  width: calc(21% - 0.62rem);
  height: ${rem("20px")};
  position: absolute;
  top: calc(30% + 0.25rem);
  z-index: 999;

  p { 
    min-width: 100%;
    background-color: #ccc;
    color: gray;
    text-transform: uppercase;
    padding: ${rem("5px")};
  }

  @media screen and (max-width: 750px) {
    width: calc(70% - 0.20rem);
    padding-bottom: 0;
    top: 33%
  }
`

export const UserDetailWrapper = styled(InputWrapper)`
  width: 100%;
  padding-left: ${rem("10px")};
  padding-top: 0;
  margin-top: 0;
  /* border: 1px solid red; */
  a {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    text-decoration: none;

    h3 {
      margin-left: 5px;
      color: goldenrod;
    }
  }

  .user-title {
    color: goldenrod;
    font-size: medium;
    margin-left: 5px;
  }

  &:hover {
    background-color: #59d89f;
    transition: 0.4s ease-in;
    color: gold;
  }

  @media screen and (max-width: 750px) {
    padding-right: ${rem("0px")};
  }
`
