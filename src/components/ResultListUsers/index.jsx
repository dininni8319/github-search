import styled from "styled-components"
import { rem } from "polished"
import { InputWrapper, Icon } from "../ResultList/style"

const UserSuggestionCard = styled.div`
  width: 28%;
  height: ${rem("20px")};
  position: absolute;
  border: 1px solid #ccc;
  top: 33%;
  z-index: 999;
`
const UserDetailWrapper = styled(InputWrapper)`
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

const ResultListUsers = ({ users }) => {
  return (
    <UserSuggestionCard>
      {users?.slice(0, 5).map((user) => {
        return (
          <UserDetailWrapper>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              <h3 className="user-title">{user.login}</h3>
              <Icon src={user.avatar_url} />
            </a>
          </UserDetailWrapper>
        )
      })}
    </UserSuggestionCard>
  )
}

export default ResultListUsers
