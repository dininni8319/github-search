import styled from "styled-components"
import { InputWrapper } from "../ResultList/style";
import { rem } from "polished"

export const UserSuggestionCard = styled.div`
  width: 28%;
  height: ${rem("20px")};
  position: absolute;
  top: 28%;
  z-index: 999;
`

export const UserDetailWrapper = styled(InputWrapper)`
  a {
    display: -webkit-flex; /* Safari */
    -webkit-flex-direction: row-reverse; /* Safari 6.1+ */
    display: flex;
    flex-direction: row-reverse;
    justify-content: left;
    padding-left: 10px;
    text-decoration: none;
    color: inherit;
    padding: 5px;
  }

  .user-title {
    padding-left: 10px;
    font-size: medium;
  }

  &:hover {
    background-color: #59d89f;
    transition: 0.4s ease-in;
  }
`
