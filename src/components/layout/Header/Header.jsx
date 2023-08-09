import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { HeaderDiv, Container, Link } from './Header.styled';

export const Header = () => {

    return(
        <div>
            <HeaderDiv>
                <Container>
                    <nav>
                        <Link to="/" end>Home</Link>
                        <Link to="/movies">Movies</Link>
                    </nav>
                </Container>
            </HeaderDiv>
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet />
            </Suspense>
        </div>
    );
};