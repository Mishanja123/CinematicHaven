import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';



import {Box,SecondHeading,List,LiItem} from './AditionalInformation.styled';


export const AditionalInformation = () => {

    return (
        <Box>
            <SecondHeading>Aditional information</SecondHeading>
            <List>
                <LiItem>
                    <Link to="reviews">
                        Reviews
                    </Link>
                </LiItem>
            </List>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense> 
        </Box>
    );
};