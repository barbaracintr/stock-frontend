
import { Item, StyledLink } from "./styles.js"

export const ItemNav = ({ option }) => {
  return (
      <Item>
        <StyledLink to={`/${option.src}`}>
            <img src={option.icon} />
            <span>{option.name}</span>
        </StyledLink>
      </Item>
  );
};
