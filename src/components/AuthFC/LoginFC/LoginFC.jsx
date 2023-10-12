import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import Notiflix from 'notiflix';

import {setUser} from '../../../store/slices/userSlice'

import {FormFC} from '../FormFC/FormFC';
import { FormBox } from './LoginFC.styled';

export const LoginFC = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.refreshToken,
            }));
            navigate('/');
            Notiflix.Notify.success('Successfuly logined');
        })
        .catch((error) => Notiflix.Notify.warning(`${error.massege}`))
    };


    return (
        <FormBox>
            <FormFC
                handleClick={handleLogin}
                title="login"
            />
        </FormBox>

    )
}

