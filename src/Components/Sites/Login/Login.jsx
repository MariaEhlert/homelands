import axios from "axios";
import { useForm } from "react-hook-form";
import { UserComments } from "../../Comments/UserComments";
import { useAuth } from "../../Helpers/Auth/Auth";
import { Layout } from "../../Helpers/Layout/Layout"

export const Login = () => {
        //register og handleSubmit kommer fra useForm
        const {register, handleSubmit, formState: {errors}} = useForm();
        // kalder custum state hooks useAuth
        const {loginData, setLoginData} = useAuth();
        const sendLoginRequest = async data => { 
            const formData = new FormData();
            formData.append('username', data.username);
            formData.append('password', data.password);
            const result = await axios.post('https://api.mediehuset.net/token', formData);
            handleSessionData(result.data);
        }
        const handleSessionData = data => {
            if(data){
                sessionStorage.setItem('token', JSON.stringify(data))
                setLoginData(data);
            }
    
        }
        const logOut = () => {
            sessionStorage.removeItem('token');
            setLoginData('');
        }
    return(
        <Layout title='Login' description='login'>
            {!loginData && !loginData.username ? (
                <>
                <h1>Login</h1>
                {/* closer  */}
                {/* en måde man sender en function videre */}
                {/* sendLoginRequest lukker handleSubmit's funktion */}
                <form onSubmit={handleSubmit(sendLoginRequest)}>
                        <div>
                            <input type="text" placeholder="Indtast brugernavn" id="username" {...register("username", {required: true})} />
                            {/* && hvis er der fejl så skal den sende en fejl besked */}
                            {errors.username && (
                                <span>Du skal indtaste dit brugernavn</span>
                            )}
                        </div>
                        <div>
                            <input type="password" placeholder="Indtast adgangskode" id="password" {...register("password", {required: true})} />
                            {/* && hvis er der fejl så skal den sende en fejl besked */}
                            {errors.password && (
                                <span>Du skal indtaste din adgangskode</span>
                            )}
                        </div>
                        <div>
                            <button>Login</button>
                        </div>
                </form>
                </>
            ) : 
            (
                <div>
                    <p>Logget ind som {loginData.username}</p>
                    <button onClick={logOut}>Log ud</button>
                </div>
            )
            }
            <UserComments/>
        </Layout>
    )
}