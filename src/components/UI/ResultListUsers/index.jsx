import { memo } from "react"
import { Icon } from "../../Main/style"
import { UserSuggestionCard, UserDetailWrapper } from "./style"

const ResultListUsers = ({ users, handleClear, setUserSuggestion }) => {
  let isSuggestionOpen = users.length > 0
  return (
      <UserSuggestionCard>
        {isSuggestionOpen && <p className="github-user-t">github users</p>}
        {users?.slice(0, 5).map((user) => {
          return (
            <UserDetailWrapper key={user.id}>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => handleClear(e,user.id)}
                  >
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
