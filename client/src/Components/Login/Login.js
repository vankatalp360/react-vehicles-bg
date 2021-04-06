import { auth } from "../../utils/firebase";
import "./Login.css"

const Login = ({
    history
}) => {

    const onLoginSubmitHandler = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        auth.signInWithEmailAndPassword(email, password)
            .then((userCredentials) => {
                history.push('/');
            });
    };


    return(
        <div className="form-wrapper">
                <h1>Login</h1>
                <form onSubmit={onLoginSubmitHandler}>
                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input 
                            type="text" 
                            name="email" 
                            id="email"
                            placeholder="Enter e-mail" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password"
                            placeholder="Enter password" />
                    </div>
                    <input type="submit" value="Login"/>
                </form>
            </div>
    );
}

export default Login;