import PropTypes from 'prop-types';

import { Container } from './Section.styled';

export const Section = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    );
};
Section.propTypes = {
    children: PropTypes.node,
};