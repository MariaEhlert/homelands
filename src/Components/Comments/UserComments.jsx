import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { authHeader, useAuth } from "../Helpers/Auth/Auth";
import axios from "axios";


export const UserComments = () => {
    const { loginData } = useAuth();
    const [userComments, setUserComments] = useState([]);
        useEffect(() => {
            const getUserComments = async () => {
                try {
                    const result = await axios.get(`https://api.mediehuset.net/homelands/reviews`);
                    if (result.data) {
                        setUserComments(result.data.items);
                    }
                } catch (error) {
                    console.log(error);
                }
            }
            getUserComments();
        }, [])
    
    const deleteComment = async (id) => {
        try {
            const result = await axios.delete(`https://api.mediehuset.net/homelands/reviews/${id}`, { headers: authHeader() });
            if (result) {
                window.location.reload()
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            {!loginData ?
                (
                    <p>Du skal logge ind for at se dine kommentar</p>
                )
                :
                (
                    <>
                        <h3>Title</h3>
                        <h3>Data</h3>
                        <h3>Handling</h3>
                        {userComments.filter(user => user.user_id == loginData.user_id).map(getUser => {
                            return (
                                <article key={getUser.id}>
                                    <p>{getUser.title}</p>
                                    <p>{getUser.created_friendly}</p>
                                    <Link to={getUser.id}>Rediger</Link>
                                    {/* <Link to={''}>Slet</Link> */}
                                    <button onClick={() => deleteComment(getUser.id)}>Slet</button>
                                </article>
                            )
                        })}
                    </>
                )}

        </>
    )
}
