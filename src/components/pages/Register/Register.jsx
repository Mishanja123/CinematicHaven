import {RegisterFC} from "../../AuthFC/RegisterFC/RegisterFC";
import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div>
            <RegisterFC/>
            <p>
                Already heva an account ? <Link to="/login">Sign in</Link>
            </p>
        </div>
    )
}

export default Register;

