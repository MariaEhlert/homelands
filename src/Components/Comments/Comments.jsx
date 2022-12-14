import './Comments.scss';
import React, { useState, useEffect } from "react"
import axios from "axios";
import Carousel from 'react-material-ui-carousel';
import { useAuth } from '../Helpers/Auth/Auth';
import { CommentPost } from './CommentsPost';
import { Link } from 'react-router-dom';
export const Comments = () => {
    const {loginData} = useAuth();
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const getComments = async () => {
            try {
                const result = await axios.get('https://api.mediehuset.net/homelands/reviews');
                if (result.data) {
                    setComments(result.data.items);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getComments();
    }, [])
    const firstComment = comments.slice(69, 72);
    return (
        <>
        <section className='commentsWrapper'>
            <Carousel animation="fade" interval="5000" showThumbs={false}>
                {firstComment && firstComment.map((item) => {
                    return (
                        <article key={item.id}>
                            <h5>{item.title}</h5>
                            <p>{item.content}</p>
                            <p>{item.user.firstname}, {item.created_friendly}</p>
                            <p>Antal stjerner: {item.num_stars}</p>
                        </article>
                    )
                })
            }
            </Carousel>
            
        </section>
        <section className='submitComment'>
        {/* burger conditional ternary operator til at tjekke om bruger er logget ind for at kunne lave en anmedelse */}
        {!loginData ? (
            <Link to={'/login'}>
                <p>Log ind for at skrive en anmeldelse</p>
            </Link>
        )
        :
        (
            <>
            <CommentPost />
            </>
        )}
        </section>
        </>

    )
}
