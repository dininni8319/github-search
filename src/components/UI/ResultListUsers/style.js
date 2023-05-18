import styled from "styled-components"
import { InputWrapper } from "../../Main/style"
import { rem } from "polished"

export const UserSuggestionCard = styled.div`
  width: calc(21% - 0.62rem);
  height: ${rem("20px")};
  position: absolute;
  top: 32%;
  z-index: 999;

  @media screen and (max-width: 750px) {
    width: calc(70% - 0.20rem);
    top: 36%
  }

  @media screen and (min-width: 1800px) {
    top: 30%;
  }
`

export const UserDetailWrapper = styled(InputWrapper)`
  width: 100%;
  /* height: 100%; */
  padding-left: ${rem("10px")};
  padding-top: ${rem("5px")};

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
