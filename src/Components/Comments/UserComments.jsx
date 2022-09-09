import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { authHeader, useAuth } from "../Helpers/Auth/Auth";
import axios from "axios";
import './UserComments.scss'


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
            // bruger authHeader til at tjekke om sessionStorage eksisterer
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
        {/* bruger conditional ternary operator da bruger kommantar kun skal vises ved login*/}
            {!loginData ?
                (
                    <></>
                )
                :
                (
                    <table className="userCommentsWrapper">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Data</th>
                                <th>Handling</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userComments.filter(user => user.user_id == loginData.user_id).map(getUser => {
                                return (
                                    <tr key={getUser.id}>
                                        <td>{getUser.title}</td>
                                        <td>{getUser.created_friendly}</td>
                                        <td>
                                            <Link to={getUser.id}>Rediger</Link>
                                            <button onClick={() => deleteComment(getUser.id)}>Slet</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                )}

        </>
    )
}
