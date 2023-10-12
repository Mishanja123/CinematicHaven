import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore";
import Notiflix from 'notiflix';

import {db} from '../../../auth/firebase';
import {setUser} from '../../../store/slices/userSlice'

import {FormFC} from '../FormFC/FormFC';


export const RegisterFC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const createWatchlist = async(uid) => {
        const watchlistRef = doc(db, "watchlists", uid);
        await setDoc(watchlistRef, { userId: uid, movies: [] });
    };

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.refreshToken,
            }));
            createWatchlist(user.uid)
            navigate('/');
            Notiflix.Notify.success('Successfuly registered');
        })
        .catch((error) => Notiflix.Notify.warning(`${error.message}`))
    };
 
    return (
        <FormFC 
            handleClick={handleRegister}
            title="Register"
        />
    )
}

