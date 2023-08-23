import BackSvg from '../Svg/BackSvg/BackSvg';

import { StyledLink } from './BackLink.styled';


export const BackLink = ({ to, children, title }) => {

  return (
    <StyledLink to={to}>
      {title}
      <BackSvg />
      {children}
    </StyledLink>
  );
};