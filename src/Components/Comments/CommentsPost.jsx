import { useForm } from 'react-hook-form';
import axios from "axios";

export const CommentPost = () => {
    const { register, handleSubmit, formState:{errors} } = useForm();
    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('content', data.content);
        formData.append('user_id', data.user_id);
        formData.append('num_stars', data.num_stars);
        formData.append('active', 1);
            const result = await axios.post('https://api.mediehuset.net/homelands/reviews', formData);
            if(result){
                console.log('ok');
            } else{
            console.log(errors);
        }
        

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
            <label htmlFor="title">Title</label> <br/>
            <input type="text" id="title" placeholder="Indtast en title"{...register('title', {required: true})} />
            {errors.title && (
                <p>Skrive en title</p>
                )}
            </div>
            <div>
            <label htmlFor="content">Kommentar</label> <br/>
            <textarea id="content" placeholder="Send anmeldese" {...register('content', {required: true})}></textarea>
            {errors.content && (
                <p>Skrive en anmeldelse</p>
                )}
            </div>
            <div>

            <button>Send kommentar</button>
            <button type='reset'>Nulstil</button>
            </div>

        </form>

    )
}