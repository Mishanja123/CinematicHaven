import PropTypes from 'prop-types';

import {SectionBox, Container } from './Section.styled';

export const Section = ({ children }) => {
    return (
        <SectionBox>
            <Container>
                {children}
            </Container>
        </SectionBox>
    );
};
Section.propTypes = {
    children: PropTypes.node,
};