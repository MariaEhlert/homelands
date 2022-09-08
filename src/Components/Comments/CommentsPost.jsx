import { useForm } from 'react-hook-form';
import axios from "axios";
import './CommentsPost.scss';
import { authHeader } from '../Helpers/Auth/Auth';
import { Link } from 'react-router-dom';



export const CommentPost = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('content', data.content);
        formData.append('user_id', data.user_id);
        formData.append('num_stars', data.num_stars);
        formData.append('active', 1);

        const result = await axios.post('https://api.mediehuset.net/homelands/reviews', formData, { headers: authHeader() });
        if (result) {
            console.log('ok');

        } else {
            console.log(errors);
        }
    }
    return (
        <section>
            {!onSubmit ? (
        <article className='formWrapper'>
                <form onSubmit={handleSubmit(onSubmit)}>
                <h5>Skriv en anmeldelse</h5>
                <div className='formElement'>
                    <div className='formInput'>
                        <label>Title</label>
                        <input type="text" id="title" placeholder="Indtast en title"{...register('title', { required: true })} />
                    </div>
                    <span>
                        {errors.title && (
                            <p>Skrive en title</p>
                        )}
                    </span>
                </div>
                <div className='formElement'>
                    <div className='formInput'>
                        <label>Kommentar</label>
                        <textarea id="content" placeholder="Send anmeldese" {...register('content', { required: true })}></textarea>
                    </div>
                    <span>
                        {errors.content && (
                            <p>Skrive en anmeldelse</p>
                        )}
                    </span>
                </div>
                <div className='formElement'>
                    <div className='formInput'>
                        <label>Antal stjerner</label>
                        <input type='number' id="num_stars" placeholder="Fra 1 til 5" {...register('num_stars', { required: true, min: 1, max: 5 })}></input>
                    </div>
                    <span>
                        {errors.num_stars && (
                            <p>Giv antal stjerner fra 1 til 5</p>
                        )}
                    </span>
                </div>
                <div className='btnWrapper'>
                    <button>Send kommentar</button>
                    <button type='reset'>Nulstil</button>
                </div>
            </form>
        </article>
            ) : 
            (
                <article className='commentsPosted'>
                    <p>Tak for din anmeldelse af HomeLands!</p>
                    <Link to={'/login'}>Se din anmeldelse</Link>
                </article>
            )}
        </section>

    )
}