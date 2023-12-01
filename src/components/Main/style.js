import styled from "styled-components"
import { rem } from "polished"

export const Icon = styled.img`
  width: 40px;
  height: 40px;
  border: 50%;
  cursor: pointer;
`

export const AppContainerListStyle = styled.div`
  width: 50vw;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #37553df7;

  @media screen and (max-width: 750px) {
    width: 90%;
  }
`
export const SearchBarComponent = styled.div`
  margin-top: ${rem("50px")};
  margin-left: ${rem("10px")};
  width: 20vw;
  height: 20%;
  min-height: 20vh;
  margin-right: ${rem("5px")};
  position: relative;
  
  .card-wrapper {
    width: 100%;
    margin-top: ${rem("10px")};
  }

  input {
    padding: ${rem("15px")} ${rem("5px")};
    width: 100%;
    font-size: 18px;
    font-family: "Roboto";
    font-weight: 200;
    outline: none;
    border: none;
    margin-bottom: 5px;
  }

  @media screen and (max-width: 750px) {
    width: 80vw;
  }

  @media screen and (min-width: 768px) and (max-width: 1400px) {
    width: 30vw;
  }
`

export const InputWrapper = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
`
export const CardComponentStyle = styled.div`
  width: 100%;
  height: ${rem("60px")};
  opacity: ${(props) => (props.open ? 1 : 0.5)};
  /* background: #ccc; */
  display: flex;
  align-items: center;
  color: white;
  font-weight: 300;
  background-color: white;
  margin: ${rem("5px")} 0;
`

export const ErrorMessage = styled.p`
  color: red; 
  font-weight: 400;
  margin-top: 10px;
  font-size: 22px;
`
