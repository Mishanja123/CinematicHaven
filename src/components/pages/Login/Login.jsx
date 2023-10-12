import {LoginFC} from '../../AuthFC/LoginFC/LoginFC';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div>
            <LoginFC/>
            <p>
                Or <Link to="/register">register</Link>
            </p>
        </div>
    )
}

export default Login;
