import { memo } from "react"
import { CardComponentStyle } from "../Main/style"
import { Icon } from "../Main/style"
import { UserDetailWrapper } from "./ResultListUsers/style"
import arrowDown from "../../arrow-down.svg"
import styled from "styled-components"
import { rem } from "polished"

export const ArrowIcon = styled(Icon)`
  width: 25px;
  color: goldenrod;
  position: absolute;
  left: ${(props) => (props.open ? rem("20px") : rem("100px"))};
  top: ${(props) => (props.open ? rem("20px") : rem("-20px"))};
  display: ${(props) => (props.open || props.isFirst ? "none" : "block")};
`
export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  padding: 5px 0;
  display: ${(props) => (props.open || props.isFirst ? "none" : "block")};
`
const Card = ({ userId, user, open, handleCardOpen, first }) => {
  let isOpen = open && userId === user.id
  let isFirst = user.id === first.id
  let test = isFirst || isOpen
  return (
    <CardComponentStyle onClick={() => handleCardOpen(user.id)} open={test}>
      {test && (
        <UserDetailWrapper>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            <h4 className="user-title">{user.login}</h4>
            <Icon src={user.avatar_url} />
          </a>
        </UserDetailWrapper>
      )}
      <Button open={isOpen || isFirst}>
        <ArrowIcon src={arrowDown} />
      </Button>
    </CardComponentStyle>
  )
}

export default memo(Card)
