import { memo } from "react"
import { CardComponentStyle } from "../Main/style"
import { Icon } from "../Main/style"
import { UserDetailWrapper } from "./ResultListUsers/style"
import arrowDown from "../../arrow-down.svg"
import arrowUp from "../../arrow-up.svg"
import styled from "styled-components"

export const ArrowIcon = styled(Icon)`
  width: 25px;
  color: goldenrod !important;
`
export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
const Card = ({ user, open, handleCardOpen }) => {
  return (
    <CardComponentStyle onClick={handleCardOpen} open={open}>
      {open && (
        <UserDetailWrapper>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            <h4 className="user-title">{user.login}</h4>
            <Icon src={user.avatar_url} />
          </a>
        </UserDetailWrapper>
      )}
      <Button>
        <ArrowIcon src={arrowDown} />
      </Button>
    </CardComponentStyle>
  )
}

export default memo(Card)
