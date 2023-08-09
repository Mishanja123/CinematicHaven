// import { useState,  useEffect, useRef} from 'react';
import { Container, Form, Input, SearchBtn } from './SearchMovie.styled';

export const SearchMovie = ({ onSubmit }) => {
    
    return (
        <Container>
        <Form onSubmit={onSubmit}>
            <Input
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
            />
            <SearchBtn type='submit'>Search</SearchBtn>
        </Form>
        </Container>
    );
};