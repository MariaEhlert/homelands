import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../Helpers/Auth/Auth";
import axios from "axios";


export const UserComments = () => {
    const {user_id} = useParams();
    const {loginData} = useAuth();
    const [userComments, setUserComments] = useState([]);
    useEffect(() => {
        const getUserComments = async () => {
            try {
                const result = await axios.get(`https://api.mediehuset.net/homelands/reviews`);
                if (result.data) {
                    setUserComments(result.data.items);
                    // console.log(result.data.items);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getUserComments();
    }, [])
    return(
        <>
        <h3>Title</h3>
        <h3>Data</h3>
        <h3>Handling</h3>
        {userComments.filter(user => user.user_id == loginData.user_id).map(getUser => {
            return(
                <article key={getUser.id}>
                    <p>{getUser.title}</p>
                    <p>{getUser.created_friendly}</p>
                    <Link to={''}>Rediger</Link>
                    <Link to={''}>Slet</Link>
                </article>
            )
        })}

        </>
    )
}