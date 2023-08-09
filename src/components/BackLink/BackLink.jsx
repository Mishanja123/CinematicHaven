import { StyledLink } from './BackLink.styled';

export const BackLink = ({ to, children }) => {

  return (
    <StyledLink to={to}>
      {children}
    </StyledLink>
  );
};