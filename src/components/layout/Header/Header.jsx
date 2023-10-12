import { useState, Suspense } from 'react';
import { Outlet, useNavigate, createSearchParams } from 'react-router-dom';
import { useAuth } from '../../../hooks/use-auth';

import { SearchMovie } from '../../SearchMovie/SearchMovie';
import { GenresModal } from 'components/Modal/GenresModal/GenresModal';
import { MenuModal } from 'components/Modal/MenuModal/MenuModal';
import { MobileMenuModal } from 'components/Modal/MobileMenuModal/MobileMenuModal';
import HomeSvg from '../../Svg/HomeSvg/HomeSvg'
import LikeSvg from '../../Svg/LikeSvg/LikeSvg';
import MenuSvg from '../../Svg/MenuSvg/MenuSvg';
import MobileMenuSvg from '../../Svg/MobileMenuSvg/MobileMenuSvg';
import ListTrueSvg from '../../Svg/ListTrueSvg/ListTrueSvg';
import ListFalseSvg from '../../Svg/ListFalseSvg/ListFalseSvg';

import { HeaderBox, SearchWrap, Link, Nav, NavLog, MenuWrap, Button, MobileMenuBtn } from './Header.styled';


export const Header = () => {
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { isAuth } = useAuth();
    const navigate = useNavigate();
    

    
    const onSubmit = (e) => {
        e.preventDefault();
        const query = e.target.query.value
        navigate({
            pathname:"/",
            search: `?${createSearchParams({query})}`
        })
        e.target.reset();
    };

    const openCategory = () => {
        setIsCategoryOpen(true);
    };

    const closeCategory = () => {
        setIsCategoryOpen(false);
    };

    const openMenu = () => {
        setIsMenuOpen(true);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const openMobileMenu = () => {
        setIsMobileMenuOpen(true);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };



    return(
        <>
            <HeaderBox>
                    <SearchWrap>
                        <SearchMovie
                        onSubmit={onSubmit}
                        />
                        <Nav>
                            <Link to="/" end>
                                <HomeSvg/>
                            </Link>
                            <Link to="/watchlist">
                                <LikeSvg/>
                            </Link>
                        </Nav>
                        <Button type='button' onClick={openCategory}>{isCategoryOpen ? <ListTrueSvg/> : <ListFalseSvg/>}</Button>
                    </SearchWrap>
                    <MenuWrap>
                        {isAuth ? (
                            <div>
                            <Button type='button' onClick={openMenu}><MenuSvg/></Button>
                            </div>
                        ) : (
                            <NavLog>
                                <Link to="/register">
                                    reg
                                </Link>

                                <Link to="/login">
                                    log
                                </Link>
                            </NavLog>
                        )}
                        <MobileMenuBtn onClick={openMobileMenu}><MobileMenuSvg/></MobileMenuBtn>    
                    </MenuWrap>
                    {isCategoryOpen && <GenresModal onClose={closeCategory} isCategoryOpen={isCategoryOpen} />}
                    {isMenuOpen && <MenuModal onClose={closeMenu} isMenuOpen={isMenuOpen} />}
                    {isMobileMenuOpen && <MobileMenuModal onClose={closeMobileMenu} isMobileMenuOpen={isMobileMenuOpen} />}
            </HeaderBox>
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet />
            </Suspense>
        </>
    );
};