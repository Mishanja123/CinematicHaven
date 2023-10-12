import { Link } from 'react-router-dom';
import { Box } from './UnAuth.styled';

export const UnAuth = () => {
    return (
        <Box>
        <Link to="/login">Sign-in for see your watchlist :)</Link>
        </Box>
    )
}