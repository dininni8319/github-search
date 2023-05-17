import styled from "styled-components"
import { InputWrapper } from "../../Main/style";
import { rem } from "polished"

export const UserSuggestionCard = styled.div`
  width: 28%;
  height: ${rem("20px")};
  position: absolute;
  top: 26%;
  z-index: 999;

  @media screen and (max-width: 750px) {
    width: 56%;
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
    justify-content: left;
    text-decoration: none;

    h3 {
      margin-left: 5px;
    }
  }
  
  .user-title {
    color: black;
    font-size: medium;
  } 

  &:hover {
    background-color: #59d89f;
    transition: 0.4s ease-in;
  }
`
