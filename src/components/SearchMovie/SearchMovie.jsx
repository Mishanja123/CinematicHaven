// import SearchSvg from '../Svg/SearchSvg/SearchSvg';

import { Form, Input} from './SearchMovie.styled';

export const SearchMovie = ({ onSubmit }) => {
    
    return (
        <>
        <Form onSubmit={onSubmit}>
            {/* <SearchBtn type='submit'><SearchSvg/></SearchBtn> */}
            <Input
            type="text"
            name="query"
            autoComplete="off"
            autoFocus="off"
            placeholder="Type here to search"
            />
        </Form>
        </>
    );
};