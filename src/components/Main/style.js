import styled from "styled-components"
import { rem } from "polished"

export const CardComponentStyle = styled.div`
  width: 100%;
  height: ${rem("60px")};
  opacity: ${(props) => (props.open ? 1 : 0.5)};
  /* background: #ccc; */
  display: flex;
  align-items: center;
  color: white;
  font-weight: 700;
  background-color: white;
  margin: ${rem("10px")} 0;
`

export const Icon = styled.img`
  width: 40px;
  height: 40px;
  border: 50%;
  cursor: pointer;
`

export const ResultListStyle = styled.div`
  width: 70%;
  min-height: 60vh;
  display: flex;
  justify-content: space-around;
  background-color: #37553df7;

  @media screen and (max-width: 750px) {
    width: 90%;
  }
`
export const SearchBarComponent = styled.div`
  margin-top: ${rem("50px")};
  margin-left: ${rem("10px")};
  width: 30%;
  height: 20%;
  min-height: 30vh;
  margin-right: ${rem("5px")};
  margin-bottom: ${rem("5px")};
  
  .card-wrapper {
    width: 100%;
    margin-top: ${rem("10px")};
  }

  input {
    padding: ${rem("15px")} ${rem("5px")};
    width: 70%;
    font-size: 18px;
    font-family: "Roboto";
    font-weight: 200;
    outline: none;
    border: none;
  }

  @media screen and (max-width: 750px) {
    width: 80%;
    input {
      margin-bottom: ${rem("15px")};
    }
  }
`

export const InputWrapper = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
`
