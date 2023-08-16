import SearchSvg from '../Svg/SearchSvg/SearchSvg';

import { Container, Form, Input, SearchBtn } from './SearchMovie.styled';

export const SearchMovie = ({ onSubmit }) => {
    
    return (
        <Container>
        <Form onSubmit={onSubmit}>
            <SearchBtn type='submit'><SearchSvg/></SearchBtn>
            <Input
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Type here to search"
            />
        </Form>
        </Container>
    );
};