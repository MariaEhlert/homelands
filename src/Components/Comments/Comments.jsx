import './Comments.scss';
import React, { useState, useEffect } from "react"
import axios from "axios";
export const Comments = () => {
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
    const firstComment = comments.slice(9, 13);

    return (
        <section className='commentsWrapper'>
            {firstComment && firstComment.map((item) => {
                return (
                    <article key={item.id}>
                        <h5>{item.title}</h5>
                        <p>{item.content}</p>
                        <p>{item.user.firstname}</p>
                        <p>{item.created_friendly}</p>
                    </article>
                )
            })
            }
        </section>

    )
}

export const SlideText = () => {
    return (
        <>
        </>

    )
}
