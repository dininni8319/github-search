import styled from "styled-components"
import { rem } from "polished"
import { Icon } from "../ResultList/style";

const UserSuggestionCard = styled.div`
  width: ${rem("120px")};
  height: ${rem("20px")};
  position: absolute;
  top: 20%;
`

const ResultListUsers = ({ users }) => {
  return <UserSuggestionCard>

  </UserSuggestionCard>
}

export default ResultListUsers
