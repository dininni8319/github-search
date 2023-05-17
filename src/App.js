import "./App.css"
import ResultList from "./components/Main"
import styled from 'styled-components';

const AppContainerStyle = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
function App() {
  return (
    <AppContainerStyle>
      
      <ResultList />
    </AppContainerStyle>
  )
}
export default App
