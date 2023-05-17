import { memo } from 'react';
import { CardComponentStyle } from "../ResultList/style"
import { Icon } from "../ResultList/style"
import { UserDetailWrapper } from "../ResultListUsers/style"

const Card = ({ user }) => {

  return (
    <CardComponentStyle>
      <UserDetailWrapper>
        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
          <h3>{user.login}</h3>
          <Icon src={user.avatar_url} />
        </a>
      </UserDetailWrapper>
    </CardComponentStyle>
  )
}

export default memo(Card)
