import { memo } from "react"
import { Icon } from "../../Main/style"
import { UserSuggestionCard, UserDetailWrapper } from "./style";

const ResultListUsers = ({ users, handleClear }) => {
  console.log("ResultListUsers")
  return (
    <UserSuggestionCard>
      {users?.slice(0, 5).map((user) => {
        return (
          <UserDetailWrapper key={user.id} onClick={() => handleClear(user.id)}>
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

export default memo(ResultListUsers)
