import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import HomeSvg from '../../Svg/HomeSvg/HomeSvg'
import MovieSvg from '../../Svg/MovieSvg/MovieSvg'
import LikeSvg from '../../Svg/LikeSvg/LikeSvg';


import { HeaderDiv, Container, Link, Nav } from './Header.styled';

export const Header = () => {

    return(
        <div>
            <HeaderDiv>
                <Container>
                    <Nav>
                        <Link to="/" end>
                            <HomeSvg/>
                        </Link>
                        <Link to="/movies">
                            <MovieSvg/>
                        </Link>
                        <Link to="/liked">
                            <LikeSvg/>
                        </Link>
                    </Nav>
                </Container>
            </HeaderDiv>
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet />
            </Suspense>
        </div>
    );
};