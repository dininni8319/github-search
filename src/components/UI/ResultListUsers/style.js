import styled from "styled-components"
import { InputWrapper } from "../../Main/style"
import { rem } from "polished"

export const UserSuggestionCard = styled.div`
  width: 20vw;
  height: ${rem("20px")};
  position: absolute;
  z-index: 999;
  top: 30%;

  p {
    min-width: 100%;
    background-color: #ccc;
    color: gray;
    text-transform: uppercase;
    padding: ${rem("5px")} 0 ${rem("5px")} 0;
    margin: 0;
  }

  @media screen and (max-width: 750px) {
    width: 80vw;
    top: 32%;
  }
`

export const UserDetailWrapper = styled(InputWrapper)`
  width: 100%;

  a {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    text-decoration: none;

    h3 {
      padding-left: ${rem("5px")};
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
